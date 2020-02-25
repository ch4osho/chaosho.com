<template>
  <section id="appraisal" class="full-section">
    <my-scroller :infinite="infinite">
      <div class="contanier">
        <!-- <div class="card">
          <p class="title">个人评价</p>
        </div> -->
        <div class="card">
          <div class="title">个人评价</div>
          <ul class="comment">
            <li v-for="(comment,i) in commentList" :key="i" class="comment-item" v-html="comment"></li>
          </ul>
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
            commentList: [
        '兴趣广泛，拒绝做传统程序员，可以把个人爱好结合到工作中，对工作锦上添花',
        '为人乐观随和，热心帮助同事解决各种问题，乐于与后端人员愉快融洽共同协作',
        '有保持学习的习惯，关注业界技术发展动态，乐于分享技术，交流经验，虚心求知',
        '刻苦耐劳，对于自己工作的会尽十二分努力去完成，对一些感兴趣的开发，会通宵的去钻研',
        '有后端开发思想模式，应用于前端开发，能和后端开发人员更愉快，高效；',
        '需要对外工作对接时，能够做到维护公司形象，保护公司利益，提高公司在外的的公共形象',
        '具备良好的沟通能力和团队协作精神，较强的学习能力和逻辑分析能力',
        '熟悉页面架构和布局，良好的前端编程能力和编程习惯；',
        '对交互设计有独特见解，洞悉客户交互习惯'
      ]
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
