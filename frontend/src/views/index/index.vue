<template>
  <section id="game" class="full-section">
    <my-scroller :refresh="getIndexInfo">
      <div class="contanier">
        <div class="card flex">
          <div class="qrcode" @click="showQrcode"></div>
          <div class="avator">
            <img :src="personInfo.avatorUrl" alt="">
          </div>
          <div class="des">
            <div class="name-container">
              <div class="name-content" @click="switchName" ref="switchContent" :style="{transform : showName ? 'translateX(0)' :'translateX(-50%)'}">
                <div class="switch">{{personInfo.name}}</div>
                <div class="switch">{{personInfo.englishName}}</div>
              </div>
            </div>
            <div class="less-des">{{personInfo.workYears}}年工作经验 / {{personInfo.level}} / {{personInfo.years}}岁</div>
            <div class="moreInfo" v-if="showDetail">
              <div class="item">
                <span class="label">毕业院校：</span><span>{{personInfo.schools}}</span><span class="smaller"> (2019届)</span>
              </div>
              <div class="item">
                <span class="label">专业：</span><span>{{personInfo.professional}}</span>
              </div>
              <div class="item">
                <span class="label">手机：</span><span>{{personInfo.tel}}</span>
              </div>
              <div class="item">
                <span class="label">邮箱：</span><span>{{personInfo.email}}</span>
              </div>
              <div class="item">
                <span class="label">生日：</span><span>{{personInfo.birthday}}</span>
              </div>
              <!-- <div class="item">
                <span class="smaller">{{personInfo.github}}</span>
              </div> -->
              <div class="tagBox">
                <div class="tag" v-for="tag in personInfo.tagsList" :key="tag.label" :style="{color:tag.color, border: `1px solid ${tag.color}`}">{{tag.label}}</div>
              </div>
            </div>
            <div class="animation" @click="showMore">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="10px" width="14px" v-show="!showDetail">
                <path d="M2 0 L7 5 L12 0" style="fill:white;stroke:red;stroke-width:2"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="10px" width="14px" v-show="showDetail">
                <path d="M2 5 L7 1 L12 5" style="fill:white;stroke:red;stroke-width:2"></path>
              </svg>
            </div>
          </div>
        </div>
        <skill></skill>
      </div>
      <icp-footer></icp-footer>
    </my-scroller>
  </section>
</template>

<script>
import MyScroller from '@components/global/scroller.vue'
import Skill from './skill.vue'
import IcpFooter from './IpcFooter.vue'
export default {
  data: function(){
    return {
      number: 0,
    }
  },
  components: {
    MyScroller,
    Skill,
    IcpFooter,
  },
  methods:{
    getIndexInfo(e){
      e()
      console.log(1)
    },
    switchName(){
      this.showName = !this.showName
    },
    showMore(){
      this.showDetail = !this.showDetail
    },
    showQrcode(){
      this.$store.dispatch('switchQrcode', true)
    },
    rgb(){
			var r = Math.floor(Math.random()*256);
			var g = Math.floor(Math.random()*256);
			var b = Math.floor(Math.random()*256);
			var rgb = 'rgb('+r+','+g+','+b+')';
			return rgb;
		}
  },
  created(){
    const that = this
    this.personInfo.tagsList = this.personInfo.tagsList.map(item=>{
      let obj = {}
      obj.label = item
      obj.color = that.rgb()
      return obj
    })
    console.log(this.personInfo.tagsList)
  },
  updated(){
    console.log('进去了updated')
  },
  data: function(){
    return {
      showName: true,
      showDetail: false,
      personInfo: {
        name: '何超豪',
        englishName: 'chaos',
        schools: '广东工业大学',
        professional: '数字媒体技术',
        level: '本科统招',
        workYears: '1.5',
        years: 22,
        github: 'github.com/ch4osho/myWebRoad',
        avatorUrl: 'http://www.chaosho.com/static/images/cat.jpeg',
        tagsList: ['幽默','探险','钻研','音乐','电影','有责任心','王者荣耀','LOL','97后','果粉','爱女友','热爱前端，向往全栈'],
        birthday: '1997/11/25',
        tel: '15626258839',
        email: '1414249719@qq.com'
      }
    }
  }
}
</script>

<style lang="scss" src="./index.scss" scoped></style>