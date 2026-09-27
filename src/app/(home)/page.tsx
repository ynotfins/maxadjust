import HeroSection from "./_alpha/HeroSection";
import IntroSection from "./_alpha/IntroSection";
import ClaimsSection from "./_alpha/ClaimsSection";
import ProcessSection from "./_alpha/ProcessSection";
import TestimonialsSection from "./_alpha/TestimonialsSection";
import ComparisonSection from "./_alpha/ComparisonSection";
import FeaturesSection from "./_alpha/FeaturesSection";
import PhotosSection from "./_alpha/PhotosSection";
import ContactSection from "./_alpha/ContactSection";
import { HomeCrisisSection } from "~/components/crisis/home-crisis-section";
import { Metadata } from "next";
import { ProfessionalService, WithContext } from "schema-dts";
import branding from "~/branding";
import { url } from "~/lib/url";
import services from "~/constants/services";

export const metadata: Metadata = {
    title: "MAX ADJUST - Licensed Public Adjusters | Maximize Your Insurance Settlement",
    description:
        "Licensed public adjusters fighting for your rights. We handle everything from documentation to negotiation, ensuring you get the maximum payout you deserve.",
};

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
            streetAddress: "331 Newman Springs Rd Suite 143",
            addressLocality: "Red Bank",
            addressRegion: "NJ",
            postalCode: "07701",
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
        <main>
            <HomeCrisisSection />
            <HeroSection />
            <IntroSection />
            <ClaimsSection />
            <ProcessSection />
            <TestimonialsSection />
            <ComparisonSection />
            <FeaturesSection />
            <PhotosSection />
            <ContactSection />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />
        </main>
    );
}
