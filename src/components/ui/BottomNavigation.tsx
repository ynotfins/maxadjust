"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Grid3x3, Phone, MessageCircle, Menu } from "lucide-react";
import { cn } from "~/lib/cn";

const navItems = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },
    {
        label: "Services",
        href: "/services",
        icon: Grid3x3,
    },
    {
        label: "Call",
        href: "tel:8889995740",
        icon: Phone,
        isPrimary: true,
    },
    {
        label: "Chat",
        href: "/contact",
        icon: MessageCircle,
    },
    {
        label: "More",
        href: "/menu",
        icon: Menu,
    },
];

export default function BottomNavigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-inset-bottom lg:hidden z-50">
            <div className="grid grid-cols-5 h-16">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 transition-colors tap-target",
                                isActive
                                    ? "text-primary"
                                    : "text-gray-600 hover:text-primary"
                            )}
                        >
                            <Icon className="w-6 h-6" />
                            <span className="text-xs font-medium">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

