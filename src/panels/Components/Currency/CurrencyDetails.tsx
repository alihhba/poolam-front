import {Currency, PercentNumber, Star} from "@/panels/Components";
import {Button, CustomPrice, Icon} from "@/components";
import {DrawerClose} from "@/components/Drawer";
import {Chart} from "@/components/charts";
import type {CurrencyType} from "@/panels/Components/Currency/types.ts";

interface Props {
    item: CurrencyType
}

const CurrencyDetails = ({
                             item
                         }: Props) => {

    const sampleData = [
        {day: "شنبه", value: 15},
        {day: "یکشنبه", value: 14},
        {day: "دوشنبه", value: 12},
        {day: "سه‌شنبه", value: 10},
        {day: "چهارشنبه", value: 13},
        {day: "پنجشنبه", value: 16},
        {day: "جمعه", value: 18},
        {day: "شنبه", value: 15},

    ];

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


            <div className="pt-4 w-full h-full">
                <Chart
                    data={sampleData}
                    xAxisKey="day"
                    yAxisKey="value"
                    height={230}
                    color="#16a34a"
                />
            </div>
        </div>
    );
};

export default CurrencyDetails
