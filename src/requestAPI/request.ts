import axios from "axios"
// 创建axios实例
const instance = axios.create({
    // baseURL: "/api",//'可设置为反向代理地址',
    baseURL: "http://hvac.365env.com",
    timeout: 3000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Access-Control-Allow-Origin":"http://hvac.365env.com/rft/getNewDevices?user_id=10000014",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
        'Accept': 'application/json'
    },
    /*这个配置很重要，允许axios携带用户Cookie到后端，不设置这个的话
      Set-Cookie是无效的,除此之外,Chrome默认开启了SameSite检查，如果
      后端不主动设置SameSite = none,Set-Cookie是无效的。详情请文章末尾
      参考阮老师的SameSite讲解*/
    withCredentials: true,
});
// 添加请求拦截器
let token = localStorage.getItem("token")
axios.interceptors.request.use(function (config) {
    if (token) {
        config.headers.token = token
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response: any) {
    // 对响应数据做点什么
    if (response.code === 200) {
        return response
    } else {
        console.error(response.message || response.msg)
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    let text = "";
    if (error.response.status) {
        switch (error.response.status) {
            case 400:
                text = "请求错误(400)，请重新申请";
                break;
            case 401:
                text = "登录错误(401)，请重新登录";
                break;
            case 403:
                text = "拒绝访问(403)";
                break;
            case 404:
                text = "请求出错(404)";
                break;
            case 408:
                text = "请求超时(408)";
                break;
            case 500:
                text = "服务器错误(500)，请重启软件或切换功能页！";
                break;
            case 501:
                text = "服务未实现(501)";
                break;
            case 502:
                text = "网络错误(502)";
                break;
            case 503:
                text = "服务不可用(503)";
                break;
            case 504:
                text = "网络超时(504)";
                break;
            case 505:
                text = "HTTP版本不受支持(505)";
                break;
            default:
                text = "网络连接出错";
        }
    } else {
        text = "连接服务器失败,请退出重试!";
    }
    console.error(text)
    return Promise.reject(error);
});
export default instance