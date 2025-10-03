import type {RouteObject} from "react-router-dom";
import {paths} from "@/routes/paths.ts";
import {AboutUsPage} from "@/panels/shared/pages";
import {NavLayout} from "@/layouts";

export const publicRoutes: RouteObject = {
    element: <NavLayout/>,
    children: [
        {
            path: paths.public.about,
            element: <AboutUsPage/>
        }
    ]
}
