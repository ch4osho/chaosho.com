const h5GameUrl = "//h5game.rastargame.com";
const payUrl = "//apppay.rastargame.com"

export default {
  // 登录
  login: h5GameUrl + "/v1/login",

  // 获取token
  getToken: h5GameUrl + "/v1/token",

  // 进入游戏
  getGameUrl: h5GameUrl + "/v1/rastar/enter",

  // 获取用户信息
  getUserinfo: h5GameUrl + "/v1/uinfo",

  // 获取推荐游戏列表
  getGameList:  h5GameUrl + "/v1/app/recommend",

  // 获取实名认证信息
  getRealName: h5GameUrl + "/v1/id/confirm",

  // 实名认证
  bindRealName: h5GameUrl + "/v1/id/bind",

  // 自动获取账号
  getAccount: h5GameUrl + "/v1/account/generate",

  // 注册
  register: h5GameUrl + "/v1/reg",

  // 发送验证码
  sendCode: h5GameUrl + "/v1/vcode/send",

  // 获取图形验证码
  getCodeMessage: h5GameUrl + "/v1/captcha",

  // 创建订单
  createOrder: payUrl + "/h5/v2/h5sdk/CreateOrder",

  // sdk角色上报
  RaStarUpload:  h5GameUrl + "/v1/report/RoleAction",

};