import {lazy, Suspense} from 'react';
import {type RouteObject} from 'react-router-dom';
import ProtectedRoute from '@/routes/ProtectedRoute.tsx';
import {paths} from '@/routes/paths.ts';
import {NavLayout} from '@/layouts';
import {SuspenseLoading} from "@/panels/Components";
import CreateHoldingPage from "@/panels/user/pages/createHolding/CreateHolding.tsx";
import {EditHoldingPage} from "@/panels/user/pages/editHolding";

const Holdings = lazy(() => import("@/panels/user/pages/holdings/Holdings.tsx"));
const MarketPrice = lazy(() => import('@/panels/user/pages/MarketPrice/market-price.tsx'));
const Profile = lazy(() => import('@/panels/user/pages/profile.tsx'));
const Reminder = lazy(() => import('@/panels/user/pages/reminder.tsx'));
const SearchResults = lazy(() => import('@/panels/user/pages/SearchResults'));

export const userRoutes: RouteObject = {
    element: (
        <ProtectedRoute
            allowedRoles={['user']}
        />
    ),
    children: [
        {
            element: <NavLayout/>,
            children: [
                {
                    path: paths.user.profile,
                    element: (
                        <Suspense fallback={<SuspenseLoading/>}>
                            <Profile/>
                        </Suspense>
                    ),
                },
                {
                    path: paths.user.market_price,
                    element: (
                        <Suspense fallback={<SuspenseLoading/>}>
                            <MarketPrice/>
                        </Suspense>
                    ),
                },
                {
                    path: paths.user.reminder,
                    element: (
                        <Suspense fallback={<SuspenseLoading/>}>
                            <Reminder/>
                        </Suspense>
                    ),
                },
                {
                    path: paths.user.search_results,
                    element: (
                        <Suspense fallback={<SuspenseLoading/>}>
                            <SearchResults/>
                        </Suspense>
                    ),
                },
            ],
        },
        {
            element: <NavLayout
                headerStyle={'bg-white'}
            />,
            children: [
                {
                    path: paths.user.holdings,
                    element: (
                        <Suspense fallback={<SuspenseLoading/>}>
                            <Holdings/>
                        </Suspense>
                    ),
                },
            ],
        },
        {
            element: <NavLayout hasFloatMenu={false}/>,
            children: [
                {
                    path: paths.user.add_holding,
                    element: (
                        <Suspense fallback={<SuspenseLoading/>}>
                            <CreateHoldingPage/>
                        </Suspense>
                    ),
                },
                {
                    path: paths.user.edit_holding,
                    element: (
                        <Suspense fallback={<SuspenseLoading/>}>
                            <EditHoldingPage/>
                        </Suspense>
                    ),
                },
            ],
        }
    ],
};
