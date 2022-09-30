import React from "react";
import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop />
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },    
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
    
]