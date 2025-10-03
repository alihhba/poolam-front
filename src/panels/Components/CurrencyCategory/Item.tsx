import type {CurrencyCategoryItemsProps} from "@/panels/Components/CurrencyCategory/List.tsx";
import {cn} from "@/lib/utils.ts";
import Image from "@/components/Image";
import {useQuery} from "@/hooks";

interface CurrencyCategoryItemProps {
    item: CurrencyCategoryItemsProps;
}

const CurrencyCategoryItem = (
    {
        item
    }
        : CurrencyCategoryItemProps
) => {
    const {get, set} = useQuery();
    const selectedCurrency = get('scc')


    const handleItemClick = () => {
        // selected currency category
        set('scc', item?.slug, {replace: true})
    }

    return (
        <div
            onClick={handleItemClick}
            className={cn(
                'h-[100px] min-h-[100px] transition-all w-full bg-light-100 rounded-2xl flex flex-col items-center justify-center gap-1.5',
                selectedCurrency === item?.slug ? 'bg-primary-100' : ''
            )}>
            <div className={'w-16 min-w-16 max-w-16'}>
                <Image
                    src={item.imageSrc}
                    alt={item.label}
                    className={'w-full h-full'}
                />
            </div>
            <p className={cn(
                'text-xs font-medium text-black transition-all',
                selectedCurrency === item?.slug ? 'text-white' : ''
            )}>
                {item.label}
            </p>
        </div>
    );
};

export default CurrencyCategoryItem
