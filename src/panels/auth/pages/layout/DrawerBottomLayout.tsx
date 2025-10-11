import React from "react";
import {cn} from "@/lib/utils.ts";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const DrawerBottomLayout = ({
                                children,
                                className
                            }: Props) => {
    return (
        <div className={cn(
            'p-4 pb-6 rounded-t-3xl bg-white fixed bottom-0 w-full h-fit ',
            className
        )}>
            {children}
        </div>
    );
};

export default DrawerBottomLayout
