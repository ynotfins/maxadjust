"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { branding } from "~/branding";
import { show } from "@intercom/messenger-js-sdk";
import PhoneNumberButton from "~/components/phone-number-button";

export function StickyHeader() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            setHasScrolled(window.scrollY > 100);
        };

        checkMobile();
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    if (!isMobile && !hasScrolled) {
        return null;
    }

    return (
        <motion.div
            className="fixed w-full bg-slate-950/90 backdrop-blur-xl z-[9999999] border-t md:border-t-0 md:border-b border-white/10"
            style={{
                top: isMobile ? "auto" : 0,
                bottom: isMobile ? 0 : "auto",
            }}
            initial={{ y: isMobile ? 100 : -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="px-4 md:px-8 text-white flex flex-col md:flex-row justify-between gap-4 py-4 md:py-5 items-stretch md:items-center">
                <div className="text-start text-base md:text-xl leading-snug font-medium">
                    <span className="font-bold text-primary">Very important</span>{" "}
                    – Call {branding.name} before your insurance company
                </div>

                <div className="flex flex-row gap-3 md:gap-5 items-center">
                    <button
                        type="button"
                        onClick={show}
                        className="ma-btn-secondary !bg-transparent !text-primary !border-primary !min-h-[56px] md:!min-h-[64px] text-base md:text-lg"
                    >
                        LIVE CHAT
                    </button>

                    <PhoneNumberButton
                        labelClassName="text-start text-white"
                        className="!bg-white/10 !border-white/20 !text-white"
                    />
                </div>
            </div>
        </motion.div>
    );
}
