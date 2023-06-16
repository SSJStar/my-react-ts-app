/* // @ts-nocheck */
import {RouteObject} from "react-router-dom";
import { lazy } from "react";
import React from "react";

const  withLoadingComponent = (com:JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>{com}</React.Suspense>
);

// @ts-ignore
const LoginView = lazy(() => import("src/pages/LoginForm")); //
const FirstItem = lazy(() => import("src/views/FirstLevelView"));  //一级菜单列表
const SecondItem = lazy(() => import("src/views/SecondLevelView"));  //二级菜单列表
const Detail = lazy(() => import("src/pages/Detail")); //详情
const LayoutView = lazy(() => import("src/views/LayoutView")); //布局

// const ComponentA = lazy(() =>  import ("src/views/test/ComponentA"));

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
