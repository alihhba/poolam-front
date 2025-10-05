import type {CurrencyType} from "@/panels/Components/Currency/PrimaryList.tsx";
import {Currency, PercentNumber} from "@/panels/Components";
import {CustomPrice, Icon} from "@/components";
import {DrawerClose} from "@/components/Drawer";

interface Props {
    item: CurrencyType
}

const CurrencyDetails = ({
                             item
                         }: Props) => {

    return (
        <div className={'flex flex-col'}>

            <div className={'flex items-center justify-between'}>

                <div>
                    <Icon
                        name={'star'}
                        className={'text-black w-6 h-6'}
                    />
                </div>

                <DrawerClose>
                    <div
                        className={'flex items-center justify-center w-10 h-10 border overflow-hidden border-gray-400 rounded-[14px]'}>
                        <Icon
                            name={'close'}
                            className={'text-black w-4 h-4'}
                        />
                    </div>
                </DrawerClose>
            </div>


            <div className={'flex items-center justify-between w-full mt-6'}>
                <Currency.Info
                    item={item}
                />

                <div className={'flex flex-col items-end '}>
                    <CustomPrice
                        priceClassName={'text-xs'}
                        data={{price: item?.price}}
                    />
                    <PercentNumber data={item?.change}/>
                </div>

            </div>
        </div>
    );
};

export default CurrencyDetails
