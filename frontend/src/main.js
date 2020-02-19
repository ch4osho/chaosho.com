import Vue from "vue"
import App from "./app.vue"
import router from './router/index.js'
import Scroller from 'scroller'

Vue.use(Scroller)

Vue.prototype.$Vue = Vue

new Vue({
    router,
    render: h => h(App)
}).$mount('#chaos')