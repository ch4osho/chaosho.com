
/* ---------- action ---------- */

// 控制侧边栏
export const changeAsideStatus = payload => {
    return {
        type: 'CHANGE_ASIDE_STATE',
        payload
    }
}

// 控制登录弹窗
export const changeLoginStatus = payload => {
    return {
        type: 'CHANGE_LOGIN_STATE',
        payload
    }
}

// 检查是否的登录
export const checkLoginStatus = payload => {
    return {
        type: 'CHECK_LOGIN_STATE',
        payload
    }
}

// 修改账号个人信息
export const editUserInfo = payload => {
    return {
        type: 'CHANGE_USER_INFO',
        payload
    }
}

// 切换当前选项
export const changeCurrentOption = payload => {
    return {
        type: 'CHANGE_CURRENT_OPTION',
        payload
    }
}

// 检查是否实名制
export const chekAuth = payload => {
    return {
        type: 'CHECK_AUTH',
        payload
    }
}

// 显示支付
export const changePayStatus = payload => {
    return {
        type: 'CHANGE_PAY_STATUS',
        payload
    }
}