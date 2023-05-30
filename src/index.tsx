
/**【方式1】 */
// 这种方法的创建，相当于引入了App组件
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter><App /></BrowserRouter>

  </React.StrictMode>
);
// 这句会在浏览器控制台，打印一些警告
// reportWebVitals(console.warn);

/**【方式2】 */
// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import reportWebVitals from './reportWebVitals';
// import MyButton from "./MyButton";
// // 直接在这里创建App组件
// const App: React.FunctionComponent = () => {
//     // return <h1>My React App!</h1>;
//     return <MyButton />;
// };
//  * ReactDOM.render
//  *  参数1：组件
//  *  参数2：哪个节点
//  *  作用：将参数1这个组件内容，以hmtl的形式追加到参数2节点内容的最后
//  *  举个例子：以上述App组件来说，假设参数2节点展示的是一段文字，
//  *          那么实际效果是，一段文字的后面会多处一行"My React App!"
//  * */
// ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
// reportWebVitals(console.warn);