import {cn} from "@/lib/utils.ts";
import {Icon} from "@/components";
import {MainLayout} from "@/layouts";
import DateFormater from "@/components/DateFormater";

const MainHeader = () => {
    return (
        <MainLayout className={cn(
            'h-20 flex items-center justify-between'
        )}>
            {/*logo*/}
            <Icon
                name={'logo'}
                className={cn(
                    'h-10 w-10'
                )}
            />

            <div className={cn(
                'flex items-center gap-2'
            )}>
                {/*date*/}
                <DateFormater
                    className={'text-sm font-semibold'}
                    dateInput={new Date().toISOString()}
                    formatType={'fullDate'}
                />

                {/*dot animate*/}
                <div className="circle pulse blue"></div>
            </div>
        </MainLayout>
    );
};

export default MainHeader
