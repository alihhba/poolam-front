import {Currency} from "@/panels/Components";
import type {CurrencyType} from "@/panels/Components/Currency/types.ts";
import {CurrencyItems} from "@/data/FakeData.ts";

interface Props {
    hasHeader?: boolean;
}

const CurrencyPrimaryList = ({
                                 hasHeader = true
                             }: Props) => {



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
