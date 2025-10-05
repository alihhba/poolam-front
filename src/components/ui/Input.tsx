// src/components/ui/Input.tsx
import type {InputHTMLAttributes} from "react";
import {forwardRef} from "react";
import {cn} from "@/lib/utils.ts";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({className, ...props}, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    "w-full h-12 rounded-2xl transition-all px-3 text-sm border border-border-input",
                    "focus:border-gray-600 outline-none focus:ring-0",
                    "disabled:bg-gray-100",
                    "placeholder:text-text-200",
                    className
                    )}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
