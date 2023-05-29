/* // @ts-nocheck */
import {RouteObject} from "react-router-dom";
import { lazy } from "react";

// import rt from "@/pages/home"
// @ts-ignore
const loginView = lazy(() => import("src/pages/LoginForm"));
const myRouter:Array<RouteObject> = [
    {
        // 根目录
        path:"/",
        // @ts-ignore
        element: lazy(()=>import("src/pages/home")),
        children:[
            {
                path:"/list",
                // @ts-ignore
                element:lazy(() => import("src/pages/item")),
            },
            {
                path:"detail",
                // @ts-ignore
                element:lazy(() => import("src/pages/detail")),
            }
        ]
    },
    // 登陆
    {
        path:"login",
        // @ts-ignore
        element:loginView,
    },
]
export default myRouter
