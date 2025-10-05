// src/components/ui/form/Form.tsx
import { FormProvider as RHFProvider, type UseFormReturn, type FieldValues, type SubmitHandler } from "react-hook-form";
import type { ReactNode } from "react";

interface FormProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = unknown
> {
    form: UseFormReturn<TFieldValues, TContext>;
    onSubmit: SubmitHandler<TFieldValues>;
    children: ReactNode;
}

export function Form<
    TFieldValues extends FieldValues = FieldValues,
    TContext = unknown
>({
      form,
      onSubmit,
      children,
  }: FormProps<TFieldValues, TContext>) {
    return (
        <RHFProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
        </RHFProvider>
    );
}
