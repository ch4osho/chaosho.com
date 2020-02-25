<template>
  <section id="appraisal" class="full-section">
    <my-scroller :infinite="infinite">
      <div class="contanier">
        <div class="card">
          <p class="title">暂未开发</p>
        </div>
      </div>
    </my-scroller>
  </section>
</template>

<script>
import MyScroller from '@components/global/scroller.vue'
export default {
  data: function(){
    return {
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
    },
    infinite(e){
      // console.log(e)
      e(true)
      // console.log(444)
    }
  },
  created(){
  }
}
</script>
<style lang="scss" src="./appraisal.scss" scoped></style>
