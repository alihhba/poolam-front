import React from 'react';
import { cn } from '@/lib/utils.ts';
import { Icon } from "@/components";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: string;
    endIcon?: string;
    className?: string;
    startIconClassName?: string;
    endIconClassName?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
                                                     startIcon,
                                                     endIcon,
                                                     className,
                                                     startIconClassName,
                                                     endIconClassName,
                                                     ...props
                                                 }) => {
    return (
        <div className={cn("relative group", className)}>
            {startIcon && (
                <div className="absolute start-3 top-1/2 transform -translate-y-1/2">
                    <Icon
                        name={startIcon}
                        className={cn(
                            "w-6 h-6 transition-all",
                            startIconClassName,
                        )}
                    />
                </div>
            )}
            <input
                {...props}
                className={cn(
                    "ps-4 h-12 w-full rounded-2xl border border-border-100 focus:outline-none focus:ring-1 focus:ring-primary-100  transition-all text-black",
                    startIcon ? "ps-12" : "",
                    endIcon ? "pe-12" : "",
                    className
                )}
            />
            {endIcon && (
                <div className="absolute end-3 top-1/2 transform -translate-y-1/2  transition-all">
                    <Icon
                        name={endIcon}
                        className={cn(
                            "w-6 h-6",
                            endIconClassName,
                        )}
                    />
                </div>
            )}
        </div>
    );
};

export default CustomInput;
