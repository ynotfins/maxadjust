"use client";

import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    const scrollToContact = () => {
        const element = document.getElementById("contact-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero-section"
            alpha-section-id="hero-section"
            className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-background pt-10 md:pt-16"
        >
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div
                    className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl opacity-50 animate-pulse"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        className="text-left space-y-8 md:space-y-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="ma-badge bg-primary/10 border border-primary/20 text-primary"
                        >
                            <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
                            24/7 EMERGENCY RESPONSE
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
                            Maximize Your <br />
                            <span className="text-gradient">
                                Insurance Settlement
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                            Licensed public adjusters fighting for your rights.
                            We handle everything from documentation to
                            negotiation, ensuring you get the maximum payout you
                            deserve.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <a href="tel:8889995740" className="ma-btn-primary">
                                <Phone className="w-6 h-6 md:w-7 md:h-7" />
                                (888) 999-5740
                            </a>
                            <button
                                type="button"
                                onClick={scrollToContact}
                                className="ma-btn-secondary"
                            >
                                Free Evaluation
                                <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
                            </button>
                        </motion.div>

                        <motion.div
                            className="pt-8 grid grid-cols-3 gap-4 md:gap-8 border-t border-gray-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {[
                                {
                                    value: "500%",
                                    label: "Higher Settlements",
                                },
                                {
                                    value: "24/7",
                                    label: "Emergency Support",
                                },
                                {
                                    value: "100%",
                                    label: "No Risk Guarantee",
                                },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium mt-2 leading-snug">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative lg:h-[640px] flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] transform rotate-6 opacity-20 blur-2xl" />
                            <div
                                className="ma-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
                                style={{ minHeight: "auto" }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10" />
                                <div className="space-y-6 md:space-y-8 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wider">
                                            Settlement Comparison
                                        </div>
                                        <div className="h-14 w-14 md:h-16 md:w-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-600">
                                            <ArrowRight className="w-7 h-7 md:w-8 md:h-8 -rotate-45" />
                                        </div>
                                    </div>

                                    <div className="ma-card p-5 md:p-6 bg-gray-50 border-gray-100">
                                        <div className="flex justify-between mb-3">
                                            <span className="text-base md:text-lg text-muted-foreground">
                                                Insurance Initial Offer
                                            </span>
                                            <span className="text-base md:text-lg font-medium text-muted-foreground line-through">
                                                $15,000
                                            </span>
                                        </div>
                                        <div className="h-3 md:h-4 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gray-400 rounded-full"
                                                style={{ width: "25%" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="ma-card p-5 md:p-6 bg-primary/5 border-primary/20">
                                        <div className="flex justify-between mb-3 items-center">
                                            <span className="text-base md:text-lg font-bold text-primary">
                                                MAX ADJUST Result
                                            </span>
                                            <span className="text-2xl md:text-3xl font-black text-primary">
                                                $67,000
                                            </span>
                                        </div>
                                        <div className="h-4 md:h-5 bg-primary/20 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="mt-3 text-lg md:text-xl font-bold text-green-600">
                                            +347%
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-base md:text-lg text-muted-foreground bg-gray-50 p-5 md:p-6 rounded-2xl">
                                        <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0" />
                                        Average client settlement increase
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
