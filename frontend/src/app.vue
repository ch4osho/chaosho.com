<template>
    <div class="full-section" id="chaos">
        <div class="full-section" v-if="passwordRight">

            <!-- 顶部导航栏 -->
            <div class="nav">
                <div class="bar">
                    <div v-for="item in routerList" :key="item.name" class="bar-item" @click="changeView(item.name)">
                        <span>{{item.label}}</span>
                    </div>
                </div>
                <div class="move-bar" :style="{'left': (2 * this.$route.meta.index - 1) * 12.5 + '%'}"></div>
            </div>

            <!-- 渲染区域 -->
            <div class="view" @touchstart="touchstart" @touchend="touchend">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>


        <popup v-if="!passwordRight">
            <template #header>
                <span>确认身份</span>
            </template>
            <input type="text" placeholder="输入密码" v-model="password" style="text-align: center">
            <template #footer>
                {{warm}}
            </template>
        </popup>

        <popup v-if="showQrcode" :showClose="true" @close="closeQrcode">
            <template #header>
                <span>交个朋友，微信识别二维码吧(*^▽^*)</span>
            </template>
            <img :src="qrcodeUrl" alt="">
            <template #footer>
                <a href="weixin://">拉起微信</a>
            </template>
        </popup>
    </div>
</template>

<script>
import Popup from './components/global/popup.vue'
export default {
    data: function (){
        return {
            password: '',
            warm: '猜一下',
            passwordRight: true,
            qrcodeUrl: 'http://chaosho.com/static/images/qrcode.png',
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
            }],
            touchStartPoint: null,
            touchEndPoint: null
        }
    },
    components: {
        Popup
    },
    watch: {
        password: function(){
            if(this.password != 1) {
                this.warm = '错误'
            } else {
                this.warm = '正确'
                this.enterPassword()
            }
        }
    },
    computed: {
        showQrcode(){
            return this.$store.getters.showQrcode
        }
    },
    mounted(){
        console.log('这是showQrCode',this.showQrcode)
    },
    methods: {
        changeView(name){
            this.$router.push({
                name: name
            })
        },
        closeQrcode(){
            this.$store.dispatch('switchQrcode', false)
        },
        enterPassword(){
            this.passwordRight = true
        },
        touchstart(e){
            console.log('touchstart',e)
            this.touchStartPoint = e.changedTouches[0]
        },
        touchend(e){
            console.log('touchend',e)
            this.touchEndPoint = e.changedTouches[0]
            if(Math.abs(this.touchEndPoint.screenX - this.touchStartPoint.screenX)  > 10 && Math.abs(this.touchEndPoint.screenY - this.touchStartPoint.screenY) < 20){
                this.switchRouter(this.touchEndPoint.screenX - this.touchStartPoint.screenX,this.$route.meta.index)
            }
            switch(this.$route.meta.index){

            }
            this.touchStartPoint = null;
            this.touchEndPoint = null;
        },
        switchRouter(direction, nowIndex){
            let temp = direction > 0 ? -1 : 1;
            try{
                this.$router.push(this.routerList[this.$route.meta.index - 1 + temp])
            } catch(err){
                console.log(err)
            }
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
        z-index: 10;
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
            transition: left .25s linear;
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