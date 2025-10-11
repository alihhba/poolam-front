import {images} from "@/constants/images.ts";
import LottieIcon from "@/components/LottieIcon";
import {usePhoneStore} from "@/store/usePhoneStore.ts";
import {DrawerBottomLayout} from "@/panels/auth/pages/layout";
import OtpForm from "@/panels/auth/pages/otp/components/OtpForm.tsx";

const OtpPage = () => {
    const phone = usePhoneStore(state => state.phone);

    return (
        <div
            style={{
                backgroundImage: `url(${images.login_bg})`,
                backgroundRepeat: 'no-repeat',
                objectFit: 'fill',
                backgroundPosition: 'top center',
                backgroundSize: '102%'
            }}
            className={'w-full relative h-[100dvh] bg-gray-500'}
        >
            <div className={'absolute w-full flex items-center justify-center top-52 end-0 start-0  z-10'}>
                <LottieIcon/>
            </div>

            <div>
                <DrawerBottomLayout>
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
                </DrawerBottomLayout>
            </div>
        </div>
    );
};

export default OtpPage
