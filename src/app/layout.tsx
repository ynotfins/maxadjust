import "./globals.css";
import AppShell from "~/components/layout/AppShell";
import branding from "~/branding";
import type { Metadata } from "next";
import WebsiteLDJson from "~/components/website-ld-json";
import { Inter } from "next/font/google";
import { IntercomProvider } from "~/components/intercom-provider";
import { Bounce, ToastContainer } from "react-toastify";
import { ViewTransitions } from "next-view-transitions";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
    variable: "--font-inter",
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
        <ViewTransitions>
            <html lang="en">
                <body
                    className={`antialiased min-h-screen ${inter.className}`}
                >
                    <AppShell>
                        {children}
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
                    </AppShell>

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
