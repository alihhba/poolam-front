import {Currency} from "@/panels/Components";

interface Props {
    hasHeader?: boolean;
}

export interface CurrencyType {
    id: string;
    icon: string;
    name: string;
    nameFa: string;
    price: number;
    change: number
}

const CurrencyPrimaryList = ({
                                 hasHeader = true
                             }: Props) => {

    const CurrencyItems: CurrencyType[] = [
        {
            id: '1',
            icon: 'bitcoin-(btc)',
            name: 'BTC',
            nameFa: 'بیت ‌کوین',
            price: 10000000000,
            change: 0.1
        },
        {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },      {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },
    ]

    return (
        <div className={'w-full flex flex-col gap-3'}>
            {/*header*/}
            {hasHeader ? (
                <div className={'flex items-center justify-between px-5'}>
                    <p className={'text-sm font-medium'}>نام</p>
                    <p className={'text-sm font-medium'}>نمودار تغییرات</p>
                    <p className={'text-sm font-medium'}>قیمت</p>
                </div>
            ) : null}


            {/*list*/}
            {CurrencyItems?.map((item: CurrencyType) => {
                return (
                    <Currency.PrimaryItem
                        key={item?.id}
                        item={item}
                    />
                )
            })}

        </div>
    );
};

export default CurrencyPrimaryList
