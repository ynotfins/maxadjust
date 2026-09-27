import { Link } from "next-view-transitions";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            aria-label="Max Adjust home"
            className="inline-flex items-center shrink-0"
        >
            <Image
                src="/assets/images/logo-maxadjust.svg"
                className="w-auto h-9 md:h-11 lg:h-12"
                alt="MAX ADJUST — Professional Representation"
                width={260}
                height={70}
                priority
            />
        </Link>
    );
}
