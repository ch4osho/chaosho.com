import Vue from 'vue'
import Vuex from 'vuex'

import getters from '../getters/index.js'
import mutations from '../Mutations/index.js'
import actions from '../actions/index.js'


Vue.use(Vuex)


const state = {
    showQrcode: false
}


module.exports = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})