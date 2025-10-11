import {LoginForm} from "@/panels/auth/pages/login/components";

const LoginPage = () => {
    return (
        <div>
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
        </div>
    );
};

export default LoginPage
