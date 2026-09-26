"use client";

import { Zap, FileText, Shield, CreditCard, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
    const features = [
        {
            icon: Zap,
            title: "24/7 Emergency Response",
            description:
                "Immediate assistance when disaster strikes. We're there when you need us most.",
            gradient: "from-orange-500 to-red-500",
        },
        {
            icon: FileText,
            title: "Licensed Professionals",
            description:
                "State-certified public adjusters with decades of experience handling complex claims.",
            gradient: "from-orange-400 to-amber-500",
        },
        {
            icon: Shield,
            title: "No Risk Guarantee",
            description:
                "We only get paid when you receive your settlement. Zero upfront costs.",
            gradient: "from-red-500 to-orange-600",
        },
        {
            icon: CreditCard,
            title: "Maximum Settlements",
            description:
                "We secure an average of 500% more than self-filed insurance claims.",
            gradient: "from-amber-500 to-orange-500",
        },
        {
            icon: Clock,
            title: "Fast Processing",
            description:
                "Streamlined claims process with regular updates and dedicated case management.",
            gradient: "from-orange-600 to-red-600",
        },
        {
            icon: Users,
            title: "Dedicated Support",
            description:
                "Personal adjuster assigned to your case to guide you through every step.",
            gradient: "from-red-400 to-orange-400",
        },
    ];

    return (
        <section
            id="features-section"
            alpha-section-id="features-section"
            className="ma-section bg-background relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="ma-badge bg-primary/10 border border-primary/20 text-primary mb-6">
                        <Shield className="w-5 h-5 md:w-6 md:h-6" />
                        WHY CHOOSE MAX ADJUST
                    </div>

                    <h2 className="ma-section-title mb-5">
                        Your Trusted Partner in{" "}
                        <span className="text-gradient">Insurance Claims</span>
                    </h2>
                    <p className="ma-section-sub max-w-2xl mx-auto">
                        We&apos;re committed to getting you the maximum
                        settlement you deserve with our proven process and
                        dedicated team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                className="ma-card group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className={`ma-icon-tile bg-gradient-to-br ${feature.gradient} mb-5 group-hover:scale-105 transition-transform`}
                                >
                                    <IconComponent />
                                </div>
                                <h3 className="ma-card-title mb-3">
                                    {feature.title}
                                </h3>
                                <p className="ma-card-body">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
