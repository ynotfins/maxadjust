import { Card } from "~/components/ui";
import { Link } from "next-view-transitions";
import {
    Flame,
    Droplets,
    CloudRain,
    Home,
    Building2,
    Sparkles,
    Wind,
    Hammer,
} from "lucide-react";

const services = [
    {
        icon: Flame,
        label: "Fire Damage",
        href: "/fire-damage",
        description: "24/7 fire damage response",
    },
    {
        icon: Droplets,
        label: "Water Damage",
        href: "/water-damage",
        description: "Emergency water cleanup",
    },
    {
        icon: CloudRain,
        label: "Storm Damage",
        href: "/storm-damage",
        description: "Storm and hurricane claims",
    },
    {
        icon: Home,
        label: "Mold Damage",
        href: "/mold-damage",
        description: "Mold remediation claims",
    },
    {
        icon: Building2,
        label: "Commercial",
        href: "/commercial",
        description: "Business property claims",
    },
    {
        icon: Sparkles,
        label: "General Cleaning",
        href: "/general-cleaning",
        description: "Professional cleanup services",
    },
    {
        icon: Wind,
        label: "Specialty Cleaning",
        href: "/specialty-cleaning",
        description: "Specialized restoration",
    },
    {
        icon: Hammer,
        label: "Construction",
        href: "/construction",
        description: "Rebuild and restoration",
    },
];

export default function ServicesClean() {
    return (
        <section className="page-container py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Our Services
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Expert insurance claim assistance for all types of property
                    damage
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <Link key={service.href} href={service.href}>
                            <Card
                                padding="lg"
                                className="hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col items-center text-center gap-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">
                                    {service.label}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {service.description}
                                </p>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

