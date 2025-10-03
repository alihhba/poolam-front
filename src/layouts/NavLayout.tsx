import {Outlet} from "react-router-dom";
import {MainHeader, MainLayout} from "@/layouts/index.ts";
import {FloatMenu} from "@/layouts/components";

const NavLayout = () => {
    return (
        <div className={' flex flex-col h-[100dvh] w-full grow bg-background-100'}>
            {/*header*/}
            <div className={'bg-background-100 sticky top-0 left-0 right-0 z-20 '}>
                <MainHeader/>
            </div>

            {/*main*/}
            <div className={'flex flex-col h-full grow pt-2.5'}>
                <MainLayout >
                    <Outlet/>
                </MainLayout>
            </div>

            {/*float menu*/}
            <div className={'absolute bottom-12 left-0 right-0'}>
                <FloatMenu/>
            </div>
        </div>
    );
};

export default NavLayout
