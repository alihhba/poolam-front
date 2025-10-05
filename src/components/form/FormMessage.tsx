// src/components/ui/form/FormMessage.tsx
import { useFormContext } from "react-hook-form";

interface FormMessageProps {
    name: string;
}

export function FormMessage({ name }: FormMessageProps) {
    const {
        formState: { errors },
    } = useFormContext();

    if (!errors[name]) return null;

    return (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
    );
}
