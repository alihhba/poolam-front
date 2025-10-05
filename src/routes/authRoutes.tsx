import {Outlet, type RouteObject} from "react-router-dom";
import {paths} from "@/routes/paths.ts";
import {LoginPage} from "@/panels/auth/pages";

export const authRoutes: RouteObject = {
    element: (
        <div className={'w-full h-[100dvh]'}>
            <Outlet/>
        </div>
    ),
    children: [
        {
            path:
            paths.auth.login,
            element: <LoginPage/>
        }
    ]
}
