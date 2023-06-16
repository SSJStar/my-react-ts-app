// declare global {
//     let themeBgColor = "#41527";
//     let navTitleColor = "123";
// }

// declare interface SSJWindow {
//      themeBgColor:string;
//      navTitleColor:string;
// }
// // export default global;
// export {}

// import React from "react";

declare interface Window {
     method1: Function;
     property1: string;

     themeBgColor:string; // 主题背景色

     navTitleColor:string; // 导航标题颜色

     listMenuData:Array<any>;// 垂直菜单 - 数据源，数据初始化在index.tsx

     baseUrl: string;// 请求URL头部
}

// declare enum StaticVar {
// declare enum StaticVar {
//      // 垂直菜单 数据源
// //      listMenuData = [
// //      {
// //           key: "1",
// //           path: "item?title=全站数据",
// //           icon: "BarChartOutlined",
// //           label: "全站数据",
// //      },
// //      {
// //           key: "2",
// //           path: "item?title=课程大厅",
// //           icon: "VideoCameraOutlined",
// //           label: "课程大厅",
// //      },
// //      {
// //           key: "3",
// //           path: "item?title=我的课程",
// //           icon: "UploadOutlined",
// //           label: "我的课程",
// //      },
// //      {
// //           key: "4",
// //           path: "item?title=直播课息",
// //           icon: "VideoCameraOutlined",
// //           label: "直播课",
// //      },
// //      {
// //           key: "5",
// //           path: "item?title=个人信息",
// //           icon: "UserOutlined",
// //           label: "个人信息",
// //      },
// //      {
// //           key: "6",
// //           path: "item?title=消息",
// //           icon: "SoundOutlined",
// //           label: "消息",
// //      },
// //      {
// //           key: "7",
// //           path: "item?title=管理中心",
// //           icon: "UploadOutlined",
// //           label: "管理中心",
// //           children: [
// //                {
// //                     key: "7-1",
// //                     path: "item2?title=课程管理",
// //                     label: "课程管理",
// //                },
// //                {
// //                     key: "7-2",
// //                     path: "item2?title=学生管理",
// //                     label: "学生管理",
// //                },
// //                {
// //                     key: "7-3",
// //                     path: "item2?title=厨艺管理",
// //                     label: "厨艺管理",
// //                     children: [
// //                          {
// //                               key: "7-3-1",
// //                               path: "item2?title=宫保鸡丁",
// //                               label: "宫保鸡丁",
// //                          },
// //                          {
// //                               key: "7-3-2",
// //                               path: "item2?title=红烧排骨",
// //                               label: "红烧排骨",
// //                          },
// //                          {
// //                               key: "7-3-3",
// //                               path: "item2?title=酸辣土豆丝",
// //                               label: "酸辣土豆丝",
// //                          },
// //                     ],
// //                },
// //           ],
// //      },
// //      {
// //           key: "8",
// //           path: "/login",
// //           icon: "QqOutlined",
// //           label: "退出登录",
// //      },
// // ]
// }