"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Link } from "next-view-transitions";
import branding from "~/branding";
import clsx from "clsx";

const slides = [
    {
        src: "/assets/images/fire-damage-poster.webp",
        heading: "Do you have property damaged?",
        subheading: (
            <>
                The damage is getting worse by the minute... Your insurance
                company holds you responsible for preventing further damage, and
                can deny your claim for all damage that could have been
                prevented. Every minute counts. Call now:{" "}
                <Link
                    className="underline !text-red-500 font-bold"
                    href={`tel:${branding.phoneNumber}`}
                >
                    {branding.phoneNumber}
                </Link>
            </>
        ),
    },
    {
        src: "/assets/images/straight-path.jpg",
        heading: "We have the answers to guide your path.",
        subheading:
            "Experienced licensed public adjusters by the New Jersey Department of Banking and Insurance. We help you secure the best financial settlement.",
    },
    {
        src: "/assets/images/insurance-guidance.jpg",
        heading: "Insurance giving you trouble?",
        subheading:
            "Let us handle your insurance claim for a stress-free process.",
    },
    {
        src: "/assets/images/lincoln.jpg",
        srcMobile: "/assets/images/lincoln-mobile.png",
        heading: "You pay nothing until we get you paid",
        subheading:
            "Max Adjust increases the amount you will receive back by more than 180% on average. Your insurance carrier’s adjuster is hired to pay you less because they represent your insurance company. We find every reason for them to pay you more. Think about that… ",
    },
    {
        src: "/assets/images/random/01e84737.jpg",
        srcMobile: "/assets/images/random/01e84737.jpg",
        heading: "One Step Process",
        subheading:
            "Simply make one phone call or chat. Once you authorize Max Adjust to represent you, we handle all communication with your insurance company and oversee the insurance claim, clean-up, restoration, city permits, temporary housing, bills, and every other time-consuming inconvenience. We will negotiate the maximum return possible while ensuring your family is affected as little as possible and your home is restored better than new ASAP.",
    },
];

export default function HeroSlider() {
    return (
        <section className="relative w-full h-[60vh] overflow-hidden">
            <h1 className="sr-only">
                {branding.name} - Professional Public Insurance Adjusters in New
                Jersey Helping Property Owners Get Maximum Insurance Claim
                Settlements
            </h1>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 8500, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        <Image
                            src={slide.src}
                            alt={slide.heading}
                            priority
                            className={clsx("w-full h-full object-cover", {
                                "hidden sm:block": slide.srcMobile,
                            })}
                            width={1280}
                            height={720}
                        />

                        {slide.srcMobile && (
                            <Image
                                src={slide.srcMobile}
                                alt={slide.heading}
                                priority
                                className="w-full h-full object-cover sm:hidden"
                                width={600}
                                height={1000}
                            />
                        )}

                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white dark px-[10%] lg:px-0 gap-sm">
                            <h2 className="text-xl lg:text-5xl font-semibold uppercase">
                                {slide.heading}
                            </h2>
                            <p className="text-sm lg:text-2xl max-w-2xl mx-auto">
                                {slide.subheading}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
