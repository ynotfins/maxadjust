import "./globals.css";
import cn from "~/lib/cn";
import Header from "~/partials/header";
import Footer from "~/partials/footer";
import branding from "~/branding";
import { HeroUIProvider } from "@heroui/system";
import type { Metadata } from "next";
import WebsiteLDJson from "~/components/website-ld-json";
import { Outfit } from "next/font/google";
import { StickyHeader } from "~/partials/sticky-header";
import { IntercomProvider } from "~/components/intercom-provider";
import { Bounce, ToastContainer } from "react-toastify";
import { GoogleAnalytics } from "@next/third-parties/google";
import { BottomNavigation } from "~/components/ui";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `%s - ${branding.name}`,
        default: branding.name,
        absolute: branding.name,
    },
    openGraph: {
        siteName: branding.name,
    },
    description:
        "Max Adjust is a trusted public adjuster specialising in insurance claims for fire, storm, and property damage. We handle the claims process, negotiate with insurers, and fight for the maximum payout you deserve.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
                <body
                    className={cn("antialiased min-h-screen bottom-nav-spacer", outfit.className)}
                >
                    <HeroUIProvider>
                        <Header />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                        <BottomNavigation />
                        <StickyHeader />
                        <IntercomProvider />
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Bounce}
                        />
                    </HeroUIProvider>

                    <GoogleAnalytics gaId="G-P02Q7EGQRJ" />

                    <WebsiteLDJson />

                    <script
                        src="https://analytics.ahrefs.com/analytics.js"
                        data-key="L64ilW9QvUH+JV2Fidm8hw"
                        async
                    ></script>
                </body>
            </html>
    );
}
