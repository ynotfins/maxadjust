"use client";

import { Droplet, Flame, Cloud, Zap, House, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ClaimsSection() {
    const claims = [
        {
            icon: Droplet,
            title: "Water Damage",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: Flame,
            title: "Fire Damage",
            gradient: "from-red-500 to-red-600",
        },
        {
            icon: Cloud,
            title: "Mold Damage",
            gradient: "from-green-500 to-green-600",
        },
        {
            icon: Zap,
            title: "Storm Damage",
            gradient: "from-yellow-500 to-yellow-600",
        },
        {
            icon: House,
            title: "Smoke Damage",
            gradient: "from-gray-500 to-gray-600",
        },
        {
            icon: Droplet,
            title: "Flood Damage",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: Cloud,
            title: "Hail Damage",
            gradient: "from-indigo-500 to-indigo-600",
        },
        {
            icon: Zap,
            title: "Hurricane",
            gradient: "from-purple-500 to-purple-600",
        },
    ];

    return (
        <section
            id="claims-section"
            alpha-section-id="claims-section"
            className="ma-section bg-gradient-to-b from-gray-50 to-white"
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
                        All Types of Property Damage Claims
                    </h2>
                    <p className="ma-section-sub max-w-3xl mx-auto">
                        From water damage to natural disasters, we maximize your
                        settlement for any covered loss
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-14">
                    {claims.map((claim, index) => {
                        const IconComponent = claim.icon;
                        return (
                            <motion.a
                                key={index}
                                href="tel:8889995740"
                                className="ma-card-press text-center group block no-underline"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.04,
                                }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className={`ma-icon-tile bg-gradient-to-br ${claim.gradient} mx-auto mb-4`}
                                >
                                    <IconComponent />
                                </div>
                                <h3 className="ma-card-title group-hover:text-primary transition-colors">
                                    {claim.title}
                                </h3>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <a href="tel:8889995740" className="ma-btn-primary">
                        <Phone className="w-6 h-6 md:w-7 md:h-7" />
                        <span className="text-left leading-tight">
                            <span className="block text-xs md:text-sm font-semibold opacity-90">
                                24/7 EMERGENCY HOTLINE
                            </span>
                            <span className="block text-lg md:text-xl font-black tracking-tight">
                                (888) 999-5740
                            </span>
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
