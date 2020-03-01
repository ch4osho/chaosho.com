import VueRouter from 'vue-router'
import Vue from 'vue'
import index from './../views/index/index.vue'
import exp from './../views/exp/exp.vue'
import appraisal from './../views/appraisal/appraisal.vue'
import more from './../views/more/more.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', component: index, name: 'index', meta: {index: 1}},
        { path: '/exp', component: exp, name: 'exp', meta: {index: 2}},
        { path: '/appraisal', component: appraisal, name: 'appraisal', meta: {index: 3}},
        { path: '/more', component: more, name: 'more', meta: {index: 4}},

    ]
})



const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}