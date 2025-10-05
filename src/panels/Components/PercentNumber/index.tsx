import {cn} from "@/lib/utils.ts";
import {Icon} from "@/components";

interface Props {
    data: number
}

const PercentNumber = ({
                           data
                       }: Props) => {
    return (
        <div className={cn(
            'flex items-center text-[12px] -me-1',
            data >= 0 ? 'text-green-100' : 'text-red-100'
        )}>
            <p>% {Math.abs(data)}</p>
            <Icon name={'arrow'} className={cn(
                'w-4 h-4',
                data >= 0 ? 'rotate-180' : ''
            )}/>
        </div>
    );
};

export default PercentNumber
