import {BrowserRouter, useRoutes} from "react-router-dom";
import {publicRoutes} from "./publicRoutes";
import {userRoutes} from "./userRoutes";
import {adminRoutes} from "./adminRoutes";
import {NotFoundPage} from "@/panels/shared/pages";
import {authRoutes} from "@/routes/authRoutes.tsx";

function RoutesWrapper() {
    return useRoutes([
        publicRoutes,
        userRoutes,
        adminRoutes,
        authRoutes,
        {path: "*", element: <NotFoundPage/>},
    ]);
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <RoutesWrapper/>
        </BrowserRouter>
    );
}
