"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo/New Max Adjust Blue Red Logo.png"
              alt="MaxAdjust"
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/services" className="hover:opacity-80 transition-opacity">
              Services
            </Link>
            <Link href="/blogs" className="hover:opacity-80 transition-opacity">
              Blog
            </Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="rounded-2xl px-5 bg-brand-red hover:bg-brand-red/90 text-white"
          >
            <a href="tel:+18889995740" aria-label="Call 24/7 Hotline">
              <Phone className="mr-2 h-4 w-4" /> (888) 999-5740
            </a>
          </Button>
        </div>
      </header>
      <main className="container py-12">{children}</main>
      <footer className="mt-24 border-t">
        <div className="container py-10 text-sm text-neutral-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} MAXADJUST. License # 1664823.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-brand-blue transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-brand-blue transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

