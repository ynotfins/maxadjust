"use client";

import { Link } from "next-view-transitions";
import Logo from "./logo";
import Navbar from "./navbar";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-primary text-white desktop-only">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Navbar />
                </nav>

                {/* Emergency Call Button */}
                <a
                    href="tel:8889995740"
                    className="hidden lg:flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    (888) 999-5740
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 tap-target"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white text-foreground shadow-lg">
                    <nav className="p-4 flex flex-col gap-4">
                        <Navbar />
                    </nav>
                </div>
            )}
        </header>
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
