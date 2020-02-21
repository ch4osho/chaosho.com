<template>
  <section id="game" class="full-section">
    <my-scroller :refresh="getIndexInfo" @scroll="onScroll" :infinite="infinite">
      <div class="contanier">
        <div class="card">
        <p class="title">何超豪 ---- chaos</p>
        </div>
        <div class="card">
          <ul id="noDelegation">
          <li v-for="item in 50" :key="item" @click="noDelegation(item)">{{item}}{{Math.random() * 100}}</li>
        </ul>
        </div>
      </div>
      <footer class="ipc">
        互联网ICP备案：<a href="http://www.beian.miit.gov.cn">粤ICP备19076464号-1</a>
    </footer>
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
    },
    infinite(e){
      // console.log(e)
      e()
      // console.log(444)
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

<style lang="scss" src="./index.scss" scoped></style>