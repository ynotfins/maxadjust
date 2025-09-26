"use client";

import { Link } from "next-view-transitions";
import Logo from "./logo";
import Navbar from "./navbar";
import PhoneNumberButton from "~/components/phone-number-button";

export default function Header() {
    return (
        <div className="bg-white py-4 shadow-sm">
            <header className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="lg:w-[20%]">
                    <Logo />
                </div>

                {/* Navbar (handles both desktop + mobile internally) */}
                <div className="flex-1 flex items-center justify-end lg:justify-center">
                    <Navbar />
                </div>

                {/* Hotline (only on md+) */}
                <div className="lg:w-[20%] hidden md:flex justify-end">
                    <PhoneNumberButton
                        labelClassName="text-black text-sm"
                        label={
                            <span className="text-red-500 font-bold italic">
                                24/7 Hotline
                            </span>
                        }
                        className="text-black"
                    />
                </div>
            </header>
        </div>
    );
}

export function GetQuote() {
    return (
        <Link href="/contact">
            <span className="block text-center text-xs text-gray-700">
                Need Assistance?
            </span>
            <span className="text-xl text-primary">GET A QUOTE</span>
        </Link>
    );
}
