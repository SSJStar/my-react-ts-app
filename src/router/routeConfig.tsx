/* // @ts-nocheck */
import {RouteObject} from "react-router-dom";
// import {lazy} from "react";

import rt from "@/pages/home"
const myRouter:Array<RouteObject> = [
    {
        // 根目录
        path:"/",
        // @ts-ignore
        element: rt,//lazy(()=>import("@/pages/home")),
        children:[
            // {
            //     path:"list",
            //     // @ts-ignore
            //     element:lazy(() => import("@/pages/item")),
            // },
            // {
            //     path:"detail",
            //     // @ts-ignore
            //     element:lazy(() => import("@/pages/detail")),
            // }
        ]
    },
    // 登陆
    {
        path:"login",
        // @ts-ignore
        element:rt,//lazy(() => import("@/pages/LoginForm")),
    },
]
export default myRouter
