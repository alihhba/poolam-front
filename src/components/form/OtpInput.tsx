import {ControlledField} from "./ControlledField";
import type {FieldValues, Path} from "react-hook-form";
import {Input} from "@/components";
import clsx from "clsx";
import {useEffect, useRef} from "react";

interface OtpInputProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    length?: number;
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
}

export function OtpInput<T extends FieldValues>({
                                                    name,
                                                    label,
                                                    length = 6,
                                                    placeholder = "",
                                                    className,
                                                    autoFocus = true,
                                                    ...rest
                                                }: OtpInputProps<T>) {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    // Initialize refs array
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, length);
    }, [length]);

    return (
        <ControlledField<T>
            name={name}
            label={label}
            render={({field, hasError}) => {
                const currentValue = field.value || "";
                const values = currentValue.toString().split("").slice(0, length);

                // Pad the values array to match the length
                while (values.length < length) {
                    values.push("");
                }

                const handleChange = (value: string, index: number) => {
                    if (!/^\d*$/.test(value)) return; // Only allow numbers

                    const newValues = [...values];
                    newValues[index] = value;

                    const otpValue = newValues.join("");
                    field.onChange(otpValue);

                    // Auto-focus next input
                    if (value && index < length - 1) {
                        inputRefs.current[index + 1]?.focus();
                    }
                };

                const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
                    if (e.key === "Backspace" && !values[index] && index > 0) {
                        // Move to previous input on backspace when current is empty
                        inputRefs.current[index - 1]?.focus();
                    } else if (e.key === "ArrowLeft" && index > 0) {
                        e.preventDefault();
                        inputRefs.current[index - 1]?.focus();
                    } else if (e.key === "ArrowRight" && index < length - 1) {
                        e.preventDefault();
                        inputRefs.current[index + 1]?.focus();
                    }
                };

                const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    const pastedData = e.clipboardData.getData("text/plain").replace(/\D/g, ""); // Remove non-digits
                    const pastedValues = pastedData.split("").slice(0, length);

                    if (pastedValues.length > 0) {
                        const newValues = [...values];
                        pastedValues.forEach((value, index) => {
                            if (index < length) {
                                newValues[index] = value;
                            }
                        });

                        const otpValue = newValues.join("");
                        field.onChange(otpValue);

                        // Focus the next empty input or the last one
                        const nextFocusIndex = Math.min(pastedValues.length, length - 1);
                        inputRefs.current[nextFocusIndex]?.focus();
                    }
                };

                return (
                    <div dir={'ltr'} className="flex flex-col">
                        <div className={clsx("flex gap-2 justify-center", className)}>
                            {values.map((value, index) => (
                                <Input
                                    key={index}
                                    ref={(el) => {
                                        (inputRefs.current[index] = el)
                                    }}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    autoComplete="one-time-code"
                                    value={value}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onPaste={index === 0 ? handlePaste : undefined}
                                    placeholder={placeholder}
                                    className={clsx(
                                        "w-full h-16 text-center text-lg font-semibold",
                                        hasError && "border-red-500"
                                    )}
                                    autoFocus={autoFocus && index === 0}
                                    maxLength={1}
                                    {...rest}
                                />
                            ))}
                        </div>
                    </div>
                );
            }}
        />
    );
}
