/**
 * 业务层，根据不同的业务需求，提供对应的请求（与封装好的http交互）
 */
import http from "./http.js";

// 获取验证码，这个函数指的是使用GET请求请求目标服务器的Captcha路由
export function getCaptcha() {
  return http.get("/captcha");
}

// 验证用户名和密码，这里指的是使用POST方法请求Login接口，并携带params对象作为参数。
export function verifyUserNameAPI(params) {
  return http.post("/login", params);
}

// 获取注册验证码
export function getRegisterCode(params) {
  // console.log("getRegisterCode - params ");
  // console.log(params);
  return http.get("/registerCode", params);
}

// 注册
export function doRegister(params) {
  return http.post("/register", params);
}

// 密码登录
export function loginWithUNameAndPwd(params) {
  return http.post("/loginPwd", params);
}

// 获取修改密码验证码
export function getUpdatePwdCode(params) {
  return http.get("/updatePwdCode", params);
}

// 获取修改密码验证码
export function doUpdatePwd(params) {
  return http.post("/updatePwd", params);
}

// 获取用户信息
export function getUserInfo(params) {
  return http.get("/userInfo", params);
}
export function getUserList(params) {
  return http.get("/users", params);
}

// 获取设备列表
/**
 *
 * */

export function getDeviceList(params) {
  return http.get("/rft/getNewDevices", params);
}
// http://hvac.365env.com/rft/getNewDevices?user_id=10000014