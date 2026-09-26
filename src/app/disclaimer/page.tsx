import type { Metadata } from "next";
import branding from "~/branding";

export const metadata: Metadata = {
    title: "Disclaimer",
    description: `Legal disclaimer for ${branding.name}`,
};

export default function DisclaimerPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-16 prose prose-slate">
            <h1>Disclaimer</h1>
            <p>
                Results described on {branding.domain} are illustrative. Past
                settlement outcomes do not guarantee future results. Every claim is
                unique and depends on policy language, documentation, and negotiation.
            </p>
            <p>
                {branding.legalName.long} is a public adjusting firm. We are not an
                insurance company and do not provide legal advice unless separately
                retained counsel is involved.
            </p>
            <p>
                Emergency: call{" "}
                <a href={`tel:${branding.phoneNumber.replace(/\D/g, "")}`}>
                    {branding.phoneNumber}
                </a>
                .
            </p>
        </main>
    );
}
