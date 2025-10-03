import coin_currency from '../assets/images/coin-currency.svg'
import dollar_currency from '../assets/images/dollar-currency.svg'
import gold_currency from '../assets/images/gold-currency.svg'

export const images = {
    coin_currency: coin_currency,
    dollar_currency: dollar_currency,
    gold_currency: gold_currency,

    placeholder: '@/assets/images/dollar-currency.svg',
} as const;

export type ImageKey = keyof typeof images;
