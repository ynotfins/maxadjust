"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Phone, Shield, Zap } from "lucide-react";
import {
    DEFAULT_RECOVERY_STEPS,
    GUARDIAN_TIPS,
    type RecoveryStepItem,
} from "~/components/crisis/recovery-steps";
import branding from "~/branding";

type CrisisNavigatorProps = {
    onAskGuardian?: () => void;
    onStartClaim?: () => void;
    onImmediateHelp?: () => void;
    steps?: RecoveryStepItem[];
};

/**
 * Marketing-site Crisis Navigator — UX contract mirrored from
 * nfa_homeowner_portal (Guardian hero + Steps Back to Recovery + Immediate Help).
 * Not a Flutter rewrite; web adaptation only.
 */
export function CrisisNavigatorPanel({
    onAskGuardian,
    onStartClaim,
    onImmediateHelp,
    steps = DEFAULT_RECOVERY_STEPS,
}: CrisisNavigatorProps) {
    const [completed, setCompleted] = useState<Set<string>>(new Set());
    const tip = useMemo(
        () => GUARDIAN_TIPS[Math.floor(Math.random() * GUARDIAN_TIPS.length)]!,
        [],
    );

    const toggle = (id: string) => {
        setCompleted((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
        if (id === "guardian") onAskGuardian?.();
        if (id === "claim") onStartClaim?.();
    };

    const done = completed.size;
    const total = steps.length;
    const progress = total === 0 ? 0 : done / total;

    return (
        <section
            id="crisis-navigator"
            aria-labelledby="crisis-navigator-heading"
            className="ma-section bg-gradient-to-b from-blue-50/80 via-white to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
                <div className="space-y-3 max-w-3xl">
                    <p className="ma-badge bg-primary/10 border border-primary/20 text-primary">
                        <Shield className="w-4 h-4" />
                        After a fire or disaster
                    </p>
                    <h2
                        id="crisis-navigator-heading"
                        className="ma-section-title flex items-center gap-3"
                    >
                        <span aria-hidden="true">🧭</span>
                        Crisis Navigator
                    </h2>
                    <p className="ma-section-sub">
                        Start with Guardian AI, then check off Steps Back to
                        Recovery. Max Adjust is on your side — big buttons, calm
                        steps, no rush.
                    </p>
                </div>

                <div className="ma-card !min-h-0 border-primary/20 bg-[color-mix(in_srgb,var(--md-sys-color-primary)_6%,white)]">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        <div className="text-5xl md:text-6xl leading-none select-none" aria-hidden>
                            😇
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                Guardian AI is here for you
                            </h3>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                I help homeowners after a fire — claims wording,
                                what to do next, and how to avoid common insurer
                                pitfalls. Ask me anything. You can skip me
                                anytime.
                            </p>
                            <p className="text-sm md:text-base rounded-2xl bg-white/80 border border-primary/15 px-4 py-3 text-primary">
                                Tip: {tip}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1">
                                <button
                                    type="button"
                                    className="ma-btn-primary"
                                    onClick={onAskGuardian}
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Talk with Guardian AI
                                </button>
                                <button
                                    type="button"
                                    className="ma-btn-secondary"
                                    onClick={onStartClaim}
                                >
                                    <Zap className="w-6 h-6" />
                                    Start One-Click Claim
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ma-card !min-h-0">
                    <div className="space-y-2 mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Steps Back to Recovery
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg">
                            Check things off as you go. No rush — Guardian is
                            proud of every step.
                        </p>
                        <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mt-4">
                            <div
                                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                                style={{ width: `${progress * 100}%` }}
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {done} of {total} complete
                        </p>
                    </div>
                    <ul className="space-y-3 md:space-y-4">
                        {steps.map((step) => {
                            const checked = completed.has(step.id);
                            return (
                                <li key={step.id}>
                                    <button
                                        type="button"
                                        onClick={() => toggle(step.id)}
                                        className={`w-full text-left rounded-2xl border px-4 py-4 md:px-5 md:py-5 transition-all min-h-[var(--ma-touch)] ${
                                            checked
                                                ? "bg-emerald-50 border-emerald-200"
                                                : "bg-gray-50 border-gray-100 hover:border-primary/30"
                                        }`}
                                    >
                                        <div className="flex gap-4 items-start">
                                            <span
                                                className={`shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center text-xl ${
                                                    checked
                                                        ? "bg-emerald-500 border-emerald-500 text-white scale-110"
                                                        : "bg-white border-gray-300 text-gray-400"
                                                }`}
                                                aria-hidden
                                            >
                                                {checked ? "✅" : "○"}
                                            </span>
                                            <span className="space-y-1">
                                                <span
                                                    className={`block text-lg md:text-xl font-semibold ${
                                                        checked
                                                            ? "line-through text-muted-foreground"
                                                            : "text-foreground"
                                                    }`}
                                                >
                                                    {step.label}
                                                </span>
                                                {step.hint ? (
                                                    <span className="block text-sm md:text-base text-muted-foreground leading-snug">
                                                        {step.hint}
                                                    </span>
                                                ) : null}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button
                        type="button"
                        onClick={onImmediateHelp}
                        className="ma-btn-primary !bg-secondary hover:!bg-secondary/90"
                    >
                        <Phone className="w-6 h-6" />
                        Immediate Help — {branding.phoneNumber}
                    </button>
                    <a href="tel:911" className="ma-btn-secondary text-center">
                        Call 911 if life-threatening
                    </a>
                </div>
            </div>
        </section>
    );
}
