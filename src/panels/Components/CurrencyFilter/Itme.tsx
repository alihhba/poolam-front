import type {CurrencyFilterItemsProps} from "@/panels/Components/CurrencyFilter/List.tsx";
import {cn} from "@/lib/utils.ts";
import {Icon} from "@/components";
import {useQuery} from "@/hooks";

interface Props {
    item: CurrencyFilterItemsProps
}

const CurrencyFilterItem = ({
                                item
                            }: Props) => {
    const {get, set} = useQuery();
    const selectedFilter = get('scf')


    const handleItemClick = () => {
        // selected currency filter
        set('scf', item?.slug, {replace: true})
    }

    return (
        <div
            onClick={handleItemClick}
            className={cn(
                'w-fit px-2 h-8 min-h-8 max-h-8 rounded-[10px] bg-white flex items-center justify-center gap-1 ',
                selectedFilter === item?.slug ? 'bg-primary-100' : ''
            )}
        >
            <Icon name={item.icon} className={cn(
                'w-4 h-4 text-black ',
                selectedFilter === item?.slug ? 'text-light-100' : ''
            )}/>

            <p className={cn(
                'text-black text-xs  text-nowrap',
                selectedFilter === item?.slug ? 'text-light-100' : ''
            )}>
                {item?.label}
            </p>
        </div>
    );
};

export default CurrencyFilterItem
