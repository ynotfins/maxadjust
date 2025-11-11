import { cn } from "~/lib/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, fullWidth = true, ...props }, ref) => {
        return (
            <div className={cn("flex flex-col gap-2", fullWidth && "w-full")}>
                {label && (
                    <label className="text-sm font-medium text-foreground">
                        {label}
                        {props.required && (
                            <span className="text-danger ml-1">*</span>
                        )}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        "h-12 px-4 rounded-lg border border-gray-300 bg-white",
                        "text-foreground placeholder:text-gray-500",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                        "disabled:bg-gray-100 disabled:cursor-not-allowed",
                        error && "border-danger focus:ring-danger",
                        className
                    )}
                    {...props}
                />
                {error && <span className="text-sm text-danger">{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;

