<template>
  <section id="game">
    <my-scroller :refresh="getIndexInfo" @scroll="onScroll">
      <div class="title">
        <h1>我</h1>
      </div>
      <ul id="noDelegation">
        <li v-for="item in 30" :key="item" @click="noDelegation(item)">{{item}}{{Math.random() * 100}}</li>
      </ul>
    </my-scroller>
  </section>
</template>

<script>
import MyScroller from '@components/global/scroller.vue'
import Mock from 'mockjs'
export default {
  data: function(){
    return {
      number: 0,
    }
  },
  components: {
    MyScroller
  },
  methods:{
    getIndexInfo(e){
      e()
      console.log(1)
    },
    onScroll(){
      console.log(2)
    },
    noDelegation(e){
      console.log(e)
    }
  },
  created(){
  },

  mounted(){
    var data = Mock.mock({
      'list|4': [{
        'id|+1': 1,
        name: Mock.Random.cname()
      }]
    })

    console.log(data)
  },
}
</script>

<style lang="scss" src="./game.scss"></style>