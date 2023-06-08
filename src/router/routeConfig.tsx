/* // @ts-nocheck */
import {RouteObject} from "react-router-dom";
import { lazy } from "react";
import React from "react";


const  withLoadingComponent = (com:JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>{com}</React.Suspense>
);

// @ts-ignore
const LoginView = lazy(() => import("src/pages/LoginForm")); //
const FirstItem = lazy(() => import("src/pages/FirstLevelView"));  //一级菜单列表
const SecondItem = lazy(() => import("src/pages/SecondLevelView"));  //二级菜单列表
const Detail = lazy(() => import("src/pages/Detail")); //详情
const LayoutView = lazy(() => import("src/views/LayoutView")); //布局

const Home = lazy(() => import("src/views/others/Home")); //测试页
const myRouter: Array<RouteObject> = [
    {
        // 根目录
        path: "/",
        // @ts-ignore
        element: <LayoutView />,
        children: [
            {
                path: "item",
                // @ts-ignore
                element: withLoadingComponent(<FirstItem />),
            },
            {
                path: "/item2",
                // @ts-ignore
                element: withLoadingComponent(<SecondItem />),
            },
        ]
    },
    {
        path: "/list",
        // @ts-ignore
        element: withLoadingComponent(<FirstItem/>),
    },
    {
        path: "/detail",
        // @ts-ignore
        element: withLoadingComponent(<Detail/>),
    },
    {// home
        path: "/home",
        // @ts-ignore
        element: withLoadingComponent(<Home/>),
    },
    // 登陆
    {
        path: "/login",
        // @ts-ignore
        element: withLoadingComponent(<LoginView/>),
    },
    {
        path: "/item",
        // @ts-ignore
        element: withLoadingComponent(<FirstItem />),
    },

];
export default myRouter












// import React, { lazy } from "react";
// import { RouteObject } from "react-router-dom";
//
// import Index from "src/views/Index";
// import item from "@/pages/item";
// // react懒加载
// const Login = lazy(() => import("src/views/Login"));
// const Home = lazy(() => import("src/views/Home"));
// const Personal = lazy(() => import("src/views/Personal"));
// const AllData = lazy(() => import("src/views/AllData"));
//
// const withLoadingComponent = (comp: JSX.Element) => (
//     <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
// );
//
// const routes: Array<RouteObject> = [
//     {
//         path: "/",
//         element: withLoadingComponent(<Home />),//<Index />,
//     },
//     {
//         path: "/login",
//         element: withLoadingComponent(<Login />),
//     },
//     {
//         path: "/*",  //父子路由
//         element: withLoadingComponent(<Home />),
//         children: [
//             {
//                 index: true,
//                 path: "home",
//                 element: <AllData />,
//             },
//             {
//                 path: "personal",
//                 element: <Personal />,
//             },
//         ],
//     },
// ];
// export default routes;
