<template>
    <div class="full-section" id="chaos">
        <div class="full-section" v-show="passwordRight">

            <!-- 顶部导航栏 -->
            <div class="nav">
                <div class="bar">
                    <div v-for="item in routerList" :key="item.name" class="bar-item" @click="changeView(item.name)">
                        {{item.label}}
                    </div>
                </div>
                <div class="move-bar" :style="{'left': (2 * this.$route.meta.index - 1) * 12.5 + '%'}"></div>
            </div>

            <!-- 渲染区域 -->
            <div class="view">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>


        <popup v-show="!passwordRight" @enterPassword="enterPassword"></popup>
    </div>
</template>

<script>
import Popup from './components/global/popup.vue'
export default {
    data: function (){
        return {
            // needPas: false,
            passwordRight: false,
            routerList: [{
                name: 'index',
                label: '我'
            },{
                name: 'exp',
                label: '工作经历'
            },{
                name: 'appraisal',
                label: '自我评价'
            },{
                name: 'more',
                label: '更多'
            }]
        }
    },
    components: {
        Popup
    },
    methods: {
        changeView(name){
            this.$router.push({
                name: name
            })
        },
        enterPassword(){
            this.passwordRight = true
        }
    }
}
</script>

<style lang="scss" src="./sass/base.scss"></style>
<style lang="scss">
    .nav{
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        z-index: 999;
        .bar{
            width: 100vw;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .bar-item{
                height: 1rem;
                width: 4rem;
                font-size: .75rem;
                text-align: center
            }
        }

        .move-bar{
            width: 2rem;
            height: .15rem;
            background: black;
            position: relative;
            left: 12.5%;
            transform: translateX(-50%);
            transition: left .25s linear
        }
    }

    .view{
        overflow: hidden;
        position: fixed;
        width: 100%;
        // margin-top: 2.15rem;
        left: 0;
        top: 2.15rem;
        background: #ededed;
        height: calc(100% - 2.15rem);
    }
</style>