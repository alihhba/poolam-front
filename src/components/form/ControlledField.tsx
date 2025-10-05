import {Controller, type FieldValues, type Path, useFormContext, useWatch,} from "react-hook-form";
import type {ReactElement, Ref} from "react";
import {Icon} from "@/components";

interface ControlledRenderProps<TFieldValue = unknown> {
    field: {
        value: TFieldValue;
        onChange: (value: TFieldValue) => void;
        onBlur: () => void;
        name: string;
        ref: Ref<unknown>;
    };
    watchedValues?: unknown;
    hasError: boolean;
}

interface ControlledFieldProps<T extends FieldValues = FieldValues> {
    name: Path<T>;
    label?: string;
    watchFields?: Path<T>[];
    onValueChange?: (value: unknown, watchedValues?: unknown) => void;
    render: (props: ControlledRenderProps) => ReactElement;
}

export function ControlledField<T extends FieldValues = FieldValues>({
                                                                         name,
                                                                         label,
                                                                         watchFields,
                                                                         onValueChange,
                                                                         render,
                                                                     }: ControlledFieldProps<T>): ReactElement {
    const {
        control,
        formState: {errors},
    } = useFormContext<T>();

    const watchedValues = useWatch<T>({
        control,
        name: watchFields ?? [],
    });

    return (
        <div className="flex flex-col gap-1">
            {label ? (
                <label
                    htmlFor={name}
                >{label}</label>
            ) : null}

            <Controller
                name={name}
                control={control}
                render={({field}) =>
                    render({
                        field: {
                            ...field,
                            onChange: (value: unknown) => {
                                field.onChange(value);
                                if (onValueChange) onValueChange(value, watchedValues);
                            },
                        },
                        watchedValues,
                        hasError: !!errors[name],
                    })
                }
            />


            {errors[name] && (
                <div className={'flex items-center gap-1 mt-[3px]'}>
                    <Icon
                        name={'error'}
                        className={'w-4 h-4'}
                    />
                    <p className="text-[12px] leading-6 text-red-100">
                        {String(errors[name]?.message)}
                    </p>
                </div>
            )}
        </div>
    );
}
