"use client";

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { useForm } from "~/hooks/use-form";
import { Checkbox } from "@heroui/checkbox";
import { z } from "zod";
import { Link } from "next-view-transitions";
import { toast } from "react-toastify";
import branding from "~/branding";
import { getSupabase } from "@/lib/supabase";
import { projectId } from "~/system-settings";

export default function Contact() {
    const formData = useForm({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
            optIn: true,
        },
        schema: z.object({
            name: z.string().min(2, "Too Short"),
            email: z.string().email(),
            phoneNumber: z.string().min(10),
            message: z.string().min(10),
            optIn: z.boolean().refine((value) => value === true, {
                message: "You must check all the checkboxes",
            }),
        }),
        onSubmit: async (values, self) => {
            const client = getSupabase();

            if (client) {
                const { error } = await client.from("leads").insert({
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    source: "contact",
                    meta: {
                        phone: values.phoneNumber,
                        optIn: values.optIn,
                        projectId,
                    },
                });
                if (error) {
                    console.error("Error submitting form:", error);
                    toast.error(
                        "We could not send that message. Please call us instead."
                    );
                    return;
                }
            } else {
                const subject = encodeURIComponent("Free Claim Evaluation");
                const body = encodeURIComponent(
                    `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phoneNumber}\n\n${values.message}`
                );
                window.location.href = `mailto:${branding.email}?subject=${subject}&body=${body}`;
            }

            self.resetForm();
            toast.success(
                "Thank you for your message! We will get back to you soon."
            );
        },
    });

    return (
        <div className="container flex flex-col justify-center items-center my-2xl">
            <div className="flex flex-col gap-md bg-white w-full rounded-xl py-md px-lg lg:w-[40%]">
                <h1 className="text-3xl font-bold tracking-tight">
                    Get a quote
                </h1>

                <div className="flex flex-col gap-sm">
                    <Input
                        label="Name"
                        className="w-full"
                        value={formData.values.name}
                        onValueChange={(value) =>
                            formData.update("name", value)
                        }
                        isInvalid={!!formData.errors.name}
                        errorMessage={formData.errors.name}
                    />

                    <Input
                        label="Email"
                        className="w-full"
                        value={formData.values.email}
                        onValueChange={(value) =>
                            formData.update("email", value)
                        }
                        isInvalid={!!formData.errors.email}
                        errorMessage={formData.errors.email}
                    />

                    <Input
                        label="Phone Number"
                        className="w-full"
                        value={formData.values.phoneNumber}
                        onValueChange={(value) =>
                            formData.update("phoneNumber", value)
                        }
                        isInvalid={!!formData.errors.phoneNumber}
                        errorMessage={formData.errors.phoneNumber}
                    />

                    <Textarea
                        label="Message"
                        className="w-full"
                        value={formData.values.message}
                        onValueChange={(value) =>
                            formData.update("message", value)
                        }
                        isInvalid={!!formData.errors.message}
                        errorMessage={formData.errors.message}
                    />

                    <div className="flex flex-row py-sm items-start">
                        <Checkbox
                            className="my-1"
                            isSelected={formData.values.optIn}
                            onValueChange={(value) =>
                                formData.update("optIn", value)
                            }
                            required
                            isInvalid={!!formData.errors.optIn}
                        />

                        <p>
                            By checking this box, I consent to receive text
                            messages related to notifications from{" "}
                            {branding.legalName.long}. You can reply "STOP" at
                            any time to opt-out. Message and data rates may
                            apply. Message frequency may vary, text HELP for
                            assistance. For more information, please visit our{" "}
                            <Link
                                className="text-blue-500 underline"
                                href="/privacy-policy"
                            >
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                                className="text-blue-500 underline"
                                href="/terms-conditions"
                            >
                                SMS Terms and Conditions.
                            </Link>
                        </p>
                    </div>
                </div>

                <Button color="primary" onPress={() => formData.handleSubmit()}>
                    Submit
                </Button>

                {formData.errors.optIn && (
                    <p className="text-red-500 text-sm">
                        {formData.errors.optIn}
                    </p>
                )}
            </div>
        </div>
    );
}
