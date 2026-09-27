"use client";

import Logo from "./logo";
import Navbar from "./navbar";
import PhoneNumberButton from "~/components/phone-number-button";

export default function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-100/80 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <header className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                <div className="lg:w-[22%] min-w-0">
                    <Logo />
                </div>
                <div className="flex-1 flex items-center justify-end lg:justify-center">
                    <Navbar />
                </div>
                <div className="lg:w-[22%] hidden md:flex justify-end">
                    <PhoneNumberButton
                        labelClassName="text-slate-900 text-sm"
                        label={
                            <span className="text-secondary font-bold tracking-wide">
                                24/7 Hotline
                            </span>
                        }
                        className="!rounded-2xl !min-h-[52px] !py-2 !px-4 !shadow-sm"
                    />
                </div>
            </header>
        </div>
    );
}
