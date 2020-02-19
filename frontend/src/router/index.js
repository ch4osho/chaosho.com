import VueRouter from 'vue-router'
import Vue from 'vue'
import game from './../views/game/game.vue'
import music from './../views/music/music.vue'
import movie from './../views/movie/movie.vue'
import mine from './../views/mine/mine.vue'

Vue.use(VueRouter)

// const game = require('./../views/game/game.vue')
// const music = require('./../views/music/music.vue')
// const movie = require('./../views/movie/movie.vue')
// const mine = require('./../views/mine/mine.vue')

export default new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', component: game, name: 'game', meta: {index: 1}},
        { path: '/music', component: music, name: 'music', meta: {index: 2}},
        { path: '/movie', component: movie, name: 'movie', meta: {index: 3}},
        { path: '/mine', component: mine, name: 'mine', meta: {index: 4}},

    ]
})



const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}