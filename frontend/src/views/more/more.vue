<template>
  <section id="more" class="full-section">
    <my-scroller>
      <div class="contanier">
        <div class="card">
          <p class="title">更多</p>
        </div>
        <div class="card">
          <ul id="noDelegation">
            <li v-for="item in 50" :key="item" @click="noDelegation(item)">{{item}}:{{Math.random() * 100}}</li>
          </ul>
        </div>
      </div>
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
      // console.log(2)
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

<style lang="scss" src="./more.scss" scoped></style>
