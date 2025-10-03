import {CurrencyCategory, CurrencyFilter, SearchBox} from "@/panels/Components";
import {Section} from "@/layouts";
import {useQuery} from "@/hooks";

const MarketPrice = () => {
    const {get} = useQuery()

    return (
        <div className={'w-full flex flex-col'}>
            {/*Search box*/}
            <SearchBox/>

            {/*currency Category*/}
            {!get('q') ? (
                <div className={'mt-5'}>
                    <CurrencyCategory.List/>
                </div>
            ) : null}

            {/*currency filter*/}
            <Section className={'mt-[18px]'}>
                <CurrencyFilter.List/>
            </Section>
        </div>
    );
};

export default MarketPrice
