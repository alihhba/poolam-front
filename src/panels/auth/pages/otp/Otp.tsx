import {usePhoneStore} from "@/store/usePhoneStore.ts";
import OtpForm from "@/panels/auth/pages/otp/components/OtpForm.tsx";

const OtpPage = () => {
    const phone = usePhoneStore(state => state.phone);

    return (
        <div>
            <div className={'flex flex-col gap-1'}>
                <p className={'text-[16px] font-bold leading-6'}>
                    کد تایید را وارد کنید
                </p>
                <p className={'text-[12px] text-text-200 font-normal leading-6'}>
                    کد فعال‌سازی به شماره {phone} ارسال شد.
                </p>
            </div>

            <div className={'mt-8'}>
                <OtpForm/>
            </div>
        </div>
    );
};

export default OtpPage
