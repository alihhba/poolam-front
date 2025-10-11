import {HoldingCard, HoldingsList} from "@/panels/user/pages/holdings/components";
import {Section} from "@/layouts";

const Holdings = () => {


    return (
        <div className={'flex flex-col'}>
            <Section className={'p-4 rounded-b-[20px] bg-white'}>
                <HoldingCard/>
            </Section>

            <div className={'mt-[22px]'}>
                <HoldingsList/>
            </div>
        </div>
    );
};

export default Holdings
