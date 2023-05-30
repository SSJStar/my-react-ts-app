//
// function home(){
//     return <h1>This is home.</h1>;
// }
//
// export default home()


// @ts-nocheck

// import React from "react";
//
// function Home({showMsg,showTime}) {
//     let inputRef = React.createRef();
//     // const handleClick = (name: string, password: string) => {
//     //     alert(`User ${name} logged in with password ${password} showmsg is ${showMsg} ${showTime}`);
//     // };
//
//     // 弹窗1
//     const alertOne = (msg) =>{
//         // inputRef.current.focus();
//         alert("输入的内容是：" + inputRef.current.value);
//     };
//
//     // 弹窗2
//     const alertTwo = (msg) =>{
//         alert(`传入的参数是：${showMsg}  -- ${showTime}`);
//     };
//     return (
//         <div>
//             {/*<img*/}
//             {/*    src="http://p4.music.126.net/zrMDwLyZk17F3unB8ZyYYQ==/18872017579261383.jpg?param=200y200"*/}
//             {/*    alt="Katherine Johnson"*/}
//             {/*    // onClick={() => alert('Image clicked!')}*/}
//             {/*    onClick={handleClick}*/}
//             {/*/>*/}
//             <input placeholder={"请输入数字"} ref={inputRef} /> <button onClick={alertOne}>提示输入内容</button>
//             <button onClick={alertTwo}>提示传入本组件的参数</button>
//         </div>
//     );
// }
//
//
// function Gallery() {
//     return (
//         <section>
//             <h1>Amazing scientists</h1>
//             <div>
//                 <Home showMsg={"good!"} showTime={"20230529 15:54"}/>
//             </div>
//             <div>
//                 <Home showMsg={"nick!"} showTime={"20230529 15:57"}/>
//             </div>
//             <div>
//                 <Home showMsg={"beautiful!"} showTime={"20230529 16:00"}/>
//             </div>
//         </section>
//     );
// }
//
// export default Gallery() //有参数,不能export default






// 【第3个】

// import React, {useState} from 'react';
//
// function Home() {
//     //创建ref
//     let [inputValue, setInputValue] = useState("");
//     //样式
//     let divStyle = {
//         color: 'pink',
//         padding: '20px 0 5px 50px',
//     };
//     let buttonStyle = {
//         margin: '0 0 0 10px',
//     };
//
//     // const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // 输入框内容改变回调
//     const onInputChange = (event) => {
//         setInputValue(event.target.value);
//     };
//
//     //按钮点击事件
//     const handelClick = ()=> {
//         const v = Number(inputValue) + 1
//         setInputValue(v)
//     };
//
//     return (
//         <div style={divStyle}>
//             <input placeholder={"请输入数字~"} value={inputValue} onChange={onInputChange}/>
//             <h2>{inputValue}</h2>
//             <button onClick={handelClick} style={buttonStyle}>改变inputValue值</button>
//         </div>
//     );
// }
//
// export default <Home /> //如果home函数带参数，export default会报错





//
// 【第4个】
//
// import React, { useState } from 'react'
// const Headline = () => {
//     const [greeting, setGreeting] = useState(
//         'Hello Function Component!'
//     );
//
//     return (
//         <div>
//             <h1>{greeting}</h1>
//
//             <input
//                 type="text"
//                 value={greeting}
//                 onChange={event => setGreeting(event.target.value)}
//             />
//         </div>
//     );
// };
//
// export default <Headline />;





// 【第5个】
// import React from 'react';
//
// const Test = () => {
//     const sayHello = () => console.log('Hello');
//
//     return <MyButton handleClick={sayHello} />;
// };
//
// const MyButton = ({ handleClick }) => (
//     <button type="button" onClick={handleClick}>
//         Button
//     </button>
// );
//
// // Button.defaultProps = {
// //     handleClick: () => console.log('Default'),
// // };
//
// export default <Test />;


//
// 【第6个】
//
// import React, {FC} from "react";
// interface MyButtonProps {
//     handelClick: (name: string, password: string) => void;
//     title: string,
// }
//
// // MyButton组件
// const MyButton:FC<MyButtonProps> = ({ handelClick,title })=>{
//     // 按钮样式
//     const buttonStyle = {
//         width: "70px",
//         marginLeft: "50px",
//         marginTop: "50px",
//     }
//
//     return (
//         <div>
//             <button style={buttonStyle} onClick={handelClick}>
//                 { title }
//             </button>
//         </div>
//     )
// }
//
// // Test组件
// function Test(){
//     const handelClick = ()=>{
//         console.log("Test handelClick函数被执行");
//     }
//     return <MyButton handelClick={handelClick} title={"点我试试"}></MyButton>
// }
//
// // 给MyButton组件 - 添加默认属性值
// MyButton.defaultProps = {
//     handelClick: ()=>{
//         console.log("按钮~默认函数被执行");
//     },
//     title: "默认标题",
// }
// export default Test()




//类组件
import {Component} from "react";
import {number} from "prop-types";
interface HomeProps{
    title: string
}
interface HandleAction {
    handleClick: ()=>void;
}
class Home extends Component<HomeProps, HandleAction> {
    constructor() {
        super();
    }
    state={
        inputValue: "",
    };
        //样式
    divStyle()  {
        return {
            color: 'pink',
            padding: '20px 0 5px 50px',
        }
    };
    //  buttonStyle = {
    //     margin: '0 0 0 10px',
    // };

    // 输入框内容改变回调
     onInputChange = (event) => {
        // setInputValue(event.target.value);
         this.setState(state =>({inputValue:event.target.value}),
             () => console.log(this.state.inputValue)
         )
    };

    //按钮点击事件
    handelClick = ()=> {
        // const v = Number(this.state.inputValue) + 1
        // setInputValue(v)
        let value = Number(this.state.inputValue)
        this.setState(state =>({inputValue:value + 1}),
            () => console.log(this.state.inputValue)
        )
    };

    render() {
        return (
            <div style={this.divStyle()}>
                {/*<input placeholder={"请输入数字~"} value={inputValue} onChange={onInputChange}/>*/}
                <input placeholder={"请输入数字~"} onChange={this.onInputChange}/>
                <h2>{this.state.inputValue}</h2>
                <button onClick={this.handelClick} >改变inputValue值</button>
            </div>
        );
    }
}

export default <Home />;