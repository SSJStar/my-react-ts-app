// @ts-ignore

// import {ChangeEvent, createContext, lazy, useState} from "react";

/**
 *
 <template>
 <div class="head-nav">
 <div style="position: absolute; text-align: center">
 <label>冷媒后台管理系统</label>
 </div>

 <!--  头像 + 昵称  -->
 <div class="userInfoDiv" id="head-div" ref="userInfoDivRef">
 <!--      &lt;!&ndash;  头像  &ndash;&gt;-->
 <!--      <img-->
 <!--        src="https://randomuser.me/api/portraits/men/33.jpg"-->
 <!--        alt=""-->
 <!--        :onmouseenter="mouthIntoHead"-->
 <!--        :onmouseleave="mouthLeaveHead"-->
 <!--      />-->
 <!--      &lt;!&ndash;  昵称  &ndash;&gt;-->
 <!--      <label>-->
 <!--        {{ nickNameVal }}-->
 <!--      </label>-->
 <!--   假数据   -->
 <label style="font-size: 16px;margin-top: 20px;height: 24px;">欢迎您，小王（管理员）</label>
 </div>

 <!-- box列表    flex-shrink: 0-->
 <div
 class="boxDiv"
 v-show="boxShow"
 ref="boxRef"
 :onmouseenter="mouthIntoBox"
 :onmouseleave="mouthLeaveBox"
 >
 <!--   个人信息   -->
 <label @click="userInfoClick"> 个人信息 </label>
 <!--   退出登录   -->
 <label @click="unLoginClick" style="margin-top: 10px"> 退出登录 </label>
 </div>
 </div>
 </template>

 * */



import HeadNav from "src/views/HeadNav/HeadNav"
import ListMenu from "src/views/listMenu/ListMenu";
import React from "react";
import {getDeviceList, testRquest} from "src/api/api";
import { Login} from "src/requestAPI/api"
import axios from "axios";

export default function LayoutView(){

    // 垂直菜单 数据源
    // const listMenuData:Array<any> = [
    //     {
    //         key: "1",
    //         path: "item?title=全站数据",
    //         icon: <BarChartOutlined />,
    //         label: "全站数据",
    //     },
    //     {
    //         key: "2",
    //         path: "item?title=课程大厅",
    //         icon: <VideoCameraOutlined />,
    //         label: "课程大厅",
    //     },
    //     {
    //         key: "3",
    //         path: "item?title=我的课程",
    //         icon: <UploadOutlined />,
    //         label: "我的课程",
    //     },
    //     {
    //         key: "4",
    //         path: "item?title=直播课息",
    //         icon: <VideoCameraOutlined />,
    //         label: "直播课",
    //     },
    //     {
    //         key: "5",
    //         path: "item?title=个人信息",
    //         icon: <UserOutlined />,
    //         label: "个人信息",
    //     },
    //     {
    //         key: "6",
    //         path: "item?title=消息",
    //         icon: <SoundOutlined />,
    //         label: "消息",
    //     },
    //     {
    //         key: "7",
    //         path: "item?title=管理中心",
    //         icon: <UploadOutlined />,
    //         label: "管理中心",
    //         children: [
    //             {
    //                 key: "7-1",
    //                 path: "item2?title=课程管理",
    //                 label: "课程管理",
    //             },
    //             {
    //                 key: "7-2",
    //                 path: "item2?title=学生管理",
    //                 label: "学生管理",
    //             },
    //             {
    //                 key: "7-3",
    //                 path: "item2?title=厨艺管理",
    //                 label: "厨艺管理",
    //                 children: [
    //                     {
    //                         key: "7-3-1",
    //                         path: "item2?title=宫保鸡丁",
    //                         label: "宫保鸡丁",
    //                     },
    //                     {
    //                         key: "7-3-2",
    //                         path: "item2?title=红烧排骨",
    //                         label: "红烧排骨",
    //                     },
    //                     {
    //                         key: "7-3-3",
    //                         path: "item2?title=酸辣土豆丝",
    //                         label: "酸辣土豆丝",
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         key: "8",
    //         path: "/login",
    //         icon: <QqOutlined />,
    //         label: "退出登录",
    //     },
    // ]
    const listMenuData:Array<any> = window.listMenuData;


    // const Axios = axios.create({
    //     baseURL: "/api", //'http://192.168.50.18:9091',"http://hvac.365env.com/rft",
    //     // baseURL: "http://hvac.365env.com",
    //     timeout: 3000,
    //     /*也可以不设置Content-Type，影响是在你发送请求时
    //       Vue会先发送OPTIONS包探测路由是否存在，需要后端也做设置响应OPTIONS
    //       方法，否则会报跨域错误；我这里用的Beego2，路由里不响应OPTIONS方法，
    //       所以我在这块设置Content-Type*/
    //     headers: {
    //         // "Content-Type": "application/x-www-form-urlencoded",
    //         "Access-Control-Allow-Origin":"http://hvac.365env.com/rft/getNewDevices",
    //     },
    //     /*这个配置很重要，允许axios携带用户Cookie到后端，不设置这个的话
    //       Set-Cookie是无效的,除此之外,Chrome默认开启了SameSite检查，如果
    //       后端不主动设置SameSite = none,Set-Cookie是无效的。详情请文章末尾
    //       参考阮老师的SameSite讲解*/
    //     withCredentials: true,
    // });
    // Axios.get('http://hvac.365env.com/rft/getNewDevices?user_id=10000014')
    //     .then(res => {
    //         console.log("请求结束了11\\n");
    //         console.log(res.data);
    //     });

    // axios.get('https://mockapi.eolink.com/XCtnfMJ85f813d3a7847f14c01592a467dbb707990534d0/user/userInfo?responseId=1232744')
    //     .then(res => {
    //         console.log("返回数据1：")
    //         console.log(res.data)
    //     });
    //
    // axios.get('http://hvac.365env.com/rft/getNewDevices?user_id=10000014')
    //     .then(res => {
    //         console.log("返回数据2：")
    //         console.log(res.data)
    //     });



    // Login({
    //     user_id: 10000014
    // }).then(res => {
    //     console.log("请求结束了\\n");
    //     console.log(res);
    // }).catch(error=>{
    //     console.log("请求失败\\n");
    //     console.log(error);
    // })

    // getDeviceList({
    //     user_id: 10000014
    // }).then((res:any) => {
    //     console.log("请求结束了\\n");
    //     console.log(res);
    //     if (res["code"] && res["code"] === "0") {
    //         // 登录成功
    //         alert("请求成功");
    //         // json字符串 -> map
    //         let userJson = JSON.parse(res["body"]);
    //
    //         let device_id = userJson["device_id"]; //设备编号
    //         let device_type = userJson["device_type"]; //设备型号;
    //         alert(`设备编号:${device_id} 设备型号:${device_type}`);
    //     }
    // });

    testRquest({
        responseId:"1232744"
    }).then((res:any)=>{
        console.log("请求结束了1111\\n");
        console.log(res);
    })

    return (
        <div>
            <HeadNav></HeadNav>
            <ListMenu foldOn_width={'100px'} foldOff_width={'100px'} listJson={listMenuData}></ListMenu>
        </div>
    );
}



// /** 组件ComponentB */
//
// import {useStorageState} from "src/component/StorageState";
//
// /** 组件ComponentB，参数接口 */
// interface ChildViewParamsPro {
//     title: string,
// }
//
//
// const ComponentB = (pro:ChildViewParamsPro) => {
//     const [data,setDataState] = useStorageState("da","0");
//     console.log("read data is " + data);
//     return (
//         <div style={{width:'300px',backgroundColor:"cadetblue",padding: '15px'}}>
//             <h2>我是B组件</h2>
//             <ul>
//                 <li>
//                     title: {pro.title}
//                 </li>
//                 <li>
//                     {"读取data：data"}
//                 </li>
//             </ul>
//
//             <input onChange={(e)=>{
//                     setDataState(e.target.value);
//                 }
//             }/>  <br /><br />
//         </div>
//     )
// }
//
// export default ComponentB;