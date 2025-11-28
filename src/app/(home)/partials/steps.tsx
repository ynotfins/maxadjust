import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import branding from "~/branding";
import PhoneNumberButton from "~/components/phone-number-button";
import cn from "~/lib/cn";

export default function Steps() {
    const steps = [
        {
            title: (
                <>
                    Request a Free Claim Evaluation -{" "}
                    <Link href={cn("tel:", branding.phoneNumber)}>
                        {branding.phoneNumber}
                    </Link>
                </>
            ),
            description:
                "Call or Live Chat us and we will Evaluate your Claim and assess the damage to your property.",
        },
        {
            title: "Submit Your Insurance Claim",
            description:
                "When you authorize us to handle your insurance claim, our experienced public adjusters will immediately notify your insurance company, prepare a detailed claims report to maximize your settlement, and minimize if not eliminate any chance of your claim being denied. Remember, our adjusters negotiate on average more than 180% more than what your insurance company would have originally paid you. Your claim will be backed by a professionally licensed Public Adjusters field report who will come to you usually the same day you contact us. You control the narrative when the adjuster filing the report works for you not the insurance company.",
        },
        {
            title: "Insurance Claim Negotiation",
            description:
                "We make immediate temporary housing arrangements to allow you to maintain a comfortable living until your home is whole again. The majority of the time, we will have a check sent to you within days for living expenses. Your insurance company will generally offer a lower settlement, at which time we counter and negotiate for the highest possible settlement and will not finalize until we max out your claim. This is where we make the biggest difference.",
        },
        {
            title: "Settlement Finalization",
            description:
                "The insurer will mail a check to cover your property damages. We make sure you receive full replacement value of your belongings that are covered. Example: The couch that you bought 12 years ago for $2,800.00 will cost considerably more to replace today. This applies to everything that was damaged, every old toy for your kids, and every old rug that you were about to throw out.",
        },
    ];

    return (
        <div className="bg-white lg:pl-md overflow-hidden ">
            <div className=" grid gap-6 row-gap-10 lg:grid-cols-2">
                <div className="relative page-borders flex flex-col gap-xl pt-xl lg:py-32 lg:pr-16 ">
                    <h2 className="text-primary text-3xl font-semibold">
                        Our Adjusters consistently get close to double the
                        amount your insurance carrier would have given you
                        without any representation 🤔
                    </h2>

                    <div>
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="flex items-center justify-center min-w-10 min-h-10 border-2 border-gray-400  rounded-full">
                                        {idx + 1}
                                    </div>
                                    <div className="w-px h-full bg-gray-300" />
                                </div>
                                <div className="pt-1 pb-8">
                                    <div className="mb-2 text-lg font-bold">
                                        {step.title}
                                    </div>
                                    <p className="text-gray-700">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400 rounded-full">
                                    <CheckIcon />
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="mb-2 text-lg font-bold">
                                    Significantly Higher Check Written to You
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div className="w-full h-full absolute top-0 right-0 bg-black bg-opacity-40 z-[5]"></div>

                    <Image
                        className="inset-0 object-cover object-bottom w-full h-96 lg:absolute lg:h-full"
                        src="/assets/images/handshake-video-poster.webp"
                        width={1280}
                        height={720}
                        alt="Max Adjust"
                    />

                    <div className="z-[10] bg-white/20 absolute bottom-20 left-[50%] transform -translate-x-1/2 p-sm backdrop-blur-xl rounded-xl">
                        <PhoneNumberButton
                            label={
                                <>
                                    Call Now 24/7 <br />
                                    Hotline
                                </>
                            }
                            className="text-white"
                            labelClassName="text-white text-sm "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
