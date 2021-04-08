import Admin from "./pages/Admin";
import Home from "./pages/Home";
import {HOME_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHMOTKA_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import ShmotkaPage from "./pages/ShmotkaPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Register
    },
    {
        path: SHMOTKA_ROUTE + '/:id',
        Component: ShmotkaPage
    }
];