import { Link } from "next-view-transitions";
import branding from "~/branding";
import cn from "~/lib/cn";
import Icon from "./icon";

export type PhoneNumberButtonProps = {
    className?: string;
    label?: React.ReactNode;
    labelClassName?: string;
    disableIcon?: boolean;
};

export default function PhoneNumberButton({
    className,
    label = "24/7 Hotline",
    labelClassName,
    disableIcon,
}: PhoneNumberButtonProps) {
    return (
        <Link
            className={cn(
                "ma-btn-secondary gap-4 no-underline text-inherit !min-h-[64px] md:!min-h-[72px]",
                className,
            )}
            href={cn("tel:", branding.phoneNumber)}
        >
            {!disableIcon && (
                <div className="ma-icon-tile !w-12 !h-12 md:!w-14 md:!h-14 bg-primary">
                    <Icon
                        icon="solar:phone-calling-bold"
                        className="size-6 md:size-7 text-white"
                    />
                </div>
            )}

            <div className="flex flex-col gap-0.5 text-left">
                <span
                    className={cn(
                        "text-sm md:text-base leading-tight font-semibold opacity-80",
                        labelClassName,
                    )}
                >
                    {label}
                </span>
                <span className="text-lg md:text-xl lg:text-2xl font-black leading-tight tracking-tight">
                    {branding.phoneNumber}
                </span>
            </div>
        </Link>
    );
}
