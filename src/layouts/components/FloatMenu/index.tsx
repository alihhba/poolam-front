import {motion} from "framer-motion";
import {Icon} from "@/components";
import {cn} from "@/lib/utils";
import {paths} from "@/routes/paths";
import {useLocation, useNavigate} from "react-router-dom";

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

    return (
        <div
            className="relative bg-white flex-row-reverse flex items-center justify-between mx-auto w-[320px] h-[75px] rounded-full px-3 shadow-sm overflow-hidden">
            {items.map((item) => {
                const isActive = item.id === activeId;

                return (
                    <motion.button
                        key={item.id}
                        layout
                        onClick={() => navigate(item.path)}
                        className="relative flex items-center gap-2 h-11 rounded-full px-4 z-10"
                    >
                        {/* pill only behind active item */}
                        {isActive && (
                            <motion.div
                                layoutId="pill"
                                className="absolute inset-0 bg-primary-100 rounded-full"
                                initial={false}
                                transition={{type: "spring", stiffness: 300, damping: 30}}
                            />
                        )}

                        {/* icon */}
                        <Icon
                            name={isActive ? item.activeIcon : item.icon}
                            className={cn(
                                "w-6 h-6 min-w-6 min-h-6 transition-colors duration-200",
                                isActive ? "text-white z-10" : "text-primary-100"
                            )}
                        />

                        {/* label */}
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
        </div>
    );
};

export default FloatMenu;
