// currency item with the info , chart , price

import type {CurrencyType} from "@/panels/Components/Currency/PrimaryList.tsx";
import {cn} from "@/lib/utils.ts";
import {CustomPrice, Drawer, Image} from "@/components";
import {Currency, PercentNumber} from "@/panels/Components";
import {DrawerContent, DrawerTrigger} from "@/components/Drawer";

interface Props {
    item: CurrencyType
}

const CurrencyPrimaryItem = ({
                                 item
                             }: Props) => {
    return (
        <Drawer
        >
            <DrawerTrigger>
                <div className={cn(
                    'w-full h-[58px] bg-light-100 flex justify-between items-center px-[13px] rounded-[20px]'
                )}>
                    <Currency.Info
                        item={item}
                    />

                    <div>
                        <Image
                            src={'example_chart'}
                            alt={'chart'}
                        />
                    </div>

                    <div className={'flex flex-col items-end '}>
                        <CustomPrice
                            priceClassName={'text-xs'}
                            data={{price: item?.price}}
                        />
                        <PercentNumber data={item?.change}/>
                    </div>
                </div>
            </DrawerTrigger>
            <DrawerContent className={'bg-white  rounded-t-full'}>
                <Currency.Details
                    item={item}
                />
            </DrawerContent>
        </Drawer>
    );
};

export default CurrencyPrimaryItem
