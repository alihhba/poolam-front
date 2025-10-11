import {Icon} from "@/components";
import {cn} from "@/lib/utils.ts";

interface Props {
    title?: string,
    icon?: string,
    iconClass?: string,
}

const NotFound = ({
                      title,
                      icon,
                      iconClass
                  }: Props) => {
    return (
        <div className={'flex items-center justify-center flex-col gap-4 h-fit w-fit'}>
            <div>
                <Icon
                    name={icon ?? 'search-zoom-in'}
                    className={cn(
                        'w-[75px] h-full text-base-100',
                        iconClass
                    )}
                />
            </div>
            <p className={'text-sm font-semibold text-base-100'}>
                {title ?? 'موردی یافت نشد'}
            </p>
        </div>
    );
};

export default NotFound
