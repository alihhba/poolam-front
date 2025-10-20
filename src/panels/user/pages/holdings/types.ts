import type {CurrencyType} from "@/panels/Components/Currency/types.ts";

export interface HoldingsItem {
    id: string;
    slug: string;
    currency?: CurrencyType;
    assets: number;
}
