"use client";

import branding from "~/branding";
import { StarRating } from "~/components/star-rating";
import Image from "next/image";

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Johnathan D.",
            rating: 5,
            review: "The team went above and beyond to fight for my insurance claim. They handled every detail seriously, ensuring I received the maximum payout possible. They are exceptional public adjusters, standing out far beyond other public adjusters. I would highly recommend them.",
            profileImage: "/avatars/johnathan_d.jpg",
        },
        {
            id: 2,
            name: "Jane S.",
            rating: 5,
            review: `From start to finish, ${branding.name} turned a daunting process of insurance claim into something manageable. Every question I had was answered promptly, and I felt supported every step of the way. Thank you for helping me secure a fair insurance claim settlement!`,
            profileImage: "/avatars/jane_s.jpg",
        },
        {
            id: 3,
            name: "Michael R.",
            rating: 5,
            review: `Outstanding service! Their negotiation skills blew me away. I was initially underpaid, but thanks to ${branding.name} team, my insurance claim was re-evaluated, and I received the compensation I truly deserved. They are absolute pros at what they do!`,
            profileImage: "/avatars/michael_r.jpg",
        },
        {
            id: 4,
            name: "Emily C.",
            rating: 5,
            review: "I was searching for public adjusters for my insurance claim and finally chose Max Adjust due to their expertise. I must say, I received far more compensation than I expected. Highly recommend them!",
            profileImage: "/avatars/emily_c.jpg",
        },
    ];

    return (
        <div className="flex space-x-6 overflow-hidden py-12 ">
            <div className="flex space-x-6 animate-infinite-scroll">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 p-4 bg-white rounded-xl min-w-[350px] shadow-md"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src={review.profileImage}
                                alt={review.name}
                                className="w-12 h-12 rounded-full object-cover"
                                width={120}
                                height={120}
                            />
                            <div>
                                <h3 className="text-md font-semibold text-black">
                                    {review.name}
                                </h3>
                                <div className="flex items-center">
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-4">
                            {review.review}
                        </p>
                    </div>
                ))}
            </div>

            <div
                className="flex space-x-6 animate-infinite-scroll"
                aria-hidden="true"
            >
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 p-4 bg-white rounded-xl min-w-[350px] shadow-md"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src={review.profileImage}
                                alt={review.name}
                                className="w-12 h-12 rounded-full object-cover"
                                width={120}
                                height={120}
                            />
                            <div>
                                <h3 className="text-md font-semibold text-black">
                                    {review.name}
                                </h3>
                                <div className="flex items-center">
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-4">
                            {review.review}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
