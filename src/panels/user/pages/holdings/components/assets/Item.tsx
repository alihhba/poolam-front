import {CustomPrice, Icon} from "@/components";

interface Props {
    data: {
        price?: number;
        assets: number;
        icon?: string;
        nameFa?: string;
    }
}

const AssetsItem = ({
                        data
                    }: Props) => {
    const {
        assets,
        price,
        icon,
        nameFa
    } = data

    return (
        <div className={'flex items-center gap-1.5'}>
            <Icon
                name={icon!}
                className={'w-[30px] h-[30px]'}
            />
            <div className={'flex flex-col justify-between h-[30px]'}>
                <div className={'flex items-center gap-1'}>
                    <p className={'text-xs font-semibold'}>
                        {assets}
                    </p>
                    <p className={'text-xs font-semibold'}>
                        {nameFa}
                    </p>
                </div>
                <div className={'text-[10px] text-text-100 font-normal'}>
                    <CustomPrice
                        data={{
                            price: price,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AssetsItem
