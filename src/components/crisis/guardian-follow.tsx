"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { show } from "@intercom/messenger-js-sdk";
import { GUARDIAN_TIPS } from "~/components/crisis/recovery-steps";

/**
 * Site-wide Guardian AI companion — soft, skippable tips that follow the user.
 * Mirrors nfa_homeowner_portal Guardian soft-gate intent (recommend, never force).
 */
export function GuardianFollow() {
    const [open, setOpen] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [tipIndex, setTipIndex] = useState(0);

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
        const id = window.setInterval(() => {
            setTipIndex((i) => (i + 1) % GUARDIAN_TIPS.length);
        }, 12000);
        return () => window.clearInterval(id);
    }, [dismissed]);

    if (dismissed) return null;

    const tip = GUARDIAN_TIPS[tipIndex] ?? GUARDIAN_TIPS[0]!;

    const dismiss = () => {
        setDismissed(true);
        setOpen(false);
        try {
            sessionStorage.setItem("ma-guardian-dismissed", "1");
        } catch {
            /* ignore */
        }
    };

    const talk = () => {
        setOpen(false);
        try {
            show();
        } catch {
            document
                .getElementById("crisis-navigator")
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed bottom-24 md:bottom-8 right-4 z-[9999990] flex flex-col items-end gap-3 max-w-[min(100vw-2rem,22rem)]">
            {open ? (
                <div
                    role="dialog"
                    aria-label="Guardian AI tip"
                    className="rounded-3xl border border-primary/20 bg-white shadow-[var(--ma-shadow-lift)] p-5 space-y-4"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl" aria-hidden>
                                😇
                            </span>
                            <h2 className="text-lg font-bold text-foreground">
                                Guardian AI
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100 text-muted-foreground"
                            aria-label="Close Guardian tip"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {tip}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Free and skippable — I am on your side.
                    </p>
                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            onClick={talk}
                            className="ma-btn-primary !min-h-[56px] text-base"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Talk with Guardian
                        </button>
                        <button
                            type="button"
                            onClick={dismiss}
                            className="text-sm font-medium text-muted-foreground underline underline-offset-2 py-2"
                        >
                            Hide Guardian for this visit
                        </button>
                    </div>
                </div>
            ) : null}

            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="ma-btn-primary !rounded-full !px-5 !min-h-[56px] shadow-[var(--ma-shadow-lift)]"
                aria-expanded={open}
                aria-controls="guardian-panel"
            >
                <span className="text-xl" aria-hidden>
                    😇
                </span>
                Guardian AI
            </button>
        </div>
    );
}
