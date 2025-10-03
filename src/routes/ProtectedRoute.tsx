import {Navigate, Outlet} from "react-router-dom";
import {paths} from "@/routes/paths.ts";

interface ProtectedRouteProps {
    isAuth: boolean;
    role?: "user" | "admin";
    allowedRoles?: Array<"user" | "admin">;
    redirectPath?: string;
}

export default function ProtectedRoute({
                                           isAuth,
                                           role,
                                           allowedRoles,
                                           redirectPath = paths.auth.login,
                                       }: ProtectedRouteProps) {
    if (!isAuth) {
        return <Navigate to={redirectPath} replace/>;
    }

    if (allowedRoles && role && !allowedRoles.includes(role)) {
        return <Navigate to="/" replace/>;
    }

    return <Outlet/>;
}
