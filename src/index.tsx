
/**【方式1】 */
// 这种方法的创建，相当于引入了App组件
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Icon from "src/component/Icon";


// 赋值
window["method1"] = ()=>{};
window["property1"] = "333";
window.themeBgColor = "#41527";
window.navTitleColor = "white";

// TODO: 初始化是window.listMenuData，并对icon属性组件化
window.listMenuData = [
    {
        key: "1",
        path: "item?title=全站数据",
        icon: "BarChartOutlined",// <Icon name={"BarChartOutlined"}/>
        label: "全站数据",
    },
    {
        key: "2",
        path: "item?title=课程大厅",
        icon: "VideoCameraOutlined",
        label: "课程大厅",
    },
    {
        key: "3",
        path: "item?title=我的课程",
        icon: "UploadOutlined",
        label: "我的课程",
    },
    {
        key: "4",
        path: "item?title=直播课息",
        icon: "VideoCameraOutlined",
        label: "直播课",
    },
    {
        key: "5",
        path: "item?title=个人信息",
        icon: "UserOutlined",
        label: "个人信息",
    },
    {
        key: "6",
        path: "item?title=消息",
        icon: "SoundOutlined",
        label: "消息",
    },
    {
        key: "7",
        path: "item?title=管理中心",
        icon: "UploadOutlined",
        label: "管理中心",
        children: [
            {
                key: "7-1",
                path: "item2?title=课程管理",
                label: "课程管理",
            },
            {
                key: "7-2",
                path: "item2?title=学生管理",
                label: "学生管理",
            },
            {
                key: "7-3",
                path: "item2?title=厨艺管理",
                label: "厨艺管理",
                children: [
                    {
                        key: "7-3-1",
                        path: "item2?title=宫保鸡丁",
                        label: "宫保鸡丁",
                    },
                    {
                        key: "7-3-2",
                        path: "item2?title=红烧排骨",
                        label: "红烧排骨",
                    },
                    {
                        key: "7-3-3",
                        path: "item2?title=酸辣土豆丝",
                        label: "酸辣土豆丝",
                    },
                ],
            },
        ],
    },
    {
        key: "8",
        path: "/login",
        icon: "QqOutlined",
        label: "退出登录",
    },
]
window.listMenuData.forEach((value)=>{
    value.icon = <Icon name={value.icon}/>
});

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