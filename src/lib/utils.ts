import clsx, {type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {addCommas, digitsEnToFa,} from '@persian-tools/persian-tools';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function digitsEnToFaFunction(number: number | string): string {
    return digitsEnToFa(number).toString();
}

export function addCommasFunction(number: number | string): string {
    return addCommas(number);
}
