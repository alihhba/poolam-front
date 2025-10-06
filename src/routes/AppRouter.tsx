import {BrowserRouter, Navigate, useRoutes} from "react-router-dom";
import {publicRoutes} from "./publicRoutes";
import {userRoutes} from "./userRoutes";
import {adminRoutes} from "./adminRoutes";
import {authRoutes} from "@/routes/authRoutes.tsx";

function RoutesWrapper() {
    return useRoutes([
        publicRoutes,
        userRoutes,
        adminRoutes,
        authRoutes,
        {
            path: "*",
            element: <Navigate to="/market-price" replace/>
        }
    ])
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <RoutesWrapper/>
        </BrowserRouter>
    );
}
