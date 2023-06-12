import {Layout, Menu, Button, theme, MenuProps} from "antd";
import {
    BugOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";


const { Header, Sider, Content } = Layout;

// TODO：定义几个参数
interface proComponentPro {
    foldOn_width:string,  // 展开时的宽度
    foldOff_width:string, // 收起时的宽度
    listJson:Array<any>,  // 菜单数据源
}

/*TODO: 唯一的模块导出 */
export default function ListMenu(pro:proComponentPro){
    // 拿到路由对象
    const navigateTo = useNavigate();
    // Layout.Sider的属性，负责控制侧边栏（Sider）展开和收起
    const [collapsed, setCollapsed] = useState(false);
    // 记录横向导航路径的标题名
    const [navTitles,setNavTitles] = useState<Array<string>>([]);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 如果是 "x-y-z-n"这种key，需要特殊处理
    //    @dataSource: 要查找的数据源
    //    @key:    分割符
    const checkNumber = (dataSource:string, key:string)=>{
        /**
         * 思路：
         *  dataSource："7-3-2"
         *  key："-"
         *
         *  do…while会根据dataSource，一层层的寻找到最后一个key，期间会逐个取出path、label
         *  do循环块：
         *      1、判断dataSource字符串是否包含分隔符"-"，
         *          1.1、不包含
         *              1.1.1、取出currentList最后一个元素的path，赋值给routerPath
         *              1.1.2、取出currentList最后一个元素的label，添加到navTitles
         *              1.1.3、endResult = true，【结束do…while循环】
         *          1.2、包含
         *              1.2.1、取出"-"前面元素的path，赋值给routerPath
         *              1.2.2、取出"-"前面元素的label，添加到navTitles
         *              1.2.3、更新currentList，方便下一次循环
         *              1.2.4、更新dataSource，方便下一次循环
         * */

        const titles = []; //字符串数组，接收被选中路径的菜单名，比如：首页/我/信用积分

        let currentList = pro.listJson; // 用来存放 - do…while当前循环临时数据源

        let routerPath = ""; // 每次循环结束，都会更新路径

        let endResult = false; //用来控制do…while…语句，false表示继续循环，true表示结束循环

        do {

            // indexOf 当查询结果为空时，返回 -1
            const indexValue = dataSource.indexOf(key);

            if (indexValue > -1) { //找到了分隔符key， "-"

                //取出"-"前面一个数字
                const numberBegin = dataSource.substring(0,indexValue)

                // 取出"-"前面一个数字 对应的数据源
                //   pro.listJsonkey是下标从1开始，所以下标要减去1
                const obj = currentList[parseInt(numberBegin) - 1];

                // 将路径传给routerPath
                routerPath = obj.path;

                //  将标题添加到titles数组
                titles.push(obj.label);
                setNavTitles(titles);

                //更新currentList，方便下一次查找
                currentList = obj.children;

                // 更新dataSource，方便下一次do循环
                dataSource = dataSource.substring(indexValue + 1,dataSource.length)
            }else {
                // console.log("else块")

                routerPath = currentList[parseInt(dataSource) - 1].path;
                //将标题添加到titles数组
                titles.push(currentList[parseInt(dataSource) - 1].label); //pro.listJson下标从1开始，所以下标要减去1
                setNavTitles(titles);
                endResult = true;

            }
        }while (!endResult)

        // 循环结束，路由跳转
        navigateTo(routerPath);
    }

    // TODO：点击垂直菜单
    const onClick: MenuProps['onClick'] = (e) => {
        // console.log('click ', e.key);
        //开始查找path和label（key格式："7-3-1"）
        checkNumber(e.key,"-");


        // 赋值
        // window["method1"] = ()=>{};
        // window["property1"] = "22222";
        // 使用
        // window["method1"]();
        // let str = window["property1"];
        // console.log(`str---: ${str}`)

        // console.log(global.themeBgColor)
        // console.log(global.navTitleColor)
        // console.log(themeBgColor)
        // console.log(navTitleColor)
    };


    // 顶部菜单，管理员和其它文字颜色切换
    const backFontColor = (compareString:string) => {
        if ( compareString === navTitles[navTitles.length - 1] ) {
            return "Black"; //当前页，显示黑色
        }else
            return "#696969"; //不是当前页，显示灰色
    };


    return (
        <Layout style={{ width: "100vw", height: "100vh", color: "#fff" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/*<div className={styles.logo}>*/}
                <div style={{paddingTop:'20px',paddingLeft:'10px'}}>
                    <BugOutlined />
                    <span
                        style={collapsed ? { display: "none" } : undefined}
                    >
                        智慧学习平台
                      </span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    onClick={onClick}
                    items={pro.listJson}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {/* 展开｜收起 */}
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    {/* 遍历输出 - 顶部导航菜单 */}
                    {navTitles.map((item,index) => {
                        if (index === (navTitles.length - 1)){
                            return <label style={{color:backFontColor(item)}}
                                          key={index} dangerouslySetInnerHTML={{__html:item}}></label>
                        }else {
                            return <label style={{color:backFontColor(item)}}
                                          key={index} dangerouslySetInnerHTML={{__html:item + " / "}}></label>
                        }
                    })}
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        color: "red",
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />  //这里是子路由出口
                </Content>
            </Layout>
        </Layout>
    )
}