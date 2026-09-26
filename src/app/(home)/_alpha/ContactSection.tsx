"use client";

import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { projectId } from "@/system-settings";
import branding from "~/branding";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const client = getSupabase();
            if (client) {
                const { error } = await client.from("forms").insert({
                    projectId: projectId,
                    title: "contact-form",
                    submission: formData,
                });
                if (error) throw error;
            } else {
                const subject = encodeURIComponent("Free Claim Evaluation");
                const body = encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`,
                );
                window.location.href = `mailto:${branding.email}?subject=${subject}&body=${body}`;
            }
            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact-section"
            alpha-section-id="contact-section"
            className="ma-section bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="ma-badge bg-green-100 border border-green-200 text-green-800 mb-5">
                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                        FREE CONSULTATION
                    </div>

                    <h2 className="ma-section-title mb-4">
                        Get Your Free Claim Evaluation
                    </h2>
                    <p className="ma-section-sub max-w-3xl mx-auto">
                        Don&apos;t let your insurance company shortchange you.
                        Contact us today for a free evaluation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="ma-card-title mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-4 md:space-y-5">
                            <a
                                href="tel:8889995740"
                                className="ma-card-press flex items-start gap-4 no-underline text-inherit"
                            >
                                <div className="ma-icon-tile bg-gradient-to-br from-blue-600 to-blue-700">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="ma-card-title mb-1">
                                        24/7 Emergency Hotline
                                    </h4>
                                    <p className="ma-card-body mb-2">
                                        Call us anytime for immediate assistance
                                    </p>
                                    <span className="text-xl md:text-2xl font-black text-primary">
                                        (888) 999-5740
                                    </span>
                                </div>
                            </a>

                            <a
                                href="mailto:info@maxadjust.com"
                                className="ma-card-press flex items-start gap-4 no-underline text-inherit"
                            >
                                <div className="ma-icon-tile bg-gradient-to-br from-green-600 to-green-700">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="ma-card-title mb-1">
                                        Email Us
                                    </h4>
                                    <p className="ma-card-body mb-2">
                                        Send us your questions or documents
                                    </p>
                                    <span className="text-lg md:text-xl font-bold text-primary break-all">
                                        info@maxadjust.com
                                    </span>
                                </div>
                            </a>

                            <div className="ma-card flex items-start gap-4">
                                <div className="ma-icon-tile bg-gradient-to-br from-purple-600 to-purple-700">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="ma-card-title mb-1">
                                        Office Location
                                    </h4>
                                    <p className="ma-card-body mb-2">
                                        Visit us for in-person consultation
                                    </p>
                                    <p className="ma-card-body text-gray-800">
                                        331 Newman Springs Rd
                                        <br />
                                        Suite 143
                                        <br />
                                        Red Bank, NJ 07701
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="ma-card mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                            <h4 className="ma-card-title mb-4">
                                Why Choose MAX ADJUST?
                            </h4>
                            <ul className="space-y-3 md:space-y-4">
                                {[
                                    "Average 500% higher settlements",
                                    "No upfront costs — we only get paid when you do",
                                    "Licensed professionals with decades of experience",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-green-500 flex-shrink-0" />
                                        <span className="ma-card-body text-gray-800">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="ma-card" style={{ minHeight: "auto" }}>
                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="ma-icon-tile bg-green-100 text-green-600 mx-auto mb-5">
                                        <CheckCircle className="text-green-600" />
                                    </div>
                                    <h3 className="ma-card-title mb-3">
                                        Thank You!
                                    </h3>
                                    <p className="ma-card-body">
                                        Your message has been submitted
                                        successfully. We&apos;ll contact you
                                        within 24 hours to discuss your claim.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5 md:space-y-6"
                                >
                                    {(
                                        [
                                            ["name", "Full Name *", "text", "Enter your full name"],
                                            ["email", "Email Address *", "email", "Enter your email address"],
                                            ["phone", "Phone Number *", "tel", "Enter your phone number"],
                                        ] as const
                                    ).map(([id, label, type, placeholder]) => (
                                        <div key={id}>
                                            <label
                                                htmlFor={id}
                                                className="block text-base md:text-lg font-semibold text-gray-800 mb-2"
                                            >
                                                {label}
                                            </label>
                                            <input
                                                type={type}
                                                id={id}
                                                name={id}
                                                value={formData[id]}
                                                onChange={handleInputChange}
                                                required
                                                className="ma-input"
                                                placeholder={placeholder}
                                            />
                                        </div>
                                    ))}

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-base md:text-lg font-semibold text-gray-800 mb-2"
                                        >
                                            Describe Your Property Damage *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="ma-input"
                                            style={{ minHeight: "8rem" }}
                                            placeholder="Please describe the damage to your property and when it occurred"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="ma-btn-primary w-full disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            "Submitting..."
                                        ) : (
                                            <>
                                                Get Free Evaluation
                                                <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
