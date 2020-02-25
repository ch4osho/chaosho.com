<template>
  <section id="exp" class="full-section">
    <my-scroller :refresh="getIndexInfo" @scroll="onScroll" :infinite="infinite" ref="sroller">
      <div class="contanier">
        <!-- <div class="card">
          <p class="title">工作经历</p>
        </div> -->
        <div class="card">
          <div class="company" v-for="company in expCompany" :key="company.companyName">
            <div class="exp-title">
                <div class="years">{{company.year}}</div>
              </div>
              <div class="time-item">
                <div class="time-left"></div>
                <div class="time-right">
                  <div class="company-right">
                    <img :src="company.picUrl" alt="">
                    <div class="company-right-des">
                      <p class="company-name">{{company.companyName}}</p>
                      <p><span>{{company.apartment}}</span>&nbsp;<span>{{company.position}}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            <div class="time-item" v-for="project in company.projectExp" :key="project.projectName">
                <div class="time-left">{{project.time}}月</div>
                <div class="time-right">
                  <div class="projectName">{{project.projectName}}</div>
                  <div class="projectUrl" @click="showProjectWebsite(project.projectUrl)">{{project.projectUrl}}</div>
                  <div class="projecyDes">{{project.projectDes}}</div>
                </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </my-scroller>

      <div class="goTop" @click="goTop">
        <span>Top</span>
      </div>
    <transition name="fade" v-if="showProject">
      <popup :showClose="true" @close="close" :isIframe="true">
        <iframe :src="currentIframeUrl"></iframe>
      </popup>
    </transition>
    
  </section>
</template>

<script>
import MyScroller from '@components/global/scroller.vue'
import Popup from '@components/global/popup.vue'
export default {
  data: function(){
    return {
      currentIframeUrl: null,
      showProject: false,
      expCompany: [
        {
          companyName: '广州凡科互联网科技股份有限公司',
          year: '2019-2020',
          position: '开发工程师',
          apartment: '数媒研发部',
          picUrl: require('./../../sass/faisco.jpeg'),
          projectExp: [
            {
              projectName: '凡科快图',
              time: 12,
              projectUrl: 'kt.fkw.com',
              projectDes: '主要负责的是凡科快图的编辑态的开发，一个简单好用的在线作图工具，用户可以快速上传素材、图片进行加工，添加自定	义艺术字，预览编辑的图片，实时查看编辑图片的缩略图等，项目难点在于canvas和svg的运用，封装各种类，通过拖拽	操作，进行图片编辑，并支持撤销重做，即保存每一步用户的操作历史；最后把操作区域中的canvas和svg元素转化为	base64进行预览或者保存；'
            }
          ]
        },{
          companyName: '广州星辉娱乐有限公司',
          year: '2018-2019',
          position: 'web前端开发工程师',
          apartment: '技术中心',
          picUrl: require('./../../sass/rastar.jpeg'),
          projectExp: [
            {
              projectName: '星辉游戏移动端主站开发（国内，海外）',
              time: 11,
              projectUrl: 'm.rastargame.com',
              projectDes: '国内移动主站（m.rastargame.com）和海外主站（m.etolies.com）是采用webpack + vue + axios +vuex，为技术栈的单页面动态应用，前端框架为vue.js，前后端交互使用axios，前端路由使用vue-router，打包上线用的是webpack + babel，项目主要面向用户提供一个类似于本地app的用户体验，玩家用户可以在上面领取到星辉游戏的相关游戏礼包，看到相关的游戏资讯、游戏论坛、、游戏实体商店和在线客服系统，甚至有h5游戏的入口和手游的下载，海外的移动主站支持海外充值。'
            },
            {
              projectName: '海外星河游戏PC端主站',
              time: 8,
              projectUrl: 'www.etolies.com',
              projectDes: '海外PC主站（www.etolies.com）面向海外的星辉游戏门户网站，采用jquery + larvel + vue.js + elementUi为技术栈，由于是海外主站，所以用到vue-i18n切换网站的简繁中文和英文，考虑到SEO的问题，采用了jquery作为基础框架，基于一些已有的接口和设计上，客服系统是采取larvel + vue.js实现的，其中涉及到larvel中的vue组件开发和打包技术。玩家用户可以在客服系统中提单，和查询各个游戏的常见问题和解决方案。'
            },
            {
              projectName: '星辉游戏管理后台',
              time: 5,
              projectUrl: '内部系统，无链接展示',
              projectDes: '技术栈是vue.js + webpack + element-ui，这个项目的主要难点在于权限控制，采用后端控制前端权限，后端返回用户角色权限，前端路由匹配渲染路由表，达到不同权限的控制，最高权限角色可以分配所拥有角色的权限，（权限包括一些游戏参数配置，主游戏，子游戏的增删改，游戏渠道参数的配置，甚至数据的导出），加上布局是用element-ui，实现有导入excel数据，下载文本，表格数据可视化等功能。'
            },
            {
              projectName: '星辉官网手游SDK',
              time: 2,
              projectUrl: 'ios和安卓的星辉游戏内部链接',
              projectDes: '该项目应用于安卓和ios客户端的webview内嵌页面，技术栈是vue+webpack多页面开发，其中涉及到一些和安卓、ios的系统交互，客户端拼接url前往前端页面，页面通过解析url，通过axios与后端交互，实现动态的礼包页，实名制中心，游戏大厅，藏宝箱，账号绑定等功能的实现，其中vip在线客服系统使用了websocket，实现了实时信息传递的功能；其余也涉及到vue组件化开发，localstorage的数据存储。'
            },
            {
              projectName: '星辉官网SDK',
              time: '18年10',
              projectUrl: 'm.rastargame.com',
              projectDes: '技术栈是react.js + webpack + redux + antd，该项目是为h5小游戏的sdk，为星辉h5游戏提供一个可拖拽悬浮球导航，里面集成游戏登录，游戏注册，密码修改，实名认证，切换账号等玩家基本功能，redux做为视图状态的状态储存，对于一些在多个页面需要都会用到的控制变量做统一管理，webpack做单页面打包，某些组件按需引入了antd框架，axios作为前后端数据交互。也运用了iframe的postMessage跨页面通讯的技术等...'
            }
          ]
        }
      ]
    }
  },
  components: {
    MyScroller,
    Popup
  },
  methods:{
    showProjectWebsite(url){
      if(url.indexOf('com') == -1) return
      this.showProject = true
      this.currentIframeUrl = 'http://' + url
    },
    close(){
      this.showProject = false
      this.currentIframeUrl = null
    },
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
    },
    goTop(){
      this.$refs.sroller.scrollTo(0,true)
    }
  },
  created(){
  }
}
</script>


<style lang="scss" src="./exp.scss" scoped></style>
