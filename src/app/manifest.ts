import type { MetadataRoute } from "next";
import branding from "~/branding";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: branding.name,
        short_name: "MaxAdjust",
        description:
            "Licensed public adjusters fighting for your rights. We handle everything from documentation to negotiation, ensuring you get the maximum payout you deserve.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait-primary",
        theme_color: "#2196F3",
        background_color: "#FFFFFF",
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        categories: ["business", "finance", "insurance"],
        shortcuts: [
            {
                name: "Emergency Call",
                short_name: "Call",
                description: "Call MaxAdjust emergency hotline",
                url: "/contact",
                icons: [
                    {
                        src: "/android-chrome-192x192.png",
                        sizes: "192x192",
                    },
                ],
            },
        ],
    };
}
