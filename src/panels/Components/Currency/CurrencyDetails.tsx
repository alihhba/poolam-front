import type {CurrencyType} from "@/panels/Components/Currency/PrimaryList.tsx";
import {Currency, PercentNumber, Star} from "@/panels/Components";
import {Button, CustomPrice, Icon} from "@/components";
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
                    <Star/>
                </div>

                <DrawerClose>
                    <Button
                        size={'square'}
                    >
                        <Icon
                            name={'close'}
                            className={'text-black w-4 h-4'}
                        />
                    </Button>
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
