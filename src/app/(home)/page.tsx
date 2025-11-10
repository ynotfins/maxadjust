import FilmstripCarousel from "~/components/FilmstripCarousel";
import Testimonials from "~/components/Testimonials";
import ComparisonCards from "~/components/ComparisonCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { ProfessionalService, WithContext } from "schema-dts";
import branding from "~/branding";
import { url } from "~/lib/url";
import services from "~/constants/services";
import PopupModal from "~/components/onload-popup";
import Link from "next/link";
import { ShieldCheck, Phone as PhoneIcon, TrendingUp, Building } from "lucide-react";

export const metadata: Metadata = {
    title: "Important to call us before you call your insurance company",
    description:
        "We specialize in maximizing your insurance claim to get you paid more, while protecting you from being denied!",
};

const heroItems = [
    {
        src: "/assets/images/fire-damage-poster.webp",
        alt: "Do you have property damaged?",
        w: 1200,
        h: 900,
    },
    {
        src: "/assets/images/straight-path.jpg",
        alt: "We have the answers to guide your path",
        w: 1200,
        h: 900,
    },
    {
        src: "/assets/images/insurance-guidance.jpg",
        alt: "Insurance giving you trouble?",
        w: 1200,
        h: 900,
    },
];

export default function Home() {
    const schemaData: WithContext<ProfessionalService> = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: branding.name,
        url: url("/"),
        description: `${branding.name} is a trusted public adjuster specialising in insurance claims for fire, storm, and property damage. We handle the claims process, negotiate with insurers, and fight for the maximum payout you deserve.`,
        email: branding.email,
        telephone: branding.phoneNumber,
        address: {
            "@type": "PostalAddress",
            streetAddress: "23 Sheraton Ln",
            addressLocality: "Rumson",
            addressRegion: "NJ",
            postalCode: "07760",
            addressCountry: "US",
        },
        serviceArea: {
            "@type": "Country",
            name: "United States",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Our Services",
            itemListElement: services.map((service) => ({
                "@type": "OfferCatalog",
                name: service.label,
                itemListElement: [
                    {
                        "@type": "Offer",
                        name: service.label,
                        url: url(service.href),
                    },
                ],
            })),
        },
    };

    return (
        <div>
            <PopupModal />
            
            <FilmstripCarousel items={heroItems} />

            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
                <Card className="rounded-2xl">
                    <CardHeader>
                        <ShieldCheck className="h-6 w-6 text-brand-blue mb-2" />
                        <CardTitle className="text-xl">Licensed & Bonded</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-600">
                        NJ Department of Banking & Insurance ✅
                    </CardContent>
                </Card>
                <Card className="rounded-2xl">
                    <CardHeader>
                        <PhoneIcon className="h-6 w-6 text-brand-red mb-2" />
                        <CardTitle className="text-xl">24/7 Hotline</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-600">
                        {branding.phoneNumber} ☎️
                    </CardContent>
                </Card>
                <Card className="rounded-2xl">
                    <CardHeader>
                        <TrendingUp className="h-6 w-6 text-brand-blue mb-2" />
                        <CardTitle className="text-xl">Maximize Payout</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-600">
                        Average 180%+ increase*
                    </CardContent>
                </Card>
                <Card className="rounded-2xl">
                    <CardHeader>
                        <Building className="h-6 w-6 text-brand-red mb-2" />
                        <CardTitle className="text-xl">Commercial & Residential</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-600">
                        Coverage across claim types
                    </CardContent>
                </Card>
            </section>

            <section className="mt-16 grid gap-8 md:grid-cols-3">
                <Link href="/water-damage" className="block">
                    <Card className="rounded-2xl hover:shadow-ring transition-shadow">
                        <CardHeader>
                            <CardTitle>Water Damage 💧</CardTitle>
                        </CardHeader>
                        <CardContent className="text-neutral-600">
                            Faster claim. Bigger check.
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/fire-damage" className="block">
                    <Card className="rounded-2xl hover:shadow-ring transition-shadow">
                        <CardHeader>
                            <CardTitle>Fire Damage 🔥</CardTitle>
                        </CardHeader>
                        <CardContent className="text-neutral-600">
                            Faster claim. Bigger check.
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/storm-damage" className="block">
                    <Card className="rounded-2xl hover:shadow-ring transition-shadow">
                        <CardHeader>
                            <CardTitle>Storm Damage 🌪️</CardTitle>
                        </CardHeader>
                        <CardContent className="text-neutral-600">
                            Faster claim. Bigger check.
                        </CardContent>
                    </Card>
                </Link>
            </section>

            <Testimonials />
            <ComparisonCards />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />
        </div>
    );
}
