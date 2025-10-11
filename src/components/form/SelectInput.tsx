import {ControlledField} from "./ControlledField";
import type {FieldValues, Path} from "react-hook-form";
import {cn} from "@/lib/utils";
import {type ReactNode, useMemo, useState} from "react";
import {Input} from "@/components";

interface SelectOption {
    id: string | number;

    [key: string]: any;

    label: ReactNode;
}

interface SelectInputProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    options: SelectOption[];

    /** Render trigger (custom button / UI) */
    trigger: (props: {
        value: string | number | undefined;
        data: SelectOption | undefined;
        open: boolean;
        onOpenChange: (open: boolean) => void;
    }) => ReactNode;

    /** Render for a single option item */
    renderItem?: (option: SelectOption, selected: boolean) => ReactNode;

    /** Optional wrapper for dropdown (e.g. custom popover) */
    contentWrapper?: (props: { children: ReactNode }) => ReactNode;

    /** Optional search bar */
    searchable?: boolean;

    /** Fields to search in (default: ["label"]) */
    searchOn?: string[];

    /** Whether items can be selected */
    canSelect?: boolean;

    className?: string;
}

export function SelectInput<T extends FieldValues>({
                                                       name,
                                                       label,
                                                       options,
                                                       trigger,
                                                       renderItem,
                                                       contentWrapper,
                                                       searchable = false,
                                                       searchOn = ["label"],
                                                       canSelect = true,
                                                       className,
                                                   }: SelectInputProps<T>) {
    return (
        <ControlledField<T>
            name={name}
            label={label}
            render={({field, hasError}) => {
                const [open, setOpen] = useState(false);
                const [query, setQuery] = useState("");

                const fieldValue =
                    (field.value as string | number | undefined) ?? undefined;
                const selectedOption = options.find((o) => o.id === fieldValue);

                // Filter options based on search query
                const filteredOptions = useMemo(() => {
                    if (!query.trim()) return options;
                    const lower = query.toLowerCase();
                    return options.filter((opt) =>
                        searchOn.some((key) =>
                            String(opt[key])?.toLowerCase().includes(lower)
                        )
                    );
                }, [options, query, searchOn]);

                const handleSelect = (val: string | number) => {
                    if (!canSelect) return;
                    field.onChange(val);
                    setOpen(false);
                    setQuery('')
                };

                const content = (
                    <div className="bg-white border border-gray-200 rounded-md shadow-md w-full max-h-60 overflow-auto">
                        {searchable && (
                            <div className="p-2 border-b border-gray-200">
                                <Input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search..."
                                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        )}

                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt) => {
                                const isSelected = opt.id === fieldValue;
                                return (
                                    <div
                                        key={opt.id}
                                        onClick={() => handleSelect(opt.id)}
                                        className={cn(
                                            "px-3 py-2 cursor-pointer hover:bg-gray-100",
                                            isSelected && "bg-blue-50 text-blue-600 font-medium",
                                            !canSelect && "cursor-default opacity-70"
                                        )}
                                    >
                                        {renderItem ? renderItem(opt, isSelected) : opt.label}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="px-3 py-2 text-gray-400 text-sm">No results</div>
                        )}
                    </div>
                );

                return (
                    <div className={cn("flex flex-col gap-2", className)}>
                        <div className={cn("relative", hasError && "border-red-500")}>
                            <div
                                onClick={() => {
                                    setOpen(!open)
                                    setQuery('')
                                }}
                                className="w-full border cursor-pointer border-gray-300 rounded-md px-3 py-2 text-left"
                            >
                                {trigger({
                                    value: fieldValue,
                                    data: selectedOption,
                                    open,
                                    onOpenChange: setOpen,
                                })}
                            </div>

                            {open &&
                                (contentWrapper ? (
                                    contentWrapper({children: content})
                                ) : (
                                    <div className="absolute  w-full top-full left-0 z-50 mt-1">
                                        {content}
                                    </div>
                                ))}
                        </div>
                    </div>
                );
            }}
        />
    );
}
