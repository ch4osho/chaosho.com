<template>
  <section id="game" style="width: 100%; height:100%">
    <my-scroller :refresh="getIndexInfo" @scroll="onScroll">
      <div class="title">
        <h1>工作经历</h1>
      </div>
      <ul id="noDelegation">
        <li v-for="item in 50" :key="item" @click="noDelegation(item)">{{item}}:{{Math.random() * 100}}</li>
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
      cp: 'cp'
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
<style>

</style>