import instance from "src/requestAPI/request";
// 用户登录
export const Login = (params: any) => {
    return instance.request({
        url: "rft/getNewDevices",
        method: "GET",
        params
    });
};
// 用户注册
export const userRegister = (data: any) => {
    return instance.request({
        url: "",
        method: "POST",
        data
    });
};