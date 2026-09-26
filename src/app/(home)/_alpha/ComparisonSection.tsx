"use client";

import { CheckCircle, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ComparisonSection() {
    const scrollToContact = () => {
        const element = document.getElementById("contact-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const withUs = [
        "Expert policy analysis to maximize your coverage",
        "Professional documentation and claim submission",
        "Direct negotiation with insurance companies",
        "Licensed professionals working exclusively for you",
        "Average 500% higher settlements than self-filed claims",
    ];

    const selfFiled = [
        "Limited knowledge of policy terms and coverage",
        "Time-consuming paperwork and documentation",
        "Insurance adjusters work to minimize payouts",
        "Risk of claim denial due to technicalities",
        "Typically receive much lower settlements",
    ];

    return (
        <section
            id="comparison-section"
            alpha-section-id="comparison-section"
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
                    <h2 className="ma-section-title mb-4">
                        Why Choose a Public Adjuster?
                    </h2>
                    <p className="ma-section-sub max-w-3xl mx-auto">
                        We handle the entire claims process and negotiate fair
                        settlements while you focus on recovery
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    <motion.div
                        className="ma-card bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="ma-icon-tile bg-gradient-to-br from-blue-600 to-blue-700">
                                <span className="text-lg md:text-xl font-black">
                                    MA
                                </span>
                            </div>
                            <h3 className="ma-card-title">With MAX ADJUST</h3>
                        </div>

                        <ul className="space-y-4 md:space-y-5">
                            {withUs.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 md:gap-4"
                                >
                                    <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-green-500 mt-0.5 flex-shrink-0" />
                                    <p className="ma-card-body text-gray-800">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="ma-card bg-gradient-to-br from-red-50 to-white border-2 border-red-200"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="ma-icon-tile bg-gradient-to-br from-red-500 to-red-600">
                                <span className="text-lg md:text-xl font-black">
                                    SF
                                </span>
                            </div>
                            <h3 className="ma-card-title">Self-Filed Claims</h3>
                        </div>

                        <ul className="space-y-4 md:space-y-5">
                            {selfFiled.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 md:gap-4"
                                >
                                    <X className="w-6 h-6 md:w-7 md:h-7 text-red-500 mt-0.5 flex-shrink-0" />
                                    <p className="ma-card-body text-gray-800">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center mt-10 md:mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <button
                        type="button"
                        onClick={scrollToContact}
                        className="ma-btn-primary"
                    >
                        Get Your Free Evaluation
                        <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
