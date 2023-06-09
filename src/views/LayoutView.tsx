// @ts-ignore

import {ChangeEvent, useState} from "react";

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

// import HeadNav from "src/views/HeadNav/HeadNav"
// import ListMenu from "src/views/listMenu/ListMenu";
// import {
//     BarChartOutlined,
//     QqOutlined,
//     SoundOutlined,
//     UploadOutlined,
//     UserOutlined,
//     VideoCameraOutlined
// } from "@ant-design/icons";
// import React from "react";
// export default function LayoutView(){
//
//     // 垂直菜单 数据源
//     const listMenuData:Array<any> = [
//         {
//             key: "1",
//             path: "item?title=全站数据",
//             icon: <BarChartOutlined />,
//             label: "全站数据",
//         },
//         {
//             key: "2",
//             path: "item?title=课程大厅",
//             icon: <VideoCameraOutlined />,
//             label: "课程大厅",
//         },
//         {
//             key: "3",
//             path: "item?title=我的课程",
//             icon: <UploadOutlined />,
//             label: "我的课程",
//         },
//         {
//             key: "4",
//             path: "item?title=直播课息",
//             icon: <VideoCameraOutlined />,
//             label: "直播课",
//         },
//         {
//             key: "5",
//             path: "item?title=个人信息",
//             icon: <UserOutlined />,
//             label: "个人信息",
//         },
//         {
//             key: "6",
//             path: "item?title=消息",
//             icon: <SoundOutlined />,
//             label: "消息",
//         },
//         {
//             key: "7",
//             path: "item?title=管理中心",
//             icon: <UploadOutlined />,
//             label: "管理中心",
//             children: [
//                 {
//                     key: "7-1",
//                     path: "item2?title=课程管理",
//                     label: "课程管理",
//                 },
//                 {
//                     key: "7-2",
//                     path: "item2?title=学生管理",
//                     label: "学生管理",
//                 },
//                 {
//                     key: "7-3",
//                     path: "item2?title=厨艺管理",
//                     label: "厨艺管理",
//                     children: [
//                         {
//                             key: "7-3-1",
//                             path: "item2?title=宫保鸡丁",
//                             label: "宫保鸡丁",
//                         },
//                         {
//                             key: "7-3-2",
//                             path: "item2?title=红烧排骨",
//                             label: "红烧排骨",
//                         },
//                         {
//                             key: "7-3-3",
//                             path: "item2?title=酸辣土豆丝",
//                             label: "酸辣土豆丝",
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             key: "8",
//             path: "/login",
//             icon: <QqOutlined />,
//             label: "退出登录",
//         },
//     ]
//
//     return (
//         <div>
//             <HeadNav></HeadNav>
//             <ListMenu foldOn_width={'100px'} foldOff_width={'100px'} listJson={listMenuData}></ListMenu>
//         </div>
//     );
// }


export default function FatherView(){
    // 接收到子组件的消息
    const reciveChildMethod = (paramsOne: string, paramsTwo: string) => {
        console.log(`我收到子组件的消息啦！参数1：${paramsOne}      参数2：${paramsTwo}`);
    };
    return (
        <div style={{backgroundColor:"gray",padding: '15px'}}>
            <h1>我是父组件</h1>
            {/* 加载子组件 */}
            <ChildView title={"父传子（参数1）"} describe={"父传子（参数2）"}
                       animals={["父传子1","父传子2","父传子3",]} callBack={reciveChildMethod}/>
        </div>
    )
}


interface ChildViewParamsPro {
    title: string,
    describe: string,
    animals: Array<string>,
    // 函数属性，子类传父类会用到这个函数
    callBack:(paramsOne:string, paramsTwo:string,) => void
}
const ChildView = (pro:ChildViewParamsPro) => {
    const [name,setName] = useState("Your name");
    const [age,setAge] = useState("20");

    const handelClick = ()=>{
        pro.callBack(name,age);
    }
    const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.className);
        if (e.target.className === "name") {
            setName(e.target.value);
        }else if (e.target.className === "age") {
            setAge(e.target.value);
        }
        return (event: ChangeEvent) => {

            event.preventDefault();
        }
    }

    return (
        <div style={{width:'300px',backgroundColor:"cadetblue",padding: '15px'}}>
            <h1>我是子组件</h1>
            <ul>
                <li>title: {pro.title}</li>
                <li>desc: {pro.describe}</li>
                <li>animals: {pro.animals}</li>
            </ul>
            <input className={'name'} placeholder={"你的名字"} value={name} onChange={inputChange}/>  <br /><br />
            <input className={'age'} placeholder={"你的年龄"} value={age} onChange={inputChange} /> <br/><br />
            <button onClick={handelClick}>发送给父组件</button>
        </div>
    )
}