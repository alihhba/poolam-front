import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { format as formatGregorian, formatDistanceToNowStrict, isFuture } from "date-fns";
import { format as formatJalali } from "date-fns-jalali";
import { cn } from "@/lib/utils.ts";

// Define types for the props
interface DateFormatterProps {
    dateInput: string | number | Date;
    secondDateInput?: string | number | Date;
    formatType: 'fullDate' | 'shortDayMonth' | 'dayOnly' | 'timeOnly' | 'monthDay' | 'dayMonth' | 'relative';
    locale?: "en" | "fa";
    className?: string;
}

// Component definition
const DateFormatter: React.FC<DateFormatterProps> = memo(({
                                                              dateInput,
                                                              formatType,
                                                              locale = "en",
                                                              className
                                                          }) => {
    const config = {
        language: "fa",
    };

    // Memoize the parsed date inputs
    const date = useMemo(() => {
        const parsedDate = new Date(dateInput);
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
    }, [dateInput]);

    // const secondDate = useMemo(() => {
    //     if (!secondDateInput) return null;
    //     const parsedDate = new Date(secondDateInput);
    //     return isNaN(parsedDate.getTime()) ? null : parsedDate;
    // }, [secondDateInput]);

    const formatterLocale = config?.language || locale;

    // Function to format the date
    const formattedDate = useMemo(() => {
        if (!date) {
            return formatterLocale === "fa" ? "--" : "--";
        }

        const formats = {
            fullDate: () =>
                formatterLocale === "fa"
                    ? formatJalali(date, "eeee - dd MMMM yyyy") // جمعه - 04 مهر 1404
                    : formatGregorian(date, "eeee - dd MMMM yyyy"), // Sun 5
            shortDayMonth: () =>
                formatterLocale === "fa"
                    ? formatJalali(date, "eee d") // شنبه 5
                    : formatGregorian(date, "eee d"), // Sun 5
            dayOnly: () =>
                formatterLocale === "fa" ? formatJalali(date, "d") : formatGregorian(date, "d"), // 24
            timeOnly: () =>
                formatterLocale === "fa" ? formatJalali(date, "h:mm") : formatGregorian(date, "h:mma"), // 4:00 PM
            monthDay: () =>
                formatterLocale === "fa"
                    ? formatJalali(date, " d  MMMM")
                    : formatGregorian(date, "MMM d"), // Oct 10
            dayMonth: () =>
                formatterLocale === "fa" ? formatJalali(date, "d MMM") : formatGregorian(date, "d MMM"), // 10 Oct
            relative: () => {
                const relativeTime = formatDistanceToNowStrict(date);
                if (formatterLocale === "fa") {
                    return isFuture(date)
                        ? `در ${relativeTime
                            .replace(/years|year/g, "سال")
                            .replace(/months|month/g, "ماه")
                            .replace(/days|day/g, "روز")
                            .replace(/hours|hour/g, "ساعت")
                            .replace(/minutes|minute/g, "دقیقه")
                            .replace(/seconds|second/g, "ثانیه")}`
                        : relativeTime.includes("second")
                            ? "همین الان"
                            : `${relativeTime
                                .replace(/years|year/g, "سال")
                                .replace(/months|month/g, "ماه")
                                .replace(/days|day/g, "روز")
                                .replace(/hours|hour/g, "ساعت")
                                .replace(/minutes|minute/g, "دقیقه")
                                .replace(/seconds|second/g, "ثانیه")} قبل`;
                } else {
                    return isFuture(date)
                        ? `in ${relativeTime}`
                        : relativeTime.includes("second")
                            ? "just now"
                            : `${relativeTime.replace(/hours|hour/g, "h").replace(/minutes|minute/g, "m").replace(/days|day/g, "d")} ago`;
                }
            },
        };

        return formats[formatType]?.() || (formatterLocale === "fa" ? "--" : "--");
    }, [date, formatType, locale]);

    if(!formattedDate){
        return(
            <div>--</div>
        )
    }

    return (
        <div className={cn("w-fit h-fit flex items-center text-sm font-medium gap-0.5", className)}>
            <div>{formattedDate}</div>
        </div>
    );
});

// Prop Types
DateFormatter.propTypes = {
    dateInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
    secondDateInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    formatType: PropTypes.oneOf(['fullDate', 'shortDayMonth', 'dayOnly', 'timeOnly', 'monthDay', 'dayMonth', 'relative']).isRequired,
    locale: PropTypes.oneOf(["en", "fa"]),
};

export default DateFormatter;
