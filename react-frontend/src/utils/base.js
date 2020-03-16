import JSEncrypt from 'jsencrypt'
import userModel from './../model/user'

/* ---------- 常用方法 ---------- */
// 解析URL參數
const parseUrl = (link) => {
  var url = decodeURI(link);
  var obj = {},
    keyvalue = [],
    key = "",
    value = "",
    paraString = "",
    num = url.indexOf("?");

  paraString = url.substr(num + 1);
  paraString = paraString.split("&");
  for (var i in paraString) {
    keyvalue = paraString[i].split("=");
    key = keyvalue[0];
    value = keyvalue[1];
    obj[key] = value;
  }
  return obj;
};
// 获得系统版本
const getSystem = () => {
  let system = "Other";
  if (/(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)) {
    system = "iOS";
  } else if (/(Android)/i.test(window.navigator.userAgent)) {
    system = "android";
  }

  return system;
};
//判断是否是微信浏览器的函数
const isWeiXin = function(){
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if(ua.match(/MicroMessenger/i) == "micromessenger"){
    return true;
  }else{
    return false;
  }
};

// 判断是否安卓H5
const  isAndroidH5 = function() {
  if (navigator.userAgent.indexOf("RastarH5Client") > -1) {
    return true;
  } else {
    return false;
  }
};

// 获取是否在手机QQ浏览器中
const getIsQQ = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.match(/MQQBrowser/i) == "mqqbrowser") {
    return true;
  } else {
    return false;
  }
};

/* ---------- 公共事件 ---------- */
// 弹出弹窗
const message = (text, type) => {
  let closeText = "";
  if (type == "back") closeText = "返回";
  else if (type == "close") closeText = "关闭";

  const div = document.createElement("div");
  div.className = "message-mask";
  div.innerHTML = "<div class='message'><div class='m-body'><p class='b-text'>" + text + "</p></div><div class='m-footer'><p id='close' class='f-text'>" + closeText + "<p></div></div>";
  document.body.appendChild(div);

  const close = document.getElementById("close");
  close.onclick = function () {
    if (type == "back") {
      window.history.back();
    } else if (type == "close") {
      document.body.removeChild(div);
    }
  };
};
const toast = async text => {
  const div = document.createElement("div");
  div.id = "toast";
  div.className = "toast";
  div.innerHTML = text;

  if (!document.getElementById("toast")) document.body.appendChild(div);

  await new Promise((resolve) => {
    setTimeout(() => {
      div.className = "toast active";
      resolve();
    }, 300);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      div.className = "toast";
      resolve();
    }, 3000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      document.body.removeChild(div);
      resolve();
    }, 300);
  });
};
/* ---------- 本地存储 ---------- */
// 设置LocalStorage
var localStorageSet = function (name, obj) {
  if (!name || !obj) {
    console.log("name,obj：参数不能为空！");
    return;
  }
  window.localStorage.setItem(name, JSON.stringify(obj));
};
// 获得LocalStorage
var localStorageGet = function (name) {
  if (!name) {
    console.log("locDbGet(name): name参数不能为空！");
    return;
  }
  return JSON.parse(window.localStorage.getItem(name)) || {};
};

const encrypt = (data) => {
  let jse = new JSEncrypt();
  let key = localStorageGet('publicKey')
  let publicKey = `-----BEGIN PUBLIC KEY-----
${key}
-----END PUBLIC KEY-----`
  if (typeof data == 'object') {
    data = JSON.stringify(data)
  }
  jse.setPublicKey(publicKey)
  const encryptKey = jse.encrypt(data)
  return encryptKey
}
// 获取token
const getToken = async (obj) => {
  let urlData = localStorageGet('urlData')
  let data = {
    cch_id: urlData.cch_id,
    app_id: urlData.app_id
  }
  
  if (obj) {
    for (var item in obj) {
      data[item] = obj[item]
    }
  }

  let suc = await userModel.getToken(data)
  if (suc.code == 200) {
    localStorageSet("token", suc.data.token)
    localStorageSet("publicKey", suc.data.pub_key)
    return new Promise((resolve) => {
      resolve(suc.data)
    });
  }
}

/* ---------- cookie ---------- */

const setCookie = function (cname, value, days) {
  var exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie.match(new RegExp("(^| )" + cname + "=([^;]*)(;|$)"));
  document.cookie = cname + "=" + escape(value) + ";expires=" + exp.toGMTString();
};

const getCookie = function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

const checkSysteam = function () {
  var mType = '';
  if (/(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|Mobile)/i.test(navigator.userAgent)) {
    mType = 'MOBILE';
  } else {
    mType = 'PC';
  }
  return mType;
}

export default {
  // 常用方法
  parseUrl,
  getSystem,
  isWeiXin,
  getIsQQ,
  // 公共事件
  message,
  toast,
  // 本地存储
  localStorageSet,
  localStorageGet,
  // 加密
  encrypt,
  // 获取token
  getToken,
  // cookie
  setCookie,
  getCookie,
  checkSysteam,
  isAndroidH5
};