//
// function home(){
//     return <h1>This is home.</h1>;
// }
//
// export default home()


// @ts-nocheck

import React from "react";

function Home({showMsg,showTime}) {
    let inputRef = React.createRef();
    // const handleClick = (name: string, password: string) => {
    //     alert(`User ${name} logged in with password ${password} showmsg is ${showMsg} ${showTime}`);
    // };

    // 弹窗1
    const alertOne = (msg) =>{
        // inputRef.current.focus();
        alert("输入的内容是：" + inputRef.current.value);
    };

    // 弹窗2
    const alertTwo = (msg) =>{
        alert(`传入的参数是：${showMsg}  -- ${showTime}`);
    };
    return (
        <div>
            {/*<img*/}
            {/*    src="http://p4.music.126.net/zrMDwLyZk17F3unB8ZyYYQ==/18872017579261383.jpg?param=200y200"*/}
            {/*    alt="Katherine Johnson"*/}
            {/*    // onClick={() => alert('Image clicked!')}*/}
            {/*    onClick={handleClick}*/}
            {/*/>*/}
            <input placeholder={"请输入数字"} ref={inputRef} /> <button onClick={alertOne}>提示输入内容</button>
            <button onClick={alertTwo}>提示传入本组件的参数</button>
        </div>
    );
}


function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <div>
                <Home showMsg={"good!"} showTime={"20230529 15:54"}/>
            </div>
            <div>
                <Home showMsg={"nick!"} showTime={"20230529 15:57"}/>
            </div>
            <div>
                <Home showMsg={"beautiful!"} showTime={"20230529 16:00"}/>
            </div>
        </section>
    );
}

export default Gallery() //有参数,不能export default



// import React, { FC } from 'react';
//
// function Home() {
//     //创建ref
//     const [inputValue,setInputValue] = React.useState('');
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
//     const onInputChange = (event) => {
//         setInputValue(event.target.value);
//     };
//
//     // 弹窗
//     const alertOne = (msg) =>{
//         alert("输入的内容是：" + inputValue);
//     };
//
//     return (
//         <div style={divStyle}>
//             <input placeholder={"请输入数字~"} value={inputValue} onChange={onInputChange}/>
//             <button onClick={alertOne} style={buttonStyle}>提示输入内容</button>
//         </div>
//     );
// }
//
// export default Home() //如果home函数带参数，export default会报错