import * as React from "react";
import {useMemo, useState} from "react";
import {ControlledField} from "./ControlledField";
import type {FieldValues, Path} from "react-hook-form";
import {cn} from "@/lib/utils";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle,} from "@/components/Drawer/index.tsx";
import {CustomInput, NotFound} from "@/panels/Components";
import {Icon} from "@/components";

interface SelectOption {
    id: string | number;

    [key: string]: any;

    label?: React.ReactNode;
}

interface SelectDrawerProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    options: SelectOption[];

    /** Custom trigger button — controls drawer open */
    trigger?: (props: {
        data: SelectOption | undefined;
        onOpen: () => void;
    }) => React.ReactNode;

    /** Render each item inside the drawer list */
    renderItem?: (option: SelectOption, selected: boolean) => React.ReactNode;

    /** Optional search bar */
    searchable?: boolean;
    searchOn?: string[];
    canSelect?: boolean;

    /** Optional drawer title */
    drawerTitle?: string;
}

/**
 * ✅ SelectDrawer:
 * Works like SelectInput, but opens inside a Drawer (Vaul)
 */
export function SelectDrawer<T extends FieldValues>({
                                                        name,
                                                        label,
                                                        options,
                                                        trigger,
                                                        renderItem,
                                                        searchable = false,
                                                        searchOn = ["label"],
                                                        canSelect = true,
                                                        drawerTitle,
                                                    }: SelectDrawerProps<T>) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <ControlledField<T>
            name={name}
            label={label}
            render={({field}) => {
                const fieldValue =
                    (field.value as string | number | undefined) ?? undefined;

                const selectedOption = options.find((o) => o.id === fieldValue);

                const filtered = useMemo(() => {
                    if (!query.trim()) return options;
                    const lower = query.toLowerCase();
                    return options.filter((opt) =>
                        searchOn.some((key) =>
                            String(opt[key])?.toLowerCase().includes(lower)
                        )
                    );
                }, [query, options, searchOn]);

                const handleSelect = (val: string | number) => {
                    if (!canSelect) return;
                    field.onChange(val);
                    setOpen(false);
                };

                return (
                    <div className="flex flex-col gap-2">
                        {/* --- Trigger --- */}
                        <div
                            className={cn(
                                'flex items-center cursor-pointer',
                                "w-full h-12 rounded-2xl transition-all px-3 text-sm border border-border-input",
                                "focus:border-gray-600 outline-none focus:ring-0",
                                "disabled:bg-gray-100",
                                "placeholder:text-text-200",
                            )}
                            onClick={() => setOpen(true)}
                        >
                            <div className={'flex items-center justify-between w-full'}>
                                {trigger ? (
                                    trigger({data: selectedOption, onOpen: () => setOpen(true)})
                                ) : (
                                    <div>
                                        {selectedOption ? selectedOption.label : "Select option"}
                                    </div>
                                )}
                                <Icon
                                    name={'arrow-right'}
                                    className={cn(
                                        'transition-all text-gray-500',
                                        open ? '-rotate-90' : 'rotate-90'
                                    )}
                                />
                            </div>
                        </div>

                        {/* --- Drawer --- */}
                        <Drawer open={open} onOpenChange={setOpen}>
                            <DrawerContent className="bg-white">
                                {drawerTitle ? (
                                    <DrawerHeader>
                                        <DrawerTitle>{drawerTitle}</DrawerTitle>
                                    </DrawerHeader>
                                ) : null}

                                <div className="flex flex-col gap-3">
                                    {/* --- Search box --- */}
                                    {searchable && (
                                        <CustomInput
                                            endIcon={'search_normal'}
                                            type="text"
                                            placeholder="جستجو دارایی مورد نظر"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                        />
                                    )}

                                    {/* --- Option List --- */}
                                    <div className="max-h-[60vh] w-full overflow-y-auto  pt-2">
                                        {filtered.length > 0 ? (
                                            filtered.map((opt) => {
                                                const isSelected = opt.id === fieldValue;
                                                return (
                                                    <div
                                                        key={opt.id}
                                                        onClick={() => handleSelect(opt.id)}
                                                        className={cn(
                                                            "px-3  w-full py-2 cursor-pointer rounded-md transition-colors",
                                                            !canSelect && "cursor-default opacity-70"
                                                        )}
                                                    >
                                                        {renderItem
                                                            ? renderItem(opt, isSelected)
                                                            : opt.label}
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <div className="flex py-4 items-center justify-center">
                                                <NotFound/>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                );
            }}
        />
    );
}
