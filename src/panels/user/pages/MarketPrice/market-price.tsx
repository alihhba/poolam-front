import {Currency, CurrencyCategory, CurrencyFilter, SearchBox} from "@/panels/Components";
import {Section} from "@/layouts";
import {useQuery} from "@/hooks";

const MarketPrice = () => {
    const {get} = useQuery()

    return (
        <div className={'w-full flex flex-col'}>
            {/*Search box*/}
            <div className={'pb-2'}>
                <SearchBox/>
            </div>

            {/*currency Category*/}
            {!get('q') ? (
                <div className={'mt-5'}>
                    <CurrencyCategory.List/>
                </div>
            ) : null}

            {/*currency filter*/}
            <Section className={'pt-[18px] pb-5 bg-background-100 sticky top-[80px] z-20'}>
                <CurrencyFilter.List/>
            </Section>


            {/*currency list*/}
            <div className={''}>
                <Currency.PrimaryList/>
            </div>
        </div>
    );
};

export default MarketPrice
