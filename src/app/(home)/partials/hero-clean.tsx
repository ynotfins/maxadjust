"use client";

import { Button } from "~/components/ui";
import { Phone, FileText } from "lucide-react";

export default function HeroClean() {
    return (
        <section className="page-container py-12 md:py-16">
            {/* Emergency Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                24/7 EMERGENCY RESPONSE
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl">
                Maximize Your Insurance Settlement
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Licensed public adjusters fighting for your rights. We handle
                everything from documentation to negotiation, ensuring you get the
                maximum payout you deserve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                    variant="primary"
                    size="lg"
                    fullWidth={false}
                    className="gap-2"
                    onClick={() => (window.location.href = "tel:8889995740")}
                >
                    <Phone className="w-5 h-5" />
                    (888) 999-5740
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    fullWidth={false}
                    className="gap-2"
                    onClick={() => (window.location.href = "/contact")}
                >
                    <FileText className="w-5 h-5" />
                    Free Evaluation
                </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                        500%
                    </div>
                    <div className="text-sm text-gray-600">
                        Higher Settlements
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                        24/7
                    </div>
                    <div className="text-sm text-gray-600">
                        Emergency Support
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                        100%
                    </div>
                    <div className="text-sm text-gray-600">
                        No Risk Guarantee
                    </div>
                </div>
            </div>
        </section>
    );
}

