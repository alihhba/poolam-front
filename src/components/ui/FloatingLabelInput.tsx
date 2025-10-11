// src/components/ui/FloatingLabelInput.tsx
import {forwardRef, type InputHTMLAttributes} from "react";
import {cn} from "@/lib/utils.ts";
import {Input} from "@/components";

export interface FloatingLabelInputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hasError?: boolean;
    labelClassName?: string;
}

export const    FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
    ({label, hasError, className, labelClassName, ...props}, ref) => {
        return (
            <div className="relative w-full">
                <Input
                    id={label}
                    ref={ref}
                    {...props}
                    placeholder=" "
                    className={cn(
                        "peer",
                        hasError && "border-red-100 focus:border-red-100",
                        className
                    )}
                />
                <label
                    htmlFor={label}
                    className={cn(
                        "absolute start-3.5 -top-2 px-0.5 text-black text-xs transition-all",
                        "peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base",
                        "peer-focus:-top-2 bg-white rounded-full px-1 peer-focus:text-xs ",
                        hasError ? "peer-focus:text-red-100" : 'peer-focus:text-gray-600',
                        labelClassName,
                    )}
                >
                    {label}
                </label>
            </div>
        );
    }
);

FloatingLabelInput.displayName = "FloatingLabelInput";
