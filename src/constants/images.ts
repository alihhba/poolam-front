import coin_currency from '../assets/images/coin-currency.svg'
import dollar_currency from '../assets/images/dollar-currency.svg'
import gold_currency from '../assets/images/gold-currency.svg'
import example_chart from '../assets/images/example-chart.png'
import shadow_1 from '../assets/images/shadow-1.png'
import login_bg from '../assets/images/login-bg.svg'

export const images = {
    coin_currency: coin_currency,
    dollar_currency: dollar_currency,
    gold_currency: gold_currency,
    example_chart: example_chart,
    shadow_1: shadow_1,
    login_bg: login_bg,

    placeholder: '@/assets/images/dollar-currency.svg',
} as const;

export type ImageKey = keyof typeof images;
