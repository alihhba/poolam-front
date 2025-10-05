import {Outlet} from "react-router-dom";
import {MainHeader, MainLayout} from "@/layouts/index.ts";
import {FloatMenu} from "@/layouts/components";
import {Image} from "@/components";

const NavLayout = () => {
    return (
        <div className={' flex flex-col min-h-[100dvh] w-full grow bg-background-100'}>
            {/*header*/}
            <div className={'bg-background-100 sticky top-0 left-0 right-0 z-20 '}>
                <MainHeader/>
            </div>

            {/*main*/}
            <div className={'flex flex-col h-full grow pt-2.5 pb-44'}>
                <MainLayout >
                    <Outlet/>

                </MainLayout>
            </div>

            {/*float menu*/}
            <div className={'fixed z-10 bottom-12 left-0 right-0'}>
                <FloatMenu/>
            </div>

            {/*shadow*/}
            <div className={'fixed -bottom-[250px]  start-0 end-0'}>
                <Image
                src={'shadow_1'}
                alt={'shadow'}
                />
            </div>
        </div>
    );
};

export default NavLayout
