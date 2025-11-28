import Link from "next/link";
import Image from "next/image";
import PhoneNumberButton from "~/components/phone-number-button";
import services from "~/constants/services";

export default function Services() {
    return (
        <div className="container flex flex-col gap-md items-center py-xl px-sm lg:px-0">
            <h4 className="text-center text-md lg:text-xl">
                <span className="text-red-500 font-bold italic">
                    INSURANCE COMPANIES NOTORIOUSLY DENY LARGE CLAIMS BECAUSE OF
                    TECHNICALITIES YOU WERE UNAWARE OF.
                </span>
                <br />
                That is why you need one of our licensed public adjusters
                managing your claim. We protect your claim from being denied
                while maxing out your return, because Max Adjust Public
                Adjusters are experts at knowing the details of every policy and
                every hidden dime your insurance company is responsible for but
                will not volunteer.
            </h4>

            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-sm ">
                {services.map((service, i) => (
                    <Link
                        key={i}
                        className="flex flex-col justify-center items-center lg:h-52 py-md bg-white rounded-xl"
                        href={service.href ?? "#"}
                    >
                        <Image
                            src={service.imgSrc}
                            alt={service.altText}
                            className="w-24 h-24"
                            width={384}
                            height={384}
                        />

                        <span className="text-sm text-gray-500">
                            {service.label}
                        </span>
                    </Link>
                ))}

                <div className="flex flex-col justify-center items-center lg:h-52 py-md bg-white rounded-xl ">
                    <PhoneNumberButton
                        label="And more..."
                        labelClassName="text-start text-md"
                    />
                </div>
            </div>
        </div>
    );
}
