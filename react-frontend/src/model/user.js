import api from 'api'
import { getFetch } from './../utils/request.js'


const userModel = {
    // 获取token
    getToken: async (data = {}) => {
        const success = await getFetch(api.getToken, data);
        return success;
      },

    // 登录
    login: async(data = {}) => {
        const res = await getFetch(api.login, data)
        return res
    },

    // 获取个人信息
    getUserInfo: async(data= {}) => {
        const res = await getFetch(api.getUserinfo, data)
        return res
    },

    // 获取用户绑定信息
    getRealName: async(data= {}) => {
        const res = await  getFetch(api.getRealName, data)
        return res
    },

    // 实名认证
    bindRealName: async (data= {}) => {
        const res = await getFetch(api.bindRealName, data);
        return res;
    },

    // 自动获取账号
    getAccount: async (data= {}) => {
        const res = await getFetch(api.getAccount, data);
        return res
    },

    // 注册
    register: async (data= {}) => {
        const res = await getFetch(api.register, data);
        return res
    },

    // 发送验证码
    sendCode: async (data= {}) => {
        const res = await getFetch(api.sendCode, data);
        return res
    },
}


export default userModel