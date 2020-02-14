<template>
    <div id="chaos">
        <!-- <h1>index</h1> -->

        <!-- <router-link v-for="item in routerList" :to="{name: item.name}" :key="item.name" tag="button">{{item.name}}</router-link> -->

        <!-- <keep-alive>
            <router-view></router-view>
        </keep-alive> -->
        <!-- <router-view></router-view> -->
        <p class="me">我是何超豪</p>
    <span v-for="item in 520" :key="item">陈佩纯<span v-if="item == 150" class="love">我爱你</span>
    </span>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            routerList: [{
                name: 'game'
            },{
                name: 'music',
            },{
                name: 'movie',
            },{
                name: 'mine',
            }]
        }
    }
}
</script>

<style>
    .me{
        margin: 5px 0px
    }
    .love{
        color: red
    }
</style>