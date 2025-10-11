import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, CustomPrice, Form, Icon, Image} from "@/components";
import {SelectDrawer} from "@/components/form/SelectDrawer.tsx";
import type {CurrencyType} from "@/panels/Components/Currency/PrimaryList.tsx";
import {Currency, PercentNumber} from "@/panels/Components";
import {cn} from "@/lib/utils.ts";
import {TextSimpleInput} from "@/components/form/TextSimpleInput.tsx";
import {useNavigate} from "react-router-dom";
import {paths} from "@/routes/paths.ts";

const AddHoldingForm = () => {
    const navigate = useNavigate()

    const schema = z.object({
        currency: z.string().min(1, {message: 'error'}),
        count: z.string().min(1, {message: 'error'}),
    });
    type Schema = z.infer<typeof schema>;

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            currency: "",
            count: ''
        },
    });


    function onSubmit(values: Schema) {
        navigate(paths.user.holdings, {replace: true})
        console.log(values)
    }

    const CurrencyItems: CurrencyType[] = [
        {
            id: '1',
            icon: 'bitcoin-(btc)',
            name: 'BTC',
            nameFa: 'بیت ‌کوین',
            price: 10000000000,
            change: 0.1
        },
        {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        }, {
            id: '2',
            icon: 'tether-(usdt)',
            name: 'USDT',
            nameFa: 'تتر',
            price: 1284793,
            change: -0.1
        },
    ]

    return (

        <Form<Schema> form={form} onSubmit={onSubmit}>
            <div className={'flex flex-col gap-4'}>
                <SelectDrawer
                    name="currency"
                    options={CurrencyItems}
                    searchable
                    searchOn={["name", "nameFa"]}
                    trigger={({data}) => {
                        return (
                            <div
                                className={cn(
                                    data?.id ? '' : 'text-gray-500'
                                )}
                            >{data?.nameFa ?? 'نوع دارایی را انتخاب کنید'}</div>
                        )
                    }}
                    renderItem={(opt) => (
                        <div
                            className={'flex items-center justify-between h-[58px] px-3 rounded-[20px] bg-background-200'}>
                            <Currency.Info
                                item={opt as CurrencyType}
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
                                    data={{price: opt?.price}}
                                />
                                <PercentNumber data={opt?.change}/>
                            </div>
                        </div>
                    )}
                />

                <TextSimpleInput
                    className={'bg-transparent'}
                    name="count"
                    placeholder={'تعداد'}
                />
            </div>

            <div className={'mt-4 '}>
                <Button
                    endItem={<Icon
                        name={'add-square'}
                        className={'w-5 h-5'}
                    />}
                    type={'submit'}
                    className={'w-full gap-1'}
                >
                    ثبت دارایی
                </Button>
            </div>
        </Form>
    )
        ;
};

export default AddHoldingForm
