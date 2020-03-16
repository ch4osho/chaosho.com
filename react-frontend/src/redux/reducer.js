import { combineReducers } from 'redux'

const userState = {
    username: '',
    userId: '',
}

const showAside = false

const showLogin = false

const ifLogin = false

const curOption = 1

const ifAuth = false

const ifPay = false

/* ---------- reducer ---------- */
// 妈的这里有坑，不能直接返回原来state,不然不会触发改变

const user = (state = userState, action) => {
    switch(action.type) {
        case 'CHANGE_USER_INFO':
            return action.payload
        default:
            return state
    }
};

const loginState = (state = showLogin, action)=>{
    switch(action.type){
        case 'CHANGE_LOGIN_STATE':
            return action.payload
        default:
            return state
    }
}

const asideState = (state = showAside, action)=>{
    switch(action.type){
        case 'CHANGE_ASIDE_STATE':
            return action.payload
        default:
            return state
    }
}

const isLogin = (state = ifLogin, action) => {
    switch(action.type){
        case 'CHECK_LOGIN_STATE':
            return action.payload
        default:
            return state
    }
}


const currentOption = (state = curOption, action) => {
    switch(action.type){
        case 'CHANGE_CURRENT_OPTION':
            return action.payload
        default:
            return state
    }
}


const isAuth = (state = ifAuth, action) => {
    switch(action.type){
        case 'CHECK_AUTH':
            return action.payload
        default:
            return state
    }
}

const isPay = (state = ifPay, action) => {
    switch(action.type){
        case 'CHANGE_PAY_STATUS':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({user, loginState, asideState, isLogin, currentOption, isAuth, isPay})
