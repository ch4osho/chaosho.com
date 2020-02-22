import Vue from "vue"
import App from "./app.vue"
import router from './router/index.js'
import Scroller from 'scroller'
import Echarts from 'echarts'
import store from './vuex/store/index.js'

Vue.use(Scroller)

Vue.prototype.$Vue = Vue

Vue.prototype.$echarts = Echarts

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#chaos')