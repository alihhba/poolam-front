import type {RouteObject} from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute.tsx";
import {paths} from "@/routes/paths.ts";
import {AdminDashboardPage} from "@/panels/admin/pages";
import {NavLayout} from "@/layouts";

export const adminRoutes: RouteObject = {
    element: (
        <ProtectedRoute
            allowedRoles={['admin']}
        />
    ),
    children: [
        {
            element: <NavLayout/>,
            children: [
                {
                    path: paths.admin.dashboard,
                    element: <AdminDashboardPage/>
                }
            ]
        }
    ]
}
