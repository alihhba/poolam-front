import {Outlet, type RouteObject} from "react-router-dom";
import {paths} from "@/routes/paths.ts";
import {LoginPage} from "@/panels/auth/pages";
import {MainLayout} from "@/layouts";

export const authRoutes: RouteObject = {
    element: (
        <MainLayout>
            <Outlet/>
        </MainLayout>
    ),
    children: [
        {
            path:
            paths.auth.login,
            element: <LoginPage/>
        }
    ]
}
