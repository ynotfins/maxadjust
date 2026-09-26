import "@r3lentless/rgds-web/tokens.css";
import "@r3lentless/rgds-web/components.css";
import "@r3lentless/rgds-web/interaction.css";
import "@r3lentless/rgds-web/form-factor.css";
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
import { ViewTransitions } from "next-view-transitions";
import { GoogleAnalytics } from "@next/third-parties/google";
import { RgdsBoot } from "~/components/rgds-boot";
import { GuardianFollow } from "~/components/crisis/guardian-follow";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `%s - ${branding.name}`,
        default: "MAX ADJUST - Licensed Public Adjusters | Maximize Your Insurance Settlement",
        absolute:
            "MAX ADJUST - Licensed Public Adjusters | Maximize Your Insurance Settlement",
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
        <ViewTransitions>
            <html lang="en" data-theme="primary-light">
                <body
                    className={cn(
                        "antialiased min-h-screen rgds-shell--adaptive",
                        outfit.className,
                        outfit.variable,
                    )}
                >
                    <RgdsBoot />
                    <HeroUIProvider>
                        <Header />
                        {children}
                        <Footer />
                        <StickyHeader />
                        <GuardianFollow />
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
                            theme="light"
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
        </ViewTransitions>
    );
}
