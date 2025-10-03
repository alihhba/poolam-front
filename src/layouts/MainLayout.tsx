import type {ReactNode} from "react";
import {cn} from "@/lib/utils.ts";

type Props = {
    children: ReactNode;
    className?: string;
};

const MainLayout = ({children, className}: Props) => {
    return <div className={cn(
        'px-6',
        className
    )}>{children}</div>;
};

export default MainLayout;
