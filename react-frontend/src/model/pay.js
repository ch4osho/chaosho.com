import api from 'api'
import { getFetch } from './../utils/request.js'


const payModel = {
    // 创建订单
    createOrder: async function(data) {
        const res = await getFetch(api.createOrder, data)
        return res
    }
}


export default payModel