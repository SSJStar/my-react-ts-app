// import React from 'react';
import './App.css';
// import { LoginForm } from "./pages/LoginForm";
import { useRoutes } from "react-router-dom";
import myRouter from "src/router/routeConfig";

// import rt from "src/pages/home";



// const myRouter2:Array<RouteObject> = [
//     {
//         // 根目录
//         path:"/",
//         // @ts-ignore
//         element: rt,//lazy(()=>import("@/pages/home")),
//         children:[
//         ]
//     },
//     // 登陆
//     {
//         path:"login",
//         // @ts-ignore
//         element:rt,//lazy(() => import("@/pages/LoginForm")),
//     },
// ]

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

    // return (
    //     <div>
    //         <ul>
    //             <li><a href={"/detail"}>detail</a></li>
    //             <li><a href={"/list"}>list</a></li>
    //         </ul>
    //     </div>
    // )
    return useRoutes(myRouter)
}

export default App;
