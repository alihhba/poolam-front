// src/components/ui/form/TextInput.tsx
import {ControlledField} from "./ControlledField";
import type {FieldValues, Path} from "react-hook-form";
import type {InputHTMLAttributes} from "react";
import {FloatingLabelInput} from "@/components";
import {cn} from "@/lib/utils.ts";

interface TextInputProps<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "type"> {
    name: Path<T>;
    label?: string;
}

export function TextInput<T extends FieldValues>({
                                                     name,
                                                     label,
                                                     placeholder,
                                                     ...rest
                                                 }: TextInputProps<T>) {
    return (
        <ControlledField<T>
            name={name}
            render={({ field, hasError }) => (
                <FloatingLabelInput
                    type="text"
                    label={label!}
                    value={typeof field.value === "string" ? field.value : ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder={placeholder}
                    hasError={hasError}
                    className={cn(hasError && "border-red-100")}
                    {...rest}
                />
            )}
        />

    );
}
