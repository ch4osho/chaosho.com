export default {
  /* ---------- 用户 ---------- */
  // 同步登陆
  syncLogin: "/sdk/v1/webpage/SyncLogin/_do",
  // 用户等级
  getVipInfo: "/sdk/v1/webpage/VipInfo/_do",

  /* ---------- 礼包 ---------- */
  // 获得礼包列表
  getActivityList: "/gifts",
  // 获得存宝箱列表
  getBoxList: "/treasureBox",
  // 领取礼包
  doleGift: "/doleGift",

  /* ---------- 数据埋点 ---------- */
  // 数据埋点
  collect: "/v2/Dot/cl",

  /* ---------- 用户 ---------- */
  // 发送验证码
  sendCode: '/v1/vcode/send',
  // 发送互通验证码
  sendInterflowCode: "/v1/mobile/vcode",
  // 注册
  register: '/v1/reg',
  // 手机登录
  loginMobile: "/v1/mobile/login",
  // 实名认证
  bindRealName: '/v1/id/bind',
  // 获取实名认证信息
  getRealName: '/v1/id/confirm',
  // 实名认证日志情况上报接口
  reportRealName: '/v1/id/report',
  // 获取账号密码
  getAccount: '/v1/account/generate',
  // 获取图形验证码
  getCodeMessage: "/v1/captcha",



/*-----------------新的--------------*/
  // 登录
  login: "/v1/login",

  // 获取token
  getToken: "/v1/token",

  // 进入游戏
  getGameUrl:  "/v1/rastar/enter",

  // 获取用户信息
  getUserinfo: "/v1/uinfo",

  // 获取推荐游戏列表
  getGameList:  "/v1/app/recommend",

  // 获取实名认证信息
  getRealName: "/v1/id/confirm",

  // 实名认证
  bindRealName: "/v1/id/bind",

  // 自动获取账号
  getAccount: "/v1/account/generate",

  // 注册
  register: "/v1/reg",

  // 发送验证码
  sendCode: "/v1/vcode/send",

  // 获取图形验证码
  getCodeMessage: "/v1/captcha",

  // 创建订单
  createOrder: "/h5/v2/h5sdk/CreateOrder",

  // sdk角色上报
  RaStarUpload:  "/v1/report/RoleAction",
};