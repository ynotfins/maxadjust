"use client";

import { Slide } from "react-awesome-reveal";
import Icon from "~/components/icon";
import ReadMore from "~/components/read-more";
import Logo from "~/partials/logo";

const comparison = [
    {
        left: <Logo aria-label="Company Logo" />,
        centerIsText: true,
        centerLabel: "VS",
        right: (
            <h3
                className="text-sm lg:text-2xl"
                aria-label="Company Insurance Adjuster"
            >
                Company Insurance Adjuster
            </h3>
        ),
    },
    {
        left: (
            <p>
                Reads and analyzes your policy. It is our job to know exactly
                what your insurance policy is obligated to cover by law and more
                specifically what your policy covers. Your policy generally
                covers more than what is written in your policy because of state
                and federal laws that the average consumer knows nothing about.
                We write the report and submit an insurance claim maxing out the
                responsibility of every dime the insurance company is obligated
                to pay.
            </p>
        ),
        centerIsText: false,
        centerIcon: "solar:chat-dots-linear",
        centerLabel: "Services",
        right: (
            <p>
                Documents the damage on behalf of the insurance company. It is
                their job to limit the exposure and minimize the amount of money
                you receive for your claim.
            </p>
        ),
    },
    {
        left: (
            <p>
                Our fee is based on our performance. We are paid by the proceeds
                of the insurance claim.
            </p>
        ),
        centerIsText: false,
        centerIcon: "solar:dollar-linear",
        centerLabel: "Fee",
        right: (
            <p>
                Is paid by the insurance company to minimize the amount of your
                insurance claim.
            </p>
        ),
    },
    {
        left: (
            <p>
                We are licensed and bonded by the state to represent you. We
                have decades of experience representing people just like you.
            </p>
        ),
        centerIsText: false,
        centerIcon: "material-symbols-light:award-star-outline",
        centerLabel: "Qualifications",
        right: (
            <p>
                Same licensing we have only their experience is in saving the
                insurance company money.
            </p>
        ),
    },
    {
        left: (
            <p>
                Max Adjust levels the playing field for you. We protect your
                interest and secure a maximum settlement while removing the
                stress.
            </p>
        ),
        centerIsText: false,
        centerIcon: "solar:users-group-two-rounded-linear",
        centerLabel: "Team",
        right: (
            <p>
                The insurance company's team is there to protect their exposure
                which includes denying the claim.
            </p>
        ),
    },
];

export default function Compare() {
    return (
        <div className="flex flex-col items-center gap-md">
            <div className="text-center max-w-lg">
                <h1
                    className="text-xl lg:text-2xl font-semibold"
                    aria-label="Why Choose Max Adjust"
                >
                    We Handle the Entire Insurance Claims Process{" "}
                    <br className="hidden lg:block" />
                    and Negotiate a Fair and Equitable Settlement.
                </h1>

                <div className="text-start mt-md w-full bg-gray-300/50 rounded-2xl rounded-br-none p-md ">
                    <ReadMore
                        text="We understand that losing your home and everything that you
                    have worked hard for to a disaster is devastating. Though
                    you need the time to grasp what has just happened and take
                    care of your family, you are forced into the complicated
                    insurance claims process. Most likely, it is something you
                    have never dealt with before, but it is your responsibility,
                    not the insurance company's."
                        readMoreText="As your insurance company brings in its team of experts to
                    protect its financial exposure to your insurance claim and
                    look for reasons to deny your claim, the law provides you
                    with the right to bring your own team of experts to level
                    the playing field. These experts are Max Adjust's public
                    adjusters that represent you. We make sure your claim does
                    not get denied by preserving the proof needed, Because we
                    are a licensed public adjuster we are authorized by your
                    insurance company to start the restoration process
                    immediately and get you emergency funds and housing if
                    needed. Having your own representation that looks out for
                    your best interests increases the amount you will receive by
                    more than 180% on average. When you win we win."
                    />
                </div>
            </div>

            <div className="relative container py-16">
                {/* Single vertical line across entire section */}
                <div
                    className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-300 -translate-x-1/2"
                    aria-hidden="true"
                />

                {comparison.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center gap-4 px-sm lg:px-0 py-6"
                        aria-labelledby={`comparison-item-${index}`}
                    >
                        <div
                            className="flex justify-end w-[40%] lg:w-[30%] text-right text-xs lg:text-lg"
                            id={`comparison-item-${index}-left`}
                        >
                            <Slide direction="left" triggerOnce duration={200}>
                                {item.left}
                            </Slide>
                        </div>

                        <div
                            className="relative w-[20%] lg:w-[10%] flex flex-col items-center z-10 bg-background p-2"
                            id={`comparison-item-${index}-center`}
                        >
                            <Slide direction="up" triggerOnce duration={200}>
                                {item.centerIsText ? (
                                    <div
                                        className="font-bold text-2xl bg-black text-white flex justify-center items-center p-md rounded-2xl"
                                        aria-label={item.centerLabel}
                                    >
                                        {item.centerLabel}
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-center items-center text-xs lg:text-lg">
                                        <Icon
                                            icon={item.centerIcon || ""}
                                            className="size-8 lg:size-12"
                                            aria-hidden="true"
                                        />

                                        <span aria-label={item.centerLabel}>
                                            {item.centerLabel}
                                        </span>
                                    </div>
                                )}
                            </Slide>
                        </div>

                        <div
                            className="flex justify-start w-[40%] lg:w-[30%] text-left text-xs lg:text-lg"
                            id={`comparison-item-${index}-right`}
                        >
                            <Slide direction="right" triggerOnce duration={200}>
                                {item.right}
                            </Slide>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center max-w-lg">
                <p>
                    We are your unwavering advocates, working only for you so
                    that you can get your life back.
                </p>
            </div>
        </div>
    );
}
