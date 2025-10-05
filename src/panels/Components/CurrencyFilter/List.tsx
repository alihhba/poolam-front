import {useEffect, useRef} from 'react';
import CurrencyFilterItem from "@/panels/Components/CurrencyFilter/Itme.tsx";
import {useQuery} from "@/hooks";

export interface CurrencyFilterItemsProps {
    id: number;
    label: string;
    icon: string;
    slug: string;
}

const CurrencyFilterList = () => {
    const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const {get} = useQuery();

    const currencyFilterItems: CurrencyFilterItemsProps[] = [
        {
            id: 1,
            slug: "favorite",
            icon: 'favorite_chart',
            label: 'موردعلاقه'
        },
        {
            id: 2,
            slug: 'trend_up',
            icon: 'trend_up',
            label: 'بیشترین قیمت'
        },
        {
            id: 3,
            slug: "trend_down",
            icon: 'trend_down',
            label: 'کمترین قیمت'
        },
        {
            id: 4,
            slug: "market",
            icon: 'chart-2',
            label: 'رتبه بازار'
        }
    ];

    const handleSelectItem = (slug: string) => {
        itemRefs.current[slug]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',

        });
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        }, 100)
    };

    useEffect(() => {
        const scf = get('scf');
        if (scf) {
            handleSelectItem(scf);
        }
    }, [get]);

    return (
        <div className={'w-full overflow-x-auto overflow-y-hidden scrollbar-none flex items-center gap-2'}>
            {currencyFilterItems.map((item) => (
                <div
                    key={item.id}
                    ref={(el) => {
                        itemRefs.current[item.slug] = el;
                    }}
                    className={`first:ps-6 last:pe-6`}
                    onClick={() => handleSelectItem(item.slug)}
                >
                    <CurrencyFilterItem item={item}/>
                </div>
            ))}
        </div>
    );
};

export default CurrencyFilterList;
