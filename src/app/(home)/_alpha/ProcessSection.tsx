"use client";

import { Phone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessSection() {
    const steps = [
        {
            number: 1,
            title: "Free Claim Evaluation",
            description:
                "Call us for a comprehensive assessment of your property damage and insurance policy coverage.",
        },
        {
            number: 2,
            title: "Professional Documentation",
            description:
                "Our licensed adjusters submit all necessary paperwork and provide detailed damage estimates.",
        },
        {
            number: 3,
            title: "Expert Negotiation",
            description:
                "We negotiate directly with your insurance company to maximize your settlement.",
        },
        {
            number: 4,
            title: "Settlement Finalization",
            description:
                "We secure the best possible settlement and present you with full replacement value.",
        },
        {
            number: 5,
            title: "Maximum Payout",
            description:
                "You receive a significantly higher settlement than self-filed claims.",
        },
    ];

    return (
        <section
            id="process-section"
            alpha-section-id="process-section"
            className="ma-section bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="ma-badge bg-blue-100 border border-blue-200 text-blue-800 mb-5">
                                <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                                PROVEN 5-STEP PROCESS
                            </div>

                            <h2 className="ma-section-title mb-4">
                                How We Get You Maximum Settlements
                            </h2>

                            <p className="ma-section-sub mb-8">
                                Our adjusters consistently secure settlements
                                close to double what insurance companies
                                initially offer.
                            </p>
                        </motion.div>

                        <div className="space-y-4 md:space-y-5">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    className="ma-card flex items-start gap-4 md:gap-5"
                                    style={{ minHeight: "auto" }}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="ma-icon-tile bg-gradient-to-br from-blue-600 to-blue-700 text-xl md:text-2xl font-black">
                                        {step.number}
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="ma-card-title mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="ma-card-body">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-[2rem] transform -rotate-3 opacity-20" />
                        <div
                            className="ma-card relative"
                            style={{ minHeight: "auto" }}
                        >
                            <div className="text-center pb-6 border-b border-gray-100 mb-6">
                                <div className="ma-card-body mb-3 font-semibold uppercase tracking-wide">
                                    Average Settlement Increase
                                </div>
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    500%
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-5 mb-6">
                                <div className="ma-card bg-gray-50" style={{ minHeight: "auto" }}>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="ma-card-body font-semibold">
                                            Self-filed claim
                                        </span>
                                        <span className="text-lg md:text-xl font-bold">
                                            $10,000
                                        </span>
                                    </div>
                                    <div className="h-3 md:h-4 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gray-400 rounded-full"
                                            style={{ width: "20%" }}
                                        />
                                    </div>
                                </div>

                                <div
                                    className="ma-card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200"
                                    style={{ minHeight: "auto" }}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-base md:text-lg text-blue-700 font-bold">
                                            With MAX ADJUST
                                        </span>
                                        <span className="text-xl md:text-2xl font-black text-blue-600">
                                            $50,000
                                        </span>
                                    </div>
                                    <div className="h-4 md:h-5 bg-blue-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-4 border-t border-gray-100">
                                <div className="w-28 h-16 md:w-36 md:h-20 mx-auto mb-4 relative">
                                    <Image
                                        src="/assets/images/logo-maxadjust.svg"
                                        alt="MAX ADJUST Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <a
                                    href="tel:8889995740"
                                    className="ma-btn-primary w-full"
                                >
                                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
                                    Call for free evaluation
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
