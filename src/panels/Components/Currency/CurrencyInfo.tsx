import {Icon} from "@/components";
import type {CurrencyType} from "@/panels/Components/Currency/types.ts";

interface Props {
    item: CurrencyType
}

const CurrencyInfo = ({
                          item
                      }: Props) => {
    return (
        <div className={'flex items-center gap-1.5'}>
            <Icon
                name={item?.icon}
                className={'w-[30px] h-[30px]'}
            />
            <div className={'flex flex-col justify-between h-[30px]'}>
                <p className={'text-xs font-semibold'}>
                    {item?.name}
                </p>
                <p className={'text-[10px] text-text-100 font-normal'}>
                    {item?.nameFa}
                </p>
            </div>
        </div>
    );
};

export default CurrencyInfo
