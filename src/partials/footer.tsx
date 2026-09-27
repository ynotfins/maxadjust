"use client";

import { motion } from "framer-motion";
import { Bolt, Award, Handshake, TrendingUp } from "lucide-react";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import Icon from "~/components/icon";

const highlights = [
    {
        icon: Bolt,
        title: "Immediate Response",
        blurb: "24/7 when disaster hits",
        color: "from-sky-400 to-blue-600",
    },
    {
        icon: Award,
        title: "Certified Pros",
        blurb: "Licensed public adjusters",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: Handshake,
        title: "We Work for You",
        blurb: "Never for the insurer",
        color: "from-rose-500 to-red-600",
    },
    {
        icon: TrendingUp,
        title: "Maximize Payment",
        blurb: "Fight for every dollar",
        color: "from-red-500 to-orange-500",
    },
];

/** Animated brand ribbon — replaces the old fire-photo feature strip. */
export function AnimatedHighlightsBar() {
    return (
        <section
            className="relative overflow-hidden py-14 md:py-16"
            aria-label="Why Max Adjust"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
            <motion.div
                className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/30 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-secondary/25 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:24px_24px]" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {highlights.map((item, index) => {
                        const IconCmp = item.icon;
                        return (
                            <motion.article
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                            >
                                <motion.div
                                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                                    animate={{ rotate: [0, 4, -4, 0] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        delay: index * 0.4,
                                    }}
                                >
                                    <IconCmp className="h-7 w-7" />
                                </motion.div>
                                <h3 className="text-white font-bold text-lg md:text-xl tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm md:text-base text-slate-300">
                                    {item.blurb}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default function Footer() {
    return (
        <footer
            className="flex flex-col mt-2xl"
            role="contentinfo"
            aria-label="Site footer"
        >
            <AnimatedHighlightsBar />

            <section className="flex flex-col gap-4xl min-h-[30vh] w-full page-borders !py-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2xl">
                    <nav
                        className="flex flex-col gap-lg"
                        aria-label="Services navigation"
                    >
                        <h3 className="text-xl text-primary border-b-2 border-primary pb-2">
                            Services
                        </h3>

                        <ul className="flex flex-col gap-md text-gray-500 text-md">
                            <li>
                                <Link href="/water-damage" title="Water Damage Services">
                                    Water Damage
                                </Link>
                            </li>
                            <li>
                                <Link href="/fire-damage" title="Fire Damage Services">
                                    Fire Damage
                                </Link>
                            </li>
                            <li>
                                <Link href="/storm-damage" title="Storm Damage Services">
                                    Storm Damage
                                </Link>
                            </li>
                            <li>
                                <Link href="/mold-damage" title="Mold Damage Services">
                                    Mold Damage
                                </Link>
                            </li>
                            <li>
                                <Link href="/commercial" title="Commercial Services">
                                    Commercial
                                </Link>
                            </li>
                            <li>
                                <Link href="/construction" title="Construction Services">
                                    Construction
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="flex flex-col gap-lg" aria-label="Company">
                        <h3 className="text-xl text-primary border-b-2 border-primary pb-2">
                            Company
                        </h3>
                        <ul className="flex flex-col gap-md text-gray-500 text-md">
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link href="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <a href={`tel:${branding.phoneNumber.replace(/\D/g, "")}`}>
                                    {branding.phoneNumber}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${branding.email}`}>{branding.email}</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className="flex flex-col gap-lg" aria-label="Legal navigation">
                        <h3 className="text-xl text-primary border-b-2 border-primary pb-2">
                            Legal
                        </h3>
                        <ul className="flex flex-col gap-md text-gray-500 text-md">
                            <li>
                                <Link href="/privacy">Privacy</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms</Link>
                            </li>
                            <li>
                                <Link href="/disclaimer">Disclaimer</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex flex-col gap-lg">
                        <h3 className="text-xl text-primary border-b-2 border-primary pb-2">
                            {branding.name}
                        </h3>
                        <p
                            className="text-gray-500 text-md leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: branding.primaryAddress,
                            }}
                        />
                        <div className="flex items-center gap-3 text-primary">
                            <Icon icon="mdi:shield-check" className="size-6" />
                            <span className="font-semibold">
                                Licensed public adjusters
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} {branding.legalName.long}. All rights
                    reserved.
                </div>
            </section>
        </footer>
    );
}
