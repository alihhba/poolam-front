import Assets from "@/panels/user/pages/holdings/components/assets";
import type {HoldingsItem} from "@/panels/user/pages/holdings/types.ts";
import {CustomPrice} from "@/components";
import {PercentNumber} from "@/panels/Components";

interface Props {
    data: HoldingsItem;
}

const HoldingCard = ({
                         data
                     }: Props) => {
    const {
        assets,
        currency,
    } = data || {};

    const {
        icon,
        nameFa,
        price,
        change
    } = currency || {};

    if (!data || !currency) return null;

    return (
        <div className={'w-full h-[58px] bg-light-100 flex justify-between items-center px-[13px] rounded-[20px]'}>
            <Assets.Item
                data={{
                    assets,
                    icon,
                    price,
                    nameFa
                }}
            />
            <div className={'flex flex-col items-end '}>
                <CustomPrice
                    priceClassName={'text-xs'}
                    data={{price: assets * price!}}
                />
                <PercentNumber data={change!}/>
            </div>
        </div>
    );
};

export default HoldingCard
