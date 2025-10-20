import type {CurrencyType} from "@/panels/Components/Currency/types.ts";
import type {HoldingsItem} from "@/panels/user/pages/holdings/types.ts";

export const CurrencyItems: CurrencyType[] = [
    {
        id: '1',
        icon: 'bitcoin-btc',
        name: 'BTC',
        nameFa: 'بیت ‌کوین',
        price: 10000000000,
        change: 0.1,
        slug: 'btc'
    },
    {
        id: '2',
        icon: 'tether-usdt',
        name: 'USDT',
        nameFa: 'تتر',
        price: 1284793,
        change: -0.1,
        slug: "usdt"
    }
]

export const holdingsItems: HoldingsItem[] = [
    {
        id: "1",
        slug: 'btc',
        assets: 10000
    },
    {
        id: "2",
        slug: 'usdt',
        assets: 2000000
    },
]

