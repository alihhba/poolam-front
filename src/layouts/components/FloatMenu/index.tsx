import {motion} from "framer-motion";
import {Icon} from "@/components";
import {cn} from "@/lib/utils";
import {paths} from "@/routes/paths";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

export interface LabelProps {
    id: number;
    label: string;
    icon: string;
    activeIcon: string;
    path: string;
}

const items: LabelProps[] = [
    {
        id: 1,
        label: "پروفایل",
        icon: "empty_profile",
        activeIcon: "profile", path: paths.user.profile
    },
    {
        id: 2,
        label: "یادآوری",
        icon: "empty_notification_status",
        activeIcon: "notification_status",
        path: paths.user.reminder
    },
    {
        id: 3,
        label: "قیمت بازار",
        icon: "empty_dollar_circle",
        activeIcon: "dollar_circle",
        path: paths.user.market_price
    },
    {
        id: 4,
        label: "دارایی‌ها",
        icon: "empty_wallet",
        activeIcon: "wallet",
        path: paths.user.holdings
    },
];

function getActiveByPath(pathname: string): number {
    let best: LabelProps | null = null;
    for (const it of items) {
        if (pathname === it.path || pathname.startsWith(it.path)) {
            if (!best || it.path.length > best.path.length) {
                best = it;
            }
        }
    }
    return best ? best.id : -1;
}

const FloatMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const activeId = getActiveByPath(location.pathname || '');
    const [activeIndex, setActiveIndex] = useState<number>(activeId);

    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const pillRef = useRef<HTMLDivElement | null>(null);
    const [pillPosition, setPillPosition] = useState<{ left: number; width: number }>({left: 0, width: 0});


    useLayoutEffect(() => {
        const updatePillPosition = () => {
            const activeRef = itemRefs.current[activeIndex - 1];
            const container = pillRef.current?.parentElement;
            if (activeRef && container) {
                const left = activeRef.offsetLeft;
                const width = activeRef.offsetWidth;
                setPillPosition({ left, width });
            }
        };

        updatePillPosition();

        // Recalculate when window resizes
        window.addEventListener("resize", updatePillPosition);
        return () => window.removeEventListener("resize", updatePillPosition);
    }, [activeIndex]);


    useEffect(() => {
        setActiveIndex(activeId);
    }, [activeId]);

    return (
        <div
            className="relative bg-white flex-row-reverse flex items-center justify-between mx-auto w-[320px] h-[75px] rounded-full px-3 shadow-sm overflow-hidden">

            {/* Render items with active state */}
            {items.map((item, index) => {
                const isActive = item.id === activeIndex;
                return (
                    <motion.button
                        key={item.id}
                        ref={(el) => {
                            itemRefs.current[index] = el
                        }}
                        onClick={() => {
                            navigate(item.path);
                            setActiveIndex(item.id);
                        }}
                        className="relative flex items-center gap-2 h-11 rounded-full px-4 z-10"
                    >
                        {/* Icon */}
                        <Icon
                            name={isActive ? item.activeIcon : item.icon}
                            className={cn(
                                "w-6 h-6 min-w-6 min-h-6 transition-colors duration-200",
                                isActive ? "text-white z-10" : "text-primary-100"
                            )}
                        />

                        {/* Label */}
                        {isActive && (
                            <motion.span
                                className="text-sm text-white font-medium text-nowrap z-20"
                                initial={{opacity: 0, x: 0}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 0}}
                                transition={{duration: 0.2}}
                            >
                                {item.label}
                            </motion.span>
                        )}
                    </motion.button>
                );
            })}

            {/* Active pill */}
            <motion.div
                ref={pillRef}
                className="absolute -me-3.5 bg-primary-100 rounded-full h-11"
                initial={{x: pillPosition.left, width: pillPosition.width}}
                animate={{
                    x: pillPosition.left,
                    width: pillPosition.width,
                }}
                transition={{type: "spring", stiffness: 300, damping: 30}}
            />

        </div>
    );
};

export default FloatMenu;
