"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { show } from "@intercom/messenger-js-sdk";

const FLIGHT_QUESTIONS = [
    "Did your insurer already make an offer? I can help you spot lowballs.",
    "Have you photographed every room yet? Wide shots + close-ups matter.",
    "Want me to review claim wording before you send anything?",
    "Are you tracking receipts for food, lodging, and emergency repairs?",
    "Upload your policy — I’ll sketch best-case and worst-case scenarios.",
    "Need a licensed public adjuster on your side right now?",
    "Stuck waiting on an adjuster visit? Let’s prepare your evidence pack.",
];

const POSITIONS = [
    { x: 0, y: 0 },
    { x: -48, y: -180 },
    { x: -24, y: -320 },
    { x: -220, y: -40 },
] as const;

/**
 * Guardian AI flies around the viewport and gently asks helpful questions.
 * Skippable. Mirrors NFA soft-recommend intent — never blocks navigation.
 */
export function GuardianFollow() {
    const [dismissed, setDismissed] = useState(false);
    const [bubbleOpen, setBubbleOpen] = useState(false);
    const [qIndex, setQIndex] = useState(0);
    const [posIndex, setPosIndex] = useState(0);

    useEffect(() => {
        try {
            if (sessionStorage.getItem("ma-guardian-dismissed") === "1") {
                setDismissed(true);
            }
        } catch {
            /* ignore */
        }
    }, []);

    useEffect(() => {
        if (dismissed) return;

        const fly = window.setInterval(() => {
            setPosIndex((p) => (p + 1) % POSITIONS.length);
            setQIndex((q) => (q + 1) % FLIGHT_QUESTIONS.length);
            setBubbleOpen(true);
        }, 9000);

        const first = window.setTimeout(() => setBubbleOpen(true), 2500);

        return () => {
            window.clearInterval(fly);
            window.clearTimeout(first);
        };
    }, [dismissed]);

    if (dismissed) return null;

    const question = FLIGHT_QUESTIONS[qIndex]!;
    const pos = POSITIONS[posIndex]!;

    const dismiss = () => {
        setDismissed(true);
        try {
            sessionStorage.setItem("ma-guardian-dismissed", "1");
        } catch {
            /* ignore */
        }
    };

    const talk = () => {
        setBubbleOpen(false);
        try {
            show();
        } catch {
            document
                .getElementById("crisis-navigator")
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div
            className="fixed bottom-24 right-4 z-[9999990] max-w-[min(100vw-2rem,20rem)]"
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
        >
            <AnimatePresence>
                {bubbleOpen ? (
                    <motion.div
                        key={question}
                        role="dialog"
                        aria-label="Guardian AI question"
                        className="mb-3 rounded-3xl border border-primary/20 bg-white/95 backdrop-blur-md shadow-[var(--ma-shadow-lift)] p-4 space-y-3"
                        initial={{ opacity: 0, y: 12, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    >
                        <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-bold text-primary">
                                Guardian AI
                            </p>
                            <button
                                type="button"
                                onClick={() => setBubbleOpen(false)}
                                className="p-1 rounded-full hover:bg-slate-100 text-slate-400"
                                aria-label="Close tip"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-sm md:text-base text-slate-700 leading-snug">
                            {question}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={talk}
                                className="inline-flex items-center gap-1.5 rounded-xl bg-primary text-white text-sm font-semibold px-3 py-2"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Help me
                            </button>
                            <button
                                type="button"
                                onClick={dismiss}
                                className="text-xs font-medium text-slate-500 underline underline-offset-2 px-1"
                            >
                                Hide for this visit
                            </button>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <motion.button
                type="button"
                onClick={() => setBubbleOpen((v) => !v)}
                className="ml-auto flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white pl-2 pr-4 py-2 shadow-[var(--ma-shadow-lift)]"
                aria-expanded={bubbleOpen}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
            >
                <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl"
                    aria-hidden
                >
                    😇
                </span>
                <span className="text-sm font-bold">Guardian</span>
            </motion.button>
        </motion.div>
    );
}
