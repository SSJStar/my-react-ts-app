import colors from "tailwindcss/colors";
import "src/views/HeadNav/HeadNav.css"
import {Button, Dropdown, MenuProps} from "antd";
export default function HeadNav(){

//     const style_contentDiv = {
//         width: '50%',
//         height: '50%',
//         backgroundColor: 'pink',
//         // align:
//         // display:'flex',
//         justifyContent:'center',
//         alignItems:'center'
//     };
//     const head_nav = {
//         width: '100%',
//         height: '100px',
//         overflow: 'hidden',
//         backgroundColor: colors.red,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
//
//     /* 标题 */
// const head_nav label {
//         fontSize: v-bind(navgation_fontSize);
//         color: v-bind(navgation_titleColor);
//     }
//     /* 点击头像-列表-每一项的字体大小*/
// .boxDiv label {
//         font-size: v-bind(navgation_list_fontSize);
//     }
//     /* 头像 + 昵称 */
// .userInfoDiv {
//         right: 20px;
//         height: 40px;
//         position: absolute;
//         display: flex;
//         align-items: center;
//     }
// .userInfoDiv img {
//         width: 30px;
//         height: 30px;
//         border-radius: 50%;
//     }
// .userInfoDiv label {
//         float: right;
//         margin-left: 10px;
//         height: 30px;
//     }
//
//     /* 点击头像-列表 */
// .boxDiv {
//         display: flex;
//         top: v-bind(navgation_height);
//         right: v-bind(boxRight);
//         background-color: #333333;
//         position: absolute;
//         flex-direction: column;
//         padding: 10px 8px;
//         z-index: 999;
//     }
// .boxDiv label {
//         color: white;
//     }

    // 下拉数据
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    个人信息
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    退出登录
                </a>
            ),
        },
    ];

    return (
        <div className={'head-nav'}>
            <div style={{position: 'absolute',textAlign: 'center'}}>
                <label>冷媒后台管理系统</label>
            </div>
            {/* 头像 + 昵称 */}
            <div className={'userInfoDiv'} id="head-div">
                {/*假数据*/}
                {/*<label style={{fontSize: '16px', marginTop: '20px', height: '24px'}}>欢迎您，小王（管理员）</label>*/}

                <label style={{fontSize: '16px', marginTop: '20px', height: '24px'}}>欢迎您，小王（管理员）</label>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                    <div>
                        <label dangerouslySetInnerHTML={{ __html:"哈咯"}}></label>
                    </div>
                </Dropdown>

            </div>

            {/*  box列表    flex-shrink: 0  */}
        {/*    <div*/}
        {/*        class="boxDiv"*/}
        {/*        v-show="boxShow"*/}
        {/*        ref="boxRef"*/}
        {/*    :onmouseenter="mouthIntoBox"*/}
        {/*    :onmouseleave="mouthLeaveBox"*/}
        {/*    >*/}
        {/*    <!--   个人信息   -->*/}
        {/*    <label @click="userInfoClick"> 个人信息 </label>*/}
        {/*    <!--   退出登录   -->*/}
        {/*    <label @click="unLoginClick" style="margin-top: 10px"> 退出登录 </label>*/}
        {/*</div>*/}
        </div>
)
}