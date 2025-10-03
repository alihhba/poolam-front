import React from "react";
import {cn} from "@/lib/utils.ts";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Section = ({
                     children,
                     className
                 }: Props) => {
    return (
        <div className={cn(
            '-mx-6',
            className
        )}>
            {children}
        </div>
    );
};

export default Section
