<template>
    <section class="full-section">
        <div class="nav" v-if="needPas">
            <div class="bar">
                <div v-for="item in routerList" :key="item.name" class="bar-item" @click="changeView(item.name)">
                    {{item.label}}
                </div>
            </div>
            
            <div class="move-bar" :style="{'left': (2 * this.$route.meta.index - 1) * 12.5 + '%'}"></div>
        </div>

        <!-- <keep-alive>
            <router-view></router-view>
        </keep-alive> -->

        <popup v-else @enterPassword="enterPassword"></popup>

        <div class="view">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import Popup from './components/global/popup.vue'
export default {
    data: function (){
        return {
            needPas: false,
            routerList: [{
                name: 'game',
                label: '我'
            },{
                name: 'music',
                label: '工作经历'
            },{
                name: 'movie',
                label: '自我评价'
            },{
                name: 'mine',
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
            this.needPas = true
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
        margin-top: 2.15rem;
        height: calc(100% - 2.15rem);
    }
</style>