import "src/views/HeadNav/HeadNav.css"
import { Dropdown, MenuProps} from "antd";
export default function HeadNav(){

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
                <label>React框架管理系统</label>
            </div>
            {/* 头像 + 昵称 */}
            <div className={'userInfoDiv'} id="head-div">
                {/*假数据*/}
                {/*<label style={{fontSize: '16px', marginTop: '20px', height: '24px'}}>欢迎您，小王（管理员）</label>*/}

                <label style={{fontSize: '16px', marginTop: '20px', height: '24px'}}>欢迎您，</label>
                <Dropdown menu={{ items }} placement="bottom" arrow>
                    {/*<div>*/}
                    <label style={{color:"black"}} dangerouslySetInnerHTML={{ __html:"小王"}}></label>
                    {/*</div>*/}
                </Dropdown>
                <label style={{fontSize: '16px', marginTop: '20px', height: '24px'}}>（管理员）</label>

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