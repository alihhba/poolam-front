import {Outlet, type RouteObject} from "react-router-dom";
import {paths} from "@/routes/paths.ts";
import {LoginPage} from "@/panels/auth/pages";
import InfoPage from "@/panels/auth/pages/info/Info.tsx";
import OtpPage from "@/panels/auth/pages/otp/Otp.tsx";

export const authRoutes: RouteObject = {
    element: (
        <div className={'w-full h-[100dvh]'}>
            <Outlet/>
        </div>
    ),
    children: [
        {
            path: paths.auth.login,
            element: <LoginPage/>
        },
        {
            path: paths.auth.otp,
            element: <OtpPage/>
        },
        {
            path: paths.auth.info,
            element: <InfoPage/>
        }
    ]
}
