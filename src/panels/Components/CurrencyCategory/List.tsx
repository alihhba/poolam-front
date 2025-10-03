import type {ImageKey} from "@/constants/images.ts";
import {CurrencyCategory} from "@/panels/Components";
import {cn} from "@/lib/utils.ts";
import {useEffect} from "react";
import {useQuery} from "@/hooks";

export interface CurrencyCategoryItemsProps {
    id: number;
    label: string;
    imageSrc: ImageKey,
    slug: string;
}


const CurrencyCategoryList = () => {
    const {set, get} = useQuery()

    const CurrencyCategories: CurrencyCategoryItemsProps[] = [
        {
            id: 1,
            label: 'رمز ارز',
            imageSrc: 'coin_currency',
            slug: 'coin'
        },
        {
            id: 2,
            label: 'ارز',
            imageSrc: 'dollar_currency',
            slug: 'dollar'
        },
        {
            id: 1,
            label: 'طلا',
            imageSrc: 'gold_currency',
            slug: 'gold'
        }
    ]

    useEffect(() => {
        if (!get('scc')) {
            set('scc', CurrencyCategories[0].slug, {replace: true})
        }
    }, [])

    return (
        <div className={cn(
            'flex items-center gap-2 w-full'
        )}>
            {CurrencyCategories?.map((category: CurrencyCategoryItemsProps) => {
                return (
                    <CurrencyCategory.Item
                        key={category.id}
                        item={category}
                    />
                )
            })}

        </div>
    );
};

export default CurrencyCategoryList
