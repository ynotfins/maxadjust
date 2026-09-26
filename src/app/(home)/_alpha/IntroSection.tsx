"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

export default function IntroSection() {
    const cards = [
        {
            icon: Shield,
            title: "Licensed & Bonded",
            body: "State-certified professionals with decades of experience in insurance claims",
            tile: "bg-blue-600",
            card: "from-blue-50 to-white border-blue-100",
        },
        {
            icon: CheckCircle,
            title: "Zero Risk",
            body: "No upfront costs — we only get paid when you receive your settlement",
            tile: "bg-green-600",
            card: "from-green-50 to-white border-green-100",
        },
        {
            icon: TrendingUp,
            title: "Maximum Payouts",
            body: "Average 500% more than self-filed claims — proven track record",
            tile: "bg-purple-600",
            card: "from-purple-50 to-white border-purple-100",
        },
    ];

    return (
        <section
            id="intro-section"
            alpha-section-id="intro-section"
            className="ma-section bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="ma-badge bg-orange-100 border border-orange-200 text-orange-800 mb-5">
                        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />
                        DON&apos;T LET INSURANCE COMPANIES SHORTCHANGE YOU
                    </div>

                    <h2 className="ma-section-title mb-4 max-w-4xl mx-auto">
                        Expert Public Adjusters Working For You
                    </h2>

                    <p className="ma-section-sub max-w-3xl mx-auto">
                        We know every policy detail and hidden clause that
                        insurance companies won&apos;t tell you about. Our
                        licensed adjusters ensure you receive the full
                        compensation you&apos;re entitled to.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                className={`ma-card text-center bg-gradient-to-br ${card.card}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1 * (index + 1),
                                }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className={`ma-icon-tile ${card.tile} mx-auto mb-5`}
                                >
                                    <Icon />
                                </div>
                                <h3 className="ma-card-title mb-3">
                                    {card.title}
                                </h3>
                                <p className="ma-card-body">{card.body}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
