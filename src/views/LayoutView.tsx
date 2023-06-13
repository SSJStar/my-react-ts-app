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
import {getDeviceList} from "src/api/api";

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

    getDeviceList({
        user_id: 10000014
    }).then((res:any) => {
        console.log("请求结束了\\n");
        console.log(res);
        if (res["code"] && res["code"] === "0") {
            // 登录成功
            alert("请求成功");
            // json字符串 -> map
            let userJson = JSON.parse(res["body"]);

            let device_id = userJson["device_id"]; //设备编号
            let device_type = userJson["device_type"]; //设备型号;
            alert(`设备编号:${device_id} 设备型号:${device_type}`);
        }
    });

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