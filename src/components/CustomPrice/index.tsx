import { addCommasFunction, cn, digitsEnToFaFunction } from "@/lib/utils.ts";
import React from "react";

interface CustomPriceProps {
    data?: {
        currency?: string;
        price?: number | string;
    };
    isComma?: boolean;
    innerMines?: boolean;
    isPersian?: boolean;
    className?: string;
    currencyClassName?: string;
    priceClassName?: string;
    classNameContainer?: string;
}

const CustomPrice: React.FC<CustomPriceProps> = ({
                                                     data,
                                                     isComma = true,
                                                     innerMines = false,
                                                     isPersian = false,
                                                     className,
                                                     currencyClassName,
                                                     priceClassName,
                                                     classNameContainer,
                                                 }) => {
    const config = {
        currency: "IRR",
    };
    const { currency, price } = data || {};

    const currencyMap: Record<string, string> = {
        IRR: "تومان",
        AFN: "؋",
        USD: "$",
        AZN: "₼",
        BGN: "лв",
        JPY: "¥",
        GBP: "£",
        EUR: "€",
        INR: "₹",
        ILS: "₪",
        KRW: "₩",
        TRY: "₺",
    };

    const currencySign = config.currency || currency || "USD";
    const currencySymbol = currencyMap[currencySign] || currencySign;

    let showPrice: string | number = Math.abs(+price!);
    if (isComma) showPrice = addCommasFunction(showPrice);
    if (isPersian) showPrice = digitsEnToFaFunction(showPrice);

    return (
        <div className={cn("", classNameContainer)}>
            {innerMines ? (
                <div
                    className={cn(
                        "flex gap-1",
                        ["IRR"].includes(config.currency) ? "flex-row-reverse" : "",
                        className
                    )}
                >
                    <div
                        className={cn(
                            "",
                            ["IRR"].includes(config.currency) && "text-[5px] mt-auto mb-1",
                            currencyClassName
                        )}
                    >
                        {currencySymbol}
                    </div>
                    <span className={cn("font-bold", priceClassName)}>{showPrice}</span>
                </div>
            ) : (
                <div
                    className={cn(
                        "flex gap-1 whitespace-nowrap",
                        ["IRR"].includes(config.currency) ? "flex-row-reverse" : "",
                        className
                    )}
                >
                    <div
                        className={cn(
                            "",
                            ["IRR"].includes(config.currency) &&
                            "text-[9px] font-bold whitespace-nowrap mt-auto mb-1",
                            currencyClassName
                        )}
                    >
                        {currencySymbol}
                    </div>
                    <span
                        className={cn("whitespace-nowrap text-end font-semibold", priceClassName)}
                    >
            {showPrice}
          </span>
                </div>
            )}
        </div>
    );
};

export default CustomPrice;
