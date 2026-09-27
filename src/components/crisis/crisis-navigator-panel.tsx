"use client";

import { useMemo, useState } from "react";
import {
    MessageCircle,
    Phone,
    Shield,
    Upload,
    Zap,
    TrendingUp,
    TrendingDown,
    FileText,
} from "lucide-react";
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
 * nfa_homeowner_portal + policy upload Best/Worst scenario CTA.
 */
export function CrisisNavigatorPanel({
    onAskGuardian,
    onStartClaim,
    onImmediateHelp,
    steps = DEFAULT_RECOVERY_STEPS,
}: CrisisNavigatorProps) {
    const [completed, setCompleted] = useState<Set<string>>(new Set());
    const [fileName, setFileName] = useState<string | null>(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [showScenarios, setShowScenarios] = useState(false);
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

    const onPolicySelected = (file: File | null) => {
        if (!file) return;
        setFileName(file.name);
        setAnalyzing(true);
        setShowScenarios(false);
        window.setTimeout(() => {
            setAnalyzing(false);
            setShowScenarios(true);
        }, 1600);
    };

    const done = completed.size;
    const total = steps.length;
    const progress = total === 0 ? 0 : done / total;

    return (
        <section
            id="crisis-navigator"
            aria-labelledby="crisis-navigator-heading"
            className="relative overflow-hidden pt-8 md:pt-12 pb-12 md:pb-16 bg-gradient-to-b from-blue-50 via-white to-white"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 right-0 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-secondary/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1.2s" }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
                <div className="space-y-3 max-w-3xl">
                    <p className="ma-badge bg-primary/10 border border-primary/20 text-primary">
                        <Shield className="w-4 h-4" />
                        Start here — Crisis Navigator
                    </p>
                    <h1
                        id="crisis-navigator-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                    >
                        <span aria-hidden="true">🧭 </span>
                        Crisis Navigator
                    </h1>
                    <p className="ma-section-sub">
                        Upload your policy. Guardian AI shows best-case and
                        worst-case — then Max Adjust goes to work to maximize
                        your return.
                    </p>
                </div>

                <div className="ma-card !min-h-0 border-primary/25 bg-white/90 shadow-[var(--ma-shadow-lift)]">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl" aria-hidden>
                                    😇
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    Upload your policy for Guardian AI
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                Free and skippable. We estimate coverage pathways
                                and common pitfalls — then our adjusters fight to
                                maximize your settlement.
                            </p>
                            <label className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 cursor-pointer">
                                <span className="ma-btn-primary flex-1 justify-center">
                                    <Upload className="w-6 h-6" />
                                    {fileName
                                        ? "Replace policy PDF"
                                        : "Upload policy PDF"}
                                </span>
                                <input
                                    type="file"
                                    accept=".pdf,.png,.jpg,.jpeg,.webp"
                                    className="sr-only"
                                    onChange={(e) =>
                                        onPolicySelected(
                                            e.target.files?.[0] ?? null,
                                        )
                                    }
                                />
                            </label>
                            {fileName ? (
                                <p className="inline-flex items-center gap-2 text-sm text-slate-600">
                                    <FileText className="w-4 h-4 text-primary" />
                                    {fileName}
                                    {analyzing ? " — Guardian is reviewing…" : ""}
                                </p>
                            ) : null}
                        </div>

                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div
                                className={`rounded-2xl border p-5 transition-all ${
                                    showScenarios
                                        ? "border-emerald-300 bg-emerald-50"
                                        : "border-dashed border-slate-200 bg-slate-50"
                                }`}
                            >
                                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Best case
                                </div>
                                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                    {showScenarios
                                        ? "Strong documentation + public adjuster advocacy can unlock full policy benefits, ALE, and a settlement far above the insurer’s first offer."
                                        : "Upload a policy to preview Guardian’s best-case pathway."}
                                </p>
                            </div>
                            <div
                                className={`rounded-2xl border p-5 transition-all ${
                                    showScenarios
                                        ? "border-rose-300 bg-rose-50"
                                        : "border-dashed border-slate-200 bg-slate-50"
                                }`}
                            >
                                <div className="flex items-center gap-2 text-rose-700 font-bold mb-2">
                                    <TrendingDown className="w-5 h-5" />
                                    Worst case
                                </div>
                                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                    {showScenarios
                                        ? "Going alone often means lowball offers, missed coverages, and wording traps that are hard to undo later."
                                        : "Upload a policy to preview risks Guardian wants you to avoid."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {showScenarios ? (
                        <div className="mt-6 rounded-2xl bg-primary/5 border border-primary/15 p-4 md:p-5">
                            <p className="text-base md:text-lg font-semibold text-foreground">
                                Next: we go to work and help you maximize your
                                return.
                            </p>
                            <p className="mt-1 text-sm md:text-base text-muted-foreground">
                                Tip: {tip}
                            </p>
                            <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                <button
                                    type="button"
                                    className="ma-btn-primary"
                                    onClick={onAskGuardian}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Talk with Guardian AI
                                </button>
                                <button
                                    type="button"
                                    className="ma-btn-secondary"
                                    onClick={onStartClaim}
                                >
                                    <Zap className="w-5 h-5" />
                                    Start claim with Max Adjust
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className="ma-card !min-h-0 border-primary/15 bg-[color-mix(in_srgb,var(--md-sys-color-primary)_5%,white)]">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="text-5xl leading-none" aria-hidden>
                            😇
                        </div>
                        <div className="flex-1 space-y-3">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                Guardian AI is here for you
                            </h3>
                            <p className="text-muted-foreground text-base md:text-lg">
                                Ask anything about claims wording, next steps, and
                                insurer pitfalls. You can skip me anytime.
                            </p>
                            <button
                                type="button"
                                className="ma-btn-primary"
                                onClick={onAskGuardian}
                            >
                                <MessageCircle className="w-6 h-6" />
                                Talk with Guardian AI
                            </button>
                        </div>
                    </div>
                </div>

                <div className="ma-card !min-h-0">
                    <div className="space-y-2 mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Steps Back to Recovery
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg">
                            Check things off as you go. No rush — Guardian is proud
                            of every step.
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
                                                        ? "bg-emerald-500 border-emerald-500 text-white"
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
                                                    <span className="block text-sm md:text-base text-muted-foreground">
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
