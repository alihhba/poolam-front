import {images} from "@/constants/images.ts";
import {DrawerBottomLayout} from "@/panels/auth/pages/login/layout";
import {LoginForm} from "@/panels/auth/pages/login/components";
import LottieIcon from "@/components/LottieIcon";

const LoginPage = () => {
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
                            ورود یا ثبت‌نام
                        </p>
                        <p className={'text-[12px] text-text-200 font-normal leading-6'}>
                            برای ادامه شماره موبایل خود را وارد کنید.
                        </p>
                    </div>

                    <div className={'mt-8'}>
                        <LoginForm/>
                    </div>
                </DrawerBottomLayout>
            </div>
        </div>
    );
};

export default LoginPage
