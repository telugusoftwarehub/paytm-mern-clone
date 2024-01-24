
import LandingPage from '../pages/landing-page';
import BusinessLandingPage from '../pages/business-page';
import ErrorPage from '../pages/error-page';
import DashBoardPage from '../pages/dashboard-page';
import ProductDetailsPage from '../pages/productdetail-page';

export const paytm_routes = [
    {
        path: "/",
        component: <LandingPage />
    },
    {
        path: "/business",
        component: <BusinessLandingPage />
    },
    {
        path: "/payment-gateway",
        component: <ErrorPage />
    },
    {
        path: "/dashboard",
        component: <DashBoardPage />
    },
    {
        path: "/details/:id",
        component: <ProductDetailsPage />
    }
]