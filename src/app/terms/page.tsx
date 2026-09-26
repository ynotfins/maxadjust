import type { Metadata } from "next";
import branding from "~/branding";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: `Terms of service for ${branding.name}`,
};

export default function TermsPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-16 prose prose-slate">
            <h1>Terms of Service</h1>
            <p>
                By using {branding.domain} or contacting {branding.legalName.long},
                you agree that information on this site is general and does not create
                an attorney-client or adjuster-client relationship until a written
                engagement is signed.
            </p>
            <h2>Services</h2>
            <p>
                We provide public adjusting services subject to applicable state
                licensing. Fees, if any, are disclosed in writing before work begins.
            </p>
            <h2>Contact</h2>
            <p>
                <a href={`mailto:${branding.email}`}>{branding.email}</a> ·{" "}
                {branding.phoneNumber}
            </p>
        </main>
    );
}
