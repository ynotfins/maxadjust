"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { branding } from "~/branding";
import { show } from "@intercom/messenger-js-sdk";
import PhoneNumberButton from "~/components/phone-number-button";

/** Soft sticky CTA — 20% opacity so it never overpowers the page. */
export function StickyHeader() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        const handleScroll = () => setHasScrolled(window.scrollY > 140);
        checkMobile();
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    if (!isMobile && !hasScrolled) return null;

    return (
        <motion.div
            className="fixed w-full z-[9999999] border-t md:border-t-0 md:border-b border-white/10 backdrop-blur-md"
            style={{
                top: isMobile ? "auto" : 0,
                bottom: isMobile ? 0 : "auto",
                backgroundColor: "rgba(15, 23, 42, 0.2)",
            }}
            initial={{ y: isMobile ? 80 : -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
        >
            <div className="px-4 md:px-6 text-white flex flex-row justify-between gap-3 py-2.5 md:py-3 items-center">
                <p className="text-start text-sm md:text-base leading-snug font-medium drop-shadow-sm">
                    <span className="font-bold text-sky-200">Tip</span>
                    {" — "}
                    Call {branding.name} before your insurer
                </p>
                <div className="flex flex-row gap-2 md:gap-3 items-center shrink-0">
                    <button
                        type="button"
                        onClick={show}
                        className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur-sm hover:bg-white/20 transition"
                    >
                        Live chat
                    </button>
                    <PhoneNumberButton
                        labelClassName="text-start text-white text-sm"
                        className="!bg-white/15 !border-white/25 !text-white !min-h-[44px] !py-2 !px-3 !text-sm !rounded-xl"
                    />
                </div>
            </div>
        </motion.div>
    );
}
