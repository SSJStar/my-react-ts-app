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
import React, {useState} from "react";
import {useNavigate,Outlet} from "react-router-dom";
import {doWhileStatement} from "@babel/types";
const { Header, Sider, Content } = Layout;

interface proComponentPro {
    foldOn_width:string,  // 展开时的宽度
    foldOff_width:string, // 收起时的宽度
    listJson:Array<any>,  // 菜单数据源
}

/*TODO: 唯一的模块导出 */
export default function ListMenu(pro:proComponentPro){
    const navigateTo = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // 点击菜单
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);


            // console.log(`key:${pro.listJson[2].label}`)
            // console.log(`item1:${item.toString()}`)
            // console.log(`item2:${item}`)
            //
            // console.log(`item3:${JSON.stringify(item)}`)
            // console.log(typeof item);
            // console.log(item.label);

        // console.log("下标1--- " + "abce".indexOf("c"));

        // 如果是 "x-y-z-n"这种key，需要特殊处理
        // dataSource:要查找的数据源
        // key:分割符


        const checkNumber = (dataSource:string, key:string)=>{
            const navTitles = [];
            let currentList = pro.listJson;
            let routerPath = "";
            let endResult = false; //用来控制do…while…语句，false表示继续循环，true表示结束循环
            let dowhilecount = 0;
            do {
                ++dowhilecount;
                console.log(`第${dowhilecount}次循环`)
                // indexOf 当查询结果为空时，返回 -1
                const indexValue = dataSource.indexOf("-");
                if (indexValue > -1) { //找到 "-"

                    //取出"-"前面一个数字
                    const numberBegin = dataSource.substring(0,indexValue)
                    console.log("numberBegin --- " + numberBegin);
                    // 将路径传给routerPath
                    routerPath = currentList[parseInt(numberBegin) - 1].path;
                    //将标题添加到navTitles数组
                    navTitles.push(currentList[parseInt(numberBegin) - 1].label); //pro.listJson下标从1开始，所以下标要减去1
                    //更新currentList，方便下一次查找
                    currentList = currentList[parseInt(numberBegin) - 1].children;
                    // 更新dataSource，方便下一次do循环
                    dataSource = dataSource.substring(indexValue + 1,e.key.length)
                    // checkA(); //继续下一次checkA函数循环
                }else {
                    console.log("else块")
                    // if(navTitles.length == 0){
                    //     // 说明是第一次循环，且只有这一个层级，直接拿来用即可
                    //     routerPath = currentList[parseInt(dataSource)].path;
                    // }else{
                    //     //说明最起码是第二次循环checkA函数，能进入else说明没找到，这里直接返回即可
                    //     endResult = true;
                    // }
                    console.log("currentList")
                    console.log(currentList)
                    console.log(`dataSource:${(parseInt(dataSource) - 1).toString()}`)
                    routerPath = currentList[parseInt(dataSource) - 1].path;
                    //将标题添加到navTitles数组
                    navTitles.push(currentList[parseInt(dataSource) - 1].label); //pro.listJson下标从1开始，所以下标要减去1
                    // `)
                    endResult = true;
                }
            }while (!endResult)

            // const checkA = () => {
            //     // indexOf 当查询结果为空时，返回 -1
            //     const indexValue = dataSource.indexOf("-");
            //     if (indexValue > -1) { //找到 "-"
            //
            //         //取出"-"前面一个数字
            //         const numberBegin = dataSource.substring(0,indexValue)
            //         console.log("numberOne --- " + numberBegin);
            //         navTitles.push(currentList[parseInt(dataSource)].label); //将标题添加到navTitles数组
            //         currentList = currentList[parseInt(dataSource)]; //更新currentList，方便下一次查找
            //
            //         checkA(); //继续下一次checkA函数循环
            //     }else {
            //         if(navTitles.length == 0){
            //             // 说明只有这一个层级，直接拿来用即可
            //             routerPath = currentList[parseInt(dataSource)].path;
            //         }else{
            //             //说明最起码是第二次循环checkA函数，能进入else说明没找到，这里直接返回即可
            //             return;
            //         }
            //         return
            //     }
            // }
            console.log("navTitles: " + navTitles);
            console.log("routerPath: " + routerPath);
            navigateTo(routerPath);
        }

        checkNumber(e.key,"-");

        // if (indexValue > -1) { //找到 "-"
        //
        //     //取出"-"前面一个数字
        //     const numberBegin = e.key.substring(0,indexValue)
        //     console.log("numberOne --- " + numberBegin);
        //
        //     //取出"-"后面一个数字
        //     // indexValue是"-"的下标，我们要从下一个开始算
        //     // 参数1 ≤ substring计算结果 < 参数2，所以「参数2」要用e.key.length
        //     const numberLast = e.key.substring(indexValue + 1,e.key.length)
        // }


        // 减去1是因为，数组下标是从0开始，而key是从1开始
        // const index = parseInt(e.key) - 1;
        // console.log('index ', index);
        // const itemInfo = pro.listJson[index];
        // console.log(`选中了${itemInfo.label}`);
        //     navigateTo(itemInfo.path);


        //     // TODO: search方式 - 传递参数
        //     // console.log(key);
        //     // navigateTo("item?title=sear传值&name=张三")
        //
        //     // TODO: params方式 - 传递参数
        //     // navigateTo("item/params传值/name=李四")
        //     // navigateTo("item/001")
        //
        //     // TODO: state方式 - 传递参数
        //     // navigateTo("item",{state:{title:'state传值',name:"王五"}})
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