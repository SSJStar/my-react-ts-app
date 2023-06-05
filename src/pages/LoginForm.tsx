//
// import React, {Component} from 'react';
//
// import MyButton from "../component/MyButton";
//
//
// interface LoginFormProps {
//     title: string;
// }
// interface LoginFormAction {
//     doLogin: (name: string, password: string) => void;
// }
//
// // <head>
// //     <div>11</div>
// //     <title>haha</title>
// // </head>
//
// // class LoginForm extends Component<any, any>{}
// class LoginForm extends Component<any, any> {
//     constructor(props:any){
//         super(props)
//         this.state = {
//             name:"",
//             password:"",
//         }
//     }
//
//     // 账号框内容变动
//     onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         // setName(event.target.value);
//         this.setState({name:event.target.value})
//     };
//
//     // 密码框内容变动
//     onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         // setPassword(event.target.value);
//         this.setState({password: event.target.value})
//         // this.props.toPa
//     };
//
//     // 登陆事件
//     onButtonClick = () => {
//         // doLogin(name, password);
//         alert(`账号：${this.state.name}  密码：${this.state.password}`)
//     };
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <input type="text" value={this.state.name} onChange={this.onNameChange} />
//                 <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
//                 <MyButton onClick={this.onButtonClick} title={"登 录"}></MyButton>
//             </div>
//         );
//     }
// };
//
// function LoginFormDiv(){
//     // @ts-ignore
//     return LoginForm((name: string, password:string)=>{
//         console.log(`${name} -> ${password}`);
//     });
// }
//
// export default <LoginForm />;






// import {useEffect, useState} from "react";
//
// function Test(){
//     const [count, setCount] = useState(0);
//     // 相当于 componentDidMount 和 componentDidUpdate:
//     useEffect(() => {
//         // 使用浏览器的 API 更新页面标题
//         console.log("执行了useEffect")
//         document.title = `You clicked ${count} times`;
//         // console.log('mkLog: count', count);
//     });
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             {/*<button onClick={() => setCount(count + 1)}>Click me</button>*/}
//             <button onClick={() => {console.log("111");setCount(count + 1);console.log("222")}}>Click me</button>
//         </div>
//     )
// }
// export default <Test />;





// import React, { Fragment, useState, useEffect } from 'react';
//
// function Test() {
//     const [value, setValue] = useState('');
//     const [count, setCount] = useState(0);
//     let obj = {
//         title:"",
//     }
//     useEffect(() => {
//         console.log("useEffect 被执行")
//         setCount(count + 1);
//     },[obj.title]);
//     return (
//         <Fragment>
//             <input
//                 type="text"
//                 value={value}
//                 onChange={({ target }) => {
//                     setValue(target.value);
//                     obj.title = `哈${target.value}`
//                 }}
//             />
//             <div>count is {count}</div>
//         </Fragment>
//     );
// }
// export default <Test />;




// import React from "react";
//
// // 函数组件
// interface FUNComponentPro{
//     title:string,
// }
// function FUNComponent(pro:FUNComponentPro){
//     const [value,setValue] = React.useState("");
//     const handelButton = ()=>{
//         setTimeout(()=>{
//             alert("函数组件value:" + value);
//         },3000);
//     }
//     // 样式
//     let funStyle = {
//         margin: '0 0 0 20px',
//     };
//     return <div style={funStyle}>
//         <h1>{pro.title}</h1>
//         <input placeholder={"请输入内容"} value={value}
//                onChange={({target})=>{setValue(target.value)}}>
//         </input>
//         <button onClick={handelButton}>函数组件，3秒后展示value</button>
//     </div>
// }
//
// // 类组件
// class ClassCompenent extends React.Component<any, any> {
//     constructor(pro:any) {
//         super(pro);
//         this.state = {
//             value:"",
//         }
//     }
//     handelButton = () => {
//         setTimeout(()=>{
//             alert("类组件value:" + this.state.value);
//         },3000);
//     }
//     classStyle = {
//         margin: '0 0 0 20px',
//     };
//     render() {
//         return (
//             <div style={this.classStyle}>
//                 <input placeholder={"请输入内容"} value={this.state.value}
//                        onChange={({target})=>{
//                            this.setState({value:target.value})
//                        }}>
//                 </input>
//                 <button onClick={this.handelButton}>类组件，3秒后展示value</button>
//             </div>
//         );
//     }
// }
//
// // 父组件
// function ParentComponent(){
//     const funTitle = "我是函数组件哈哈" as string;
//     return (
//         <div>
//             <h1>我是父组件</h1>
//             <FUNComponent title={funTitle}></FUNComponent>
//             <br></br>
//             <ClassCompenent></ClassCompenent>
//         </div>
//     )
// }

import { UserOutlined } from '@ant-design/icons';
import {Button, Input} from 'antd';
import {style} from "postcss-minify-font-values/types/lib/keywords";
const LoginView = ()=>{
    const style_contentDiv = {
        width: '50%',
        height: '50%',
        backgroundColor: 'pink',
        // align:
        // display:'flex',
        justifyContent:'center',
        alignItems:'center'
    };
    return (
        <div style={{ backgroundColor: "darkgray" }}>
            <div className={"contentDiv"} style={ style_contentDiv }>
                <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined />} />

                <div style={{ height:'40px' }}></div>

                <Input.Password placeholder="请输入密码" prefix={<UserOutlined />} />

                <div style={{ height:'40px' }}></div>

                <Button>登 陆</Button>
            </div>

        </div>
    )
};

export default <LoginView />;