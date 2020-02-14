import Vue from "vue"
import App from "./app.vue"
import router from './router/index.js'

Vue.prototype.$Vue = Vue

var app = new Vue({
    router,
    render: h => h(App)
}).$mount('#chaos')