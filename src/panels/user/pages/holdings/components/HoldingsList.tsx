import type {HoldingsItem} from "@/panels/user/pages/holdings/types.ts";
import {NotFound} from "@/panels/Components";
import {AddHoldingButton, HoldingCard} from "@/panels/user/pages/holdings/components/index.ts";
import {CurrencyItems, holdingsItems} from "@/data/FakeData.ts";

const HoldingsList = () => {
    const formatedHoldings = holdingsItems.map((item) => {
        const currency = CurrencyItems.find(it => it?.slug === item?.slug)
        return {
            ...item,
            currency: currency
        }
    })


    if (!holdingsItems) {
        return (
            <div className={'flex flex-col items-center justify-center mt-28 gap-7'}>
                <NotFound
                    title={'اولین دارایی خود را اضافه کنید.'}
                    icon={'wallet-money'}
                    iconClass={'w-[83px]'}
                />
                <AddHoldingButton/>
            </div>
        )
    }

    return (
        <div>

            <div className={'flex items-center justify-between w-full '}>
                <div className="flex grow items-start gap-1.5">
                    <div className="w-[3px] self-stretch rounded-full bg-primary-100"/>
                    <div className="flex flex-col items-start gap-1.5">
                        <p className="text-[12px] font-semibold">دارایی شما</p>
                        <p className="text-[10px]">به روز رسانی 2 دقیقه پیش</p>
                    </div>
                </div>


                <div>
                    <AddHoldingButton/>
                </div>
            </div>

            {/*list*/}
            <div className={'flex flex-col gap-3 mt-7'}>
                {formatedHoldings.map((holding: HoldingsItem) => {
                    if (!holding) return null;

                    return (
                        <HoldingCard
                            key={holding.id}
                            data={holding}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default HoldingsList
