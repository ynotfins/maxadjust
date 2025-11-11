import { cn } from "~/lib/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "danger" | "success" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            fullWidth = false,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    // Variant styles
                    {
                        "bg-primary text-white hover:bg-primary-dark focus:ring-primary":
                            variant === "primary",
                        "bg-danger text-white hover:bg-danger-dark focus:ring-danger":
                            variant === "danger",
                        "bg-success text-white hover:bg-success-dark focus:ring-success":
                            variant === "success",
                        "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary":
                            variant === "outline",
                        "text-primary hover:bg-gray-100 focus:ring-primary":
                            variant === "ghost",
                    },
                    // Size styles
                    {
                        "h-10 px-4 text-sm": size === "sm",
                        "h-14 px-6 text-base": size === "md",
                        "h-16 px-8 text-lg": size === "lg",
                    },
                    // Width
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;

