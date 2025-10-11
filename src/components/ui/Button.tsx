// src/components/ui/Button.tsx
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | 'square';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    startItem?: ReactNode;
    endItem?: ReactNode;
    loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            startItem,
            endItem,
            loading = false,
            className,
            children,
            disabled,
            ...rest
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                className={clsx(
                    "inline-flex h-12 items-center justify-center rounded-2xl font-medium transition-colors",
                    "focus:outline-none focus:ring-0 focus:ring-offset-0",
                    {
                        // ✅ Variants
                        "bg-primary-100 text-white":
                            variant === "primary",
                        "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400":
                            variant === "secondary",
                        "border border-gray-300 text-gray-800 hover:bg-gray-100":
                            variant === "outline",
                        "text-gray-600 hover:bg-gray-100": variant === "ghost",
                        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":
                            variant === "danger",

                        // ✅ Sizes
                        "h-8 px-3 text-sm": size === "sm",
                        "h-10 px-4 text-base": size === "md",
                        "h-12 px-6 text-lg": size === "lg",
                        "!h-10 !w-10 !min-w-10 bg-transparent border !min-h-10 !border-gray-400 text-[14px]": size === "square",
                    },
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    className
                )}
                {...rest}
            >
                {loading && (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                )}
                {startItem && <span className="mr-2">{startItem}</span>}
                {children}
                {endItem && <span className="ml-2">{endItem}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";
