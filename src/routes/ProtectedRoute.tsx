// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { paths } from "@/routes/paths";

interface ProtectedRouteProps {
    allowedRoles?: Array<"user" | "admin">;
    redirectPath?: string;
}

export default function ProtectedRoute({
                                           allowedRoles,
                                           redirectPath = paths.auth.login,
                                       }: ProtectedRouteProps) {
    const { isAuth, role } = useAuthStore();

    if (!isAuth) {
        return <Navigate to={redirectPath} replace />;
    }

    if (allowedRoles && role && !allowedRoles.includes(role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
