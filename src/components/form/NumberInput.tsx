// src/components/ui/form/NumberInput.tsx
import { ControlledField } from "./ControlledField";
import type { FieldValues, Path } from "react-hook-form";
import type { InputHTMLAttributes } from "react";
import { Input } from "@/components";
import clsx from "clsx";

interface NumberInputProps<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "type"> {
    name: Path<T>;
    label?: string;
}

export function NumberInput<T extends FieldValues>({
                                                       name,
                                                       label,
                                                       placeholder,
                                                       className,
                                                       ...rest
                                                   }: NumberInputProps<T>) {
    return (
        <ControlledField<T>
            name={name}
            label={label}
            render={({ field, hasError }) => (
                <Input
                    type="number"
                    value={typeof field.value === "number" ? field.value : ""}
                    onChange={(e) => {
                        const trimmedValue = e.currentTarget.value.trim();
                        const numberValue = trimmedValue === "" ? "" : Number(trimmedValue);
                        field.onChange(numberValue);
                    }}
                    onBlur={field.onBlur}
                    placeholder={placeholder}
                    className={clsx(className, hasError && "border-red-500")}
                    {...rest}
                />
            )}
        />
    );
}
