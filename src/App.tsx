// import React from 'react';
import './App.css';
// import { LoginForm } from "./pages/LoginForm";
import { useRoutes } from "react-router-dom";
import myRouter from "@/router/routeConfig";
import rt from "./pages/home";


// @ts-ignore
const myRouter2:Array<RouteObject> = [
    {
        // 根目录
        path:"/",
        // @ts-ignore
        element: rt,//lazy(()=>import("@/pages/home")),
        children:[
        ]
    },
    // 登陆
    {
        path:"login",
        // @ts-ignore
        element:rt,//lazy(() => import("@/pages/LoginForm")),
    },
]

function App() {
  // return (
  //     <div className="App">
  //         {/*加了header，北京变深色*/}
  //       <header className="App-header">
  //         <MyButton></MyButton>
  //       </header>
  //     </div>
  // );

    // const handleLogin = (name: string, password: string) => {
    //     alert(`User ${name} logged in with password ${password}`);
    //
    // };
    //
    // return (
    //     <div className="App">
    //         <LoginForm doLogin={handleLogin} />
    //     </div>
    // );

    return useRoutes(myRouter2)
}

export default App;
