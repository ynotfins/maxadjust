"use client";

import Link from "next/link";
import Logo from "./logo";
import { services } from "~/constants/services";
import PhoneNumberButton from "~/components/phone-number-button";
import { useDisclosure } from "@heroui/use-disclosure";
import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/dropdown";
import { ChevronDownIcon, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import cn from "~/lib/cn";

const links = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const { isOpen, onOpenChange } = useDisclosure();
    const router = useRouter();
    const pathname = usePathname();

    const navLinkClass = (active: boolean) =>
        cn(
            "relative px-3 py-2 text-sm md:text-base font-semibold rounded-xl transition-all duration-200",
            active
                ? "text-primary bg-primary/8"
                : "text-slate-700 hover:text-primary hover:bg-primary/5",
        );

    return (
        <>
            <button
                onClick={onOpenChange}
                className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm"
                aria-label="Toggle navigation menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            <nav className="hidden md:block" aria-label="Primary">
                <ul className="flex items-center gap-1 lg:gap-2">
                    <li>
                        <Link
                            href="/"
                            className={navLinkClass(pathname === "/")}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Dropdown>
                            <DropdownTrigger>
                                <button
                                    className={cn(
                                        navLinkClass(
                                            pathname?.includes("damage") ||
                                                pathname?.includes("cleaning") ||
                                                pathname?.includes("commercial") ||
                                                pathname?.includes("construction"),
                                        ),
                                        "inline-flex items-center gap-1",
                                    )}
                                >
                                    Services
                                    <ChevronDownIcon className="h-4 w-4 opacity-70" />
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Services navigation"
                                className="min-w-[220px]"
                            >
                                {services.map((service) => (
                                    <DropdownItem
                                        key={service.id || service.label}
                                        onPress={() =>
                                            router.push(service.href)
                                        }
                                    >
                                        {service.label}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    {links.slice(1).map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={navLinkClass(
                                    pathname === link.href ||
                                        pathname?.startsWith(link.href + "/"),
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Drawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{ base: "w-[80%] sm:w-full z-[9999] md:hidden" }}
            >
                <DrawerContent>
                    <DrawerBody>
                        <div className="flex flex-col h-full justify-center gap-8 px-2 pb-6">
                            <Logo />
                            <div className="flex flex-col gap-2 text-lg font-semibold">
                                <Link href="/" className="py-2">
                                    Home
                                </Link>
                                {services.map((service) => (
                                    <Link
                                        key={service.id || service.label}
                                        href={service.href}
                                        className="py-2 text-base font-medium text-slate-600"
                                    >
                                        {service.label}
                                    </Link>
                                ))}
                                <Link href="/blogs" className="py-2">
                                    Blogs
                                </Link>
                                <Link href="/contact" className="py-2">
                                    Contact Us
                                </Link>
                            </div>
                            <PhoneNumberButton
                                className="mt-2"
                                labelClassName="text-start"
                            />
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
