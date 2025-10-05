// src/components/ui/form/RadioInput.tsx
import {ControlledField} from "./ControlledField";
import type {FieldValues, Path} from "react-hook-form";
import type {InputHTMLAttributes} from "react";
import {Input} from "@/components";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioInputProps<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "type"> {
    name: Path<T>;
    label?: string;
    options: RadioOption[];
}

export function RadioInput<T extends FieldValues>({
                                                      name,
                                                      label,
                                                      options,
                                                      ...rest
                                                  }: RadioInputProps<T>) {
    return (
        <ControlledField<T>
            name={name}
            label={label}
            render={({value, onChange}) => (
                <div className="flex gap-4">
                    {options.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-1">
                            <Input
                                type="radio"
                                checked={value === opt.value}
                                value={opt.value}
                                onChange={() => onChange(opt.value)}
                                {...rest}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            )}
        />
    );
}
