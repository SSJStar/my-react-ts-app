import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    BarChartOutlined,
    SoundOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
// import styles from "./home.module.scss";
// import sim from "src/assets/sim.svg";
import { useNavigate, Outlet } from "react-router-dom";
// import router from "src/router/routeConfig.tsx";

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
    const navigateTo = useNavigate();

    // const outlet = useRoutes(router);

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ width: "100vw", height: "100vh", color: "#fff" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/*<div className={styles.logo}>*/}
                <div>
                    {/*<img src={sim} alt="" style={{ width: "36px" }} />*/}
          {/*          <span*/}
          {/*              className={styles.title}*/}
          {/*              style={collapsed ? { display: "none" } : undefined}*/}
          {/*          >*/}
          {/*  智慧学习平台*/}
          {/*</span>*/}
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
                    onClick={({ key }) => {
                        console.log(key);
                        navigateTo(key);
                    }}
                    items={[
                        {
                            key: "home",
                            icon: <BarChartOutlined />,
                            label: "全站数据",
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: "课程大厅",
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: "我的课程",
                        },
                        {
                            key: "4",
                            icon: <VideoCameraOutlined />,
                            label: "直播课",
                        },
                        {
                            key: "personal",
                            icon: <UserOutlined />,
                            label: "个人信息",
                        },
                        {
                            key: "6",
                            icon: <SoundOutlined />,
                            label: "消息",
                        },
                        {
                            key: "7",
                            icon: <UploadOutlined />,
                            label: "管理中心",
                            children: [
                                {
                                    key: "/admin/course",
                                    label: "课程管理",
                                },
                                {
                                    key: "/admin/student",
                                    label: "学生管理",
                                },
                                {
                                    key: "/admin/homework",
                                    label: "作业",
                                },
                            ],
                        },
                    ]}
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
    );
};
export default Home;
