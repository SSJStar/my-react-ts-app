// <!--第四种-->
// <!--
// 数据源大概是要这样展示：
// 浙江
//   杭州
//     西湖区
//     滨江区
//     上城区
//   绍兴
//   宁波
//   台州
// 上海
// 内蒙
//   呼和浩特
//   包头
//   乌海
// -->

// <template>
//     <div class="foldIcon">
//         <img @click="zhedie" v-bind:src="foldImageName" />
//     </div>
//     <el-container>
//         <el-aside :width="isCollapse ? props.foldOff_width : props.foldOn_width">
//         <el-menu
//             active-text-color="#ffd04b"
//             v-bind:background-color="staticVars.BACKGROUNBD_COLOR"
//             class="el-menu-vertical-demo"
//         :default-active="sel"
//         text-color="#fff"
//         @open="handleOpen"
//         @close="handleClose"
//         unique-opened
//         :collapse="isCollapse"
//         :collapse-transition="false"
//         >
//         <!--这是一个for循环，遍历第一级-->
//         <!-- 针对每一个item、item2，要判断它下面有没有子菜单，如果有就用el-sub-menu创建它，如果没有就用el-menu-创建它 -->
//         <!-- 注意：item3作为第三级菜单，不再往下拓展-->
//         <div
//         :index="item.index"
//         v-for="item in props.listJson.list"
//         :key="item.key"
//         >
//         <!--能进入这个v-if，表示这个一级菜单下面还有子菜单（二级菜单）-->
//         <div v-if="item.childrens.length > 0">
//             <el-sub-menu :index="item.index" :key="item.id">
//             <!--   这里的item表示第一级菜单   -->
//             <template #title>
//             <el-icon>
//                 <!--  <icon-menu /> -->
//                 <!--  上面这行使用的是element-plus自带图标库，下面这行使用的我们自己导入到项目的图片
//                     利用v-bind将item.iconName的图片路径赋值给src，请注意：路径需要用require()包裹住
//               -->
//                 <img class="icon-style" v-bind:src="item.iconName" />
//             </el-icon>
//             <span v-show="!isCollapse" class="caiDanAuth">{{
//                 item.title
//             }}</span>
// </template>
//
// <!-- 这里展示二级菜单，没有子菜单（三级菜单）就用el-menu-item-->
// <div v-for="item2 in item.childrens" :key="item2.key">
// <!--   此处v-if表示二级菜单下面，没有子菜单   -->
// <div v-if="item2.childrens.length === 0">
//     <el-menu-item
//     :index="item2.index"
//     :key="item2.id"
//     @click="goUrl(item2.parent_id, item2.title, item2.index)"
//     >
//     <el-icon><Setting /></el-icon>
//     <span class="caiDanAuth">{{ item2.title }}</span>
// </el-menu-item>
// </div>
//
// <!--   此处v-else表示二级菜单下面，还有子菜单   -->
// <div v-else>
//     <!--   这里的item2表示第二级菜单   -->
//     <el-sub-menu :index="item2.index" :key="item2.id">
//     <template #title>
//     <el-icon><Setting /></el-icon>
//     <span class="caiDanAuth">{{ item2.title }}</span>
// </template>
// <!--  这里展示三级菜单，三级菜单为最后一层，不再往下拓展（所以用el-menu-item）-->
// <el-menu-item
//                       :index="item3.index"
// v-for="item3 in item2.childrens"
// :key="item3.id"
// @click="goUrl(item3.parent_id, item3.title, item3.index)"
// >
// <el-icon><Location /></el-icon>
// <span class="caiDanAuth">{{ item3.title }}</span>
// </el-menu-item>
// </el-sub-menu>
// </div>
// </div>
// </el-sub-menu>
// </div>
//
// <!--能进入这个v-else，表示这个一级菜单下面没有子菜单-->
// <div v-else>
//     <!-- 一级菜单下面没有子菜单，那一级菜单就用el-menu-item-->
//     <el-menu-item
//     :index="item.index"
//     :key="item.id"
//     @click="goUrl(item.parent_id, item.title, item.index)"
//     >
//     <el-icon>
//         <img class="icon-style" v-bind:src="item.iconName" />
//     </el-icon>
//     <span v-show="!isCollapse" class="caiDanAuth">{{
//         item.title
//     }}</span>
// </el-menu-item>
// </div>
// </div>
// </el-menu>
// </el-aside>
// </el-container>
// </template>
//
// <script setup>
//     import { Location, Setting } from "@element-plus/icons-vue"; //引入图标
//     import { onMounted, ref } from "vue";
//     // import { staticVars } from "../GitHub/ ssj-vue-project/src/statics/global.js";
//     import { staticVars } from "@/statics/global";
//     import {useRoute, useRouter} from "vue-router";
//     onMounted(() => {
//     const router = useRoute();
//
//     console.log("3333" + router.name);
//     if (router.name === "home") {
//     sel.value = "1";
// }else{
//     sel.value = router.name;
// }
//     console.log(staticVars.BACKGROUNBD_COLOR);
// });
//
//     //TODO: 选中的菜单
//     const sel = ref("1");
//
//     // 折叠还是展开
//     let isCollapse = ref(false);
//
//     let displayValue = ref("block");
//
//     // （展开 ｜ 收起）图片路径
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     let foldImageName = ref(require("/src/assets/menu/icon-menu-shouqi.png"));
//
//     let foldIconColor = staticVars.BACKGROUNBD_COLOR;
//
//     let menuFontSize = staticVars.LEFTMENU_FONTSIZE; //菜单栏-字体大小
//
//     const emit = defineEmits(["change", "selected"]);
//         const props = defineProps({
//             foldOn_width: String, //展开时的宽度
//             foldOff_width: String, //收起时的宽度
//             listJson: Object, //菜单数据源
//         });
//
//         function goUrl(parent_id, title, index) {
//             // alert(title + "，id是" + index);
//             //通知父视图，点击了哪个index
//             emit("selected", index);
//         }
//
//         const handleOpen = (key, keyPath) => {
//             console.log("handleOpen--" + key, keyPath);
//         };
//
//         const handleClose = (key, keyPath) => {
//             console.log("handleClose--" + key, keyPath);
//         };
//
//         //折叠方法
//         function zhedie() {
//             // console.log("执行zhedie方法")
//             isCollapse.value = !isCollapse.value;
//             //修改displayValue值，控制三角形的显示或隐藏
//             if (isCollapse.value) {
//             displayValue.value = "none";
//             foldImageName.value = require("/src/assets/menu/icon-menu-zhankai.png");
//         } else {
//             displayValue.value = "block";
//             foldImageName.value = require("/src/assets/menu/icon-menu-shouqi.png");
//         }
//             //告诉调用者，展开还是收起（即由当前组件，通知外面）
//             emit("change", !isCollapse.value);
//         }
//
//         //定义方法，并暴露给外界调用
//         function pubMethod(value) {
//             console.log("接收外界value:" + value);
//         }
//         // 暴露给外界调用
//         defineExpose({ pubMethod });
//     </script>


import {Layout, Menu, Button, theme, MenuProps} from "antd";
import {
    BarChartOutlined, BugOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined,
    SoundOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined, ZhihuOutlined
} from "@ant-design/icons";
import React, {TouchEvent, UIEvent, useState} from "react";
import {useNavigate, Outlet, useRoutes} from "react-router-dom";
import {doWhileStatement} from "@babel/types";
import {useLocation} from "react-router";
const { Header, Sider, Content } = Layout;

interface proComponentPro {
    foldOn_width:string,  // 展开时的宽度
    foldOff_width:string, // 收起时的宽度
    listJson:Array<any>,  // 菜单数据源
}

// interface menuInfo {
//     key: string,
//     path: string,
//     title: string,
// }

/*TODO: 唯一的模块导出 */
export default function ListMenu(pro:proComponentPro){
    // 拿到路由对象
    const navigateTo = useNavigate();
    // Layout.Sider的属性，负责控制侧边栏（Sider）展开和收起
    const [collapsed, setCollapsed] = useState(false);
    // 记录横向导航路径的标题名
    const [navTitles,setNavTitles] = useState<Array<string>>([]);
    // 这个变量最终要传给selectedKeys; 示例：[7,3,5]，表示7-3-5，
    const [keys,setKeys] = useState<Array<string>>([]);
    // 控制垂直菜单-被选中菜单的key <Array:string>
    const [selectedKeys,setSelectedKeys] = useState<Array<string>>([]);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 如果是 "x-y-z-n"这种key，需要特殊处理
    //    @dataSource: 要查找的数据源
    //    @key:    分割符
    const checkNumber = (dataSource:string, key:string)=>{
        /**
         * 思路：
         *  dataSource：7-3-2
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

        let dowhilecount = 0; // 统计do…while循环次数

        do {
            ++dowhilecount;
            console.log(`第${dowhilecount}次循环`)

            // indexOf 当查询结果为空时，返回 -1
            const indexValue = dataSource.indexOf("-");

            if (indexValue > -1) { //找到了 "-"

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
                console.log("else块")

                routerPath = currentList[parseInt(dataSource) - 1].path;
                //将标题添加到titles数组
                titles.push(currentList[parseInt(dataSource) - 1].label); //pro.listJson下标从1开始，所以下标要减去1
                setNavTitles(titles);
                endResult = true;

            }
        }while (!endResult)
        //
        navigateTo(routerPath);
    }

    // TODO：点击垂直菜单
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);

        setSelectedKeys([e.key]); // 给组件传selectedKeys

        setKeys(e.key.split('-')); // 记录key数组，handelTopMenu函数要用到

        checkNumber(e.key,"-"); //开始查找path和label（key格式："7-3-1"）
    };


    // e:MouseEvent
    // TODO：顶部菜单点击
    // item表示点击的标题内容，index表示点击的下标（index从0开始）
    const handelTopMenu = (item: string, index: number) => {
        return (event: React.MouseEvent) => {
            console.log(`点击了 ${item}`)
            console.log(selectedKeys);
            event.preventDefault();
            if (index < (navTitles.length - 1) ) {
                // 1、当index == (navTitles.length - 1 ，说明点击的是最后一个（即当前页），
                //      那就不需要变化，所以这里要判断小于才执行
                // 2、假设展示的是「管理中心/我/个人详情」，点击了第1个（我），
                //    就从数组navTitles中删掉下标1后面的数据，然后执行setNavTitles(titles);

                // 因为index从0开始的，这里要选个数，所以计算的时候要+1
                const arr = navTitles.splice(index,navTitles.length - (index + 1));
                console.log(index + " - " + (navTitles.length - (index + 1)) + " - " + navTitles.length );

                setNavTitles(arr);
                // 因为index从0开始的，这里要选个数，所以计算的时候要+1
                const key_arr = keys.splice(index,keys.length - (index + 1));
                setKeys(key_arr);
                // console.log("a - " + key_arr);
                // console.log("b - " + key_arr.join("-"));
                checkNumber(key_arr.join("-"),"-");

                setSelectedKeys([key_arr.join("-")]); // 给组件传selectedKeys
            }
        }
    };

    const backFontColor = (compareString:string) => {
        if ( compareString === navTitles[navTitles.length - 1] ) {
            return "Black";
        }else
            return "#696969";
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
                    selectedKeys={selectedKeys}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
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
                    {/*<label>{navTitles.join('-')}</label>*/}
                    {/* 遍历输出导航菜单 */}
                    {navTitles.map((item,index) => {
                        if (index == (navTitles.length - 1)){
                            return <label onClick={ handelTopMenu(item,index) } style={{color:backFontColor(item)}}
                                          key={index} dangerouslySetInnerHTML={{__html:item}}></label>
                        }else {
                            return <label onClick={ handelTopMenu(item,index) } style={{color:backFontColor(item)}}
                                          key={index} dangerouslySetInnerHTML={{__html:item + " / "}}></label>
                            // return <label onClick={(e)=>{console.log(`点击了 ${index}`) } } key={index} dangerouslySetInnerHTML={{__html:item + "/"}}></label>
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