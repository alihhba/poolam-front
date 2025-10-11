import InfoFrom from "@/panels/auth/pages/info/components/InfoFrom.tsx";

const InfoPage = () => {
    return (
        <div>
            <div className={'flex flex-col gap-1'}>
                <p className={'text-[16px] font-bold leading-6'}>
                    اطلاعات خود را وارد کنید
                </p>
                <p className={'text-[12px] text-text-200 font-normal leading-6'}>
                    برای تکمیل ثبت نام اطلاعات خود را وارد کنید.
                </p>
            </div>

            <div className={'mt-8'}>
                <InfoFrom/>
            </div>
        </div>
    );
};

export default InfoPage
