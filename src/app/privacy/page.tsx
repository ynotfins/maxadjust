import type { Metadata } from "next";
import branding from "~/branding";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `Privacy policy for ${branding.name}`,
};

export default function PrivacyPolicyPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-16 prose prose-slate">
            <h1>Privacy Policy</h1>
            <p>
                {branding.legalName.long} (“we”, “us”) respects your privacy. This
                page summarizes how we collect and use information when you contact
                us through {branding.domain}.
            </p>
            <h2>Information we collect</h2>
            <p>
                Name, email, phone number, and claim details you voluntarily submit
                through our forms or by calling {branding.phoneNumber}.
            </p>
            <h2>How we use information</h2>
            <p>
                We use your information only to evaluate and pursue your insurance
                claim, respond to inquiries, and operate our business. We do not sell
                personal information.
            </p>
            <h2>Contact</h2>
            <p>
                Questions:{" "}
                <a href={`mailto:${branding.email}`}>{branding.email}</a> ·{" "}
                <a href={`tel:${branding.phoneNumber.replace(/\D/g, "")}`}>
                    {branding.phoneNumber}
                </a>
            </p>
        </main>
    );
}
