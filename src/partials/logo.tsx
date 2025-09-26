import { Link } from "next-view-transitions";
import Image from "next/image";

export default function Logo() {
    return (
        <Link
            href="/"
            aria-label="Branding Section"
            aria-labelledby="Branding Section"
            aria-description="Branding of the website"
        >
            <Image
                src="/assets/images/logo.png"
                className="w-auto h-10 lg:h-14"
                alt="Logo"
                width={100}
                height={100}
            />
        </Link>
    );
}
