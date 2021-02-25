<template>
  <section id="game" class="full-section">
    <my-scroller
      :refresh="getIndexInfo"
      ref="sroller"
      :refreshText="refreshText"
    >
      <div class="contanier" v-if="false">
        <div class="card flex" ref="card">
          <div class="qrcode" @click="switchQrcode"></div>
          <div class="avator">
            <img :src="require('./../../static/img/cat.jpeg')" alt="" />
          </div>
          <div class="des">
            <div class="name-container">
              <div
                class="name-content"
                @click="switchName"
                ref="switchContent"
                :style="{
                  transform: showName ? 'translateX(0)' : 'translateX(-50%)',
                }"
              >
                <div class="switch">{{ personInfo.name }}</div>
                <div class="switch">{{ personInfo.englishName }}</div>
              </div>
            </div>
            <div class="less-des">
              {{ personInfo.workYears }}年工作经验 / {{ personInfo.level }} /
              {{ personInfo.years }}岁
            </div>
            <div class="moreInfo" v-if="showDetail">
              <div class="item">
                <span class="label">毕业院校：</span
                ><span>{{ personInfo.schools }}</span
                ><span class="smaller"> (2019届)</span>
              </div>
              <div class="item">
                <span class="label">专业：</span
                ><span>{{ personInfo.professional }}</span>
              </div>
              <div class="item">
                <span class="label">手机：</span
                ><span>{{ personInfo.tel }}</span>
              </div>
              <div class="item">
                <span class="label">邮箱：</span
                ><span>{{ personInfo.email }}</span>
              </div>
              <div class="item">
                <span class="label">生日：</span
                ><span>{{ personInfo.birthday }}</span>
              </div>
              <!-- <div class="item">
                <span class="smaller">{{personInfo.github}}</span>
              </div> -->
              <div class="tagBox">
                <div
                  class="tag"
                  v-for="tag in personInfo.tagsList"
                  :key="tag.label"
                  :style="{
                    color: tag.color,
                    border: `1px solid ${tag.color}`,
                  }"
                >
                  {{ tag.label }}
                </div>
              </div>
            </div>
            <div class="animation" @click="showMore">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                height="10px"
                width="14px"
                v-show="!showDetail"
              >
                <path
                  d="M2 0 L7 5 L12 0"
                  style="fill:white;stroke:red;stroke-width:2"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                height="10px"
                width="14px"
                v-show="showDetail"
              >
                <path
                  d="M2 5 L7 1 L12 5"
                  style="fill:white;stroke:red;stroke-width:2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="title">专业技能</div>
          <ul class="comment">
            <li
              v-for="(comment, i) in commentList"
              :key="i"
              class="comment-item"
              v-html="comment"
            ></li>
          </ul>
        </div>
        <skill></skill>
      </div>
      <div class="contanier">
        <!-- <div
          class="fund-card"
          v-for="item in fundData"
          :key="item.FCODE"
          :class="item.GSZZL > 0 ? '' : ''"
        >
          <div class="fund-trend">
            {{ item.GSZZL > 0 ? `+${item.GSZZL}` : item.GSZZL }}
          </div>
          <div class="fund-name">
            {{ item.SHORTNAME }}
          </div>
          <div class="fund-current-value">
            {{ item.NAV }}
          </div>
        </div> -->
        <div class="fund-card">
          <div class="add-fund" @click="showAddFundPopup = true">
            添加基金
          </div>
        </div>
      </div>
      <icp-footer></icp-footer>
    </my-scroller>
    <!-- 二维码框 -->
    <!-- <transition name="fade">
      <popup v-if="showQrcode" :showClose="true" @close="closeQrcode">
        <template #header>
          <span>交个朋友，微信识别二维码吧(*^▽^*)</span>
        </template>
        <img :src="require('./../../static/img/qrcode.jpeg')" alt="" />
        <template #footer>
          <a href="weixin://">拉起微信</a>
        </template>
      </popup>
    </transition> -->

    <div class="goTop" @click="goTop">
      <span>Top</span>
    </div>

    <transition name="fade">
      <popup v-if="showAddFundPopup" :showClose="true" @close="closeFundInput">
        <template #header>
          <span>输入基金代码</span>
        </template>
        <!-- <input type="text" v-model="addFundCode" /><button
          @click="checkAndAddFund"
        >
          添加
        </button> -->
        <el-select
          v-model="addFundCode"
          filterable
          remote
          reserve-keyword
          placeholder="请输入基金代码"
          :remote-method="remoteMethod"
          :loading="false"
          size="small"
        >
          <el-option
            v-for="item in suggestFundList"
            :key="item.CODE"
            :label="`[${item.CODE}]${item.NAME}`"
            :value="item.CODE"
          >
          </el-option>
        </el-select>
        <el-button @click="submit" size="small">确定添加</el-button>
      </popup>
    </transition>
  </section>
</template>

<script>
import MyScroller from "@components/global/scroller.vue";
import Popup from "@components/global/popup.vue";
import Skill from "./skill.vue";
import IcpFooter from "./IpcFooter.vue";
import md5 from "js-md5";
export default {
  name: "index",
  components: {
    MyScroller,
    Skill,
    IcpFooter,
    Popup,
  },
  computed: {
    showQrcode() {
      return this.$store.getters.showQrcode;
    },
  },
  methods: {
    async remoteMethod(query) {
      let that = this;
      function fundCallBack(res) {
        that.suggestFundList = res.Datas;
      }
      if (query != "") {
        this.$axios
          .get(this.$api.fundSuggest, {
            params: {
              callback: "fundCallBack",
              m: 1,
              key: query,
              _: new Date().getTime(),
            },
          })
          .then((res) => {
            // this.suggestFundList = res.Datas;
            // console.log("这是建议返回", res.data);
            eval(`${res.data}`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    submit() {
      if (!this.addFundCode) {
        return this.$toast("请选择基金");
      }

      this.$axios
        .get(this.$api.addFundToDatabase, {
          params: {
            fund_code: this.addFundCode,
            optCode: md5("chaos_add_fund"),
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCallBack(res) {
      console.log(res);
    },
    getIndexInfo(e) {
      this.getFundListData(e);
    },
    switchName() {
      this.showName = !this.showName;
    },
    showMore() {
      if (this.showDetail) {
        this.$refs.card.style.height = "6rem";
      } else {
        this.$refs.card.style.height = "20rem";
      }
      this.showDetail = !this.showDetail;
    },
    switchQrcode() {
      this.$store.dispatch("switchQrcode", true);
    },
    rgb() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = "rgb(" + r + "," + g + "," + b + ")";
      return rgb;
    },
    closeQrcode() {
      this.$store.dispatch("switchQrcode", false);
    },
    closeFundInput() {
      console.log("进来了close了吗");
      this.showAddFundPopup = false;
    },
    goTop() {
      this.$refs.sroller.scrollTo(0, true);
    },
    getFundListData(e) {
      this.refreshText =
        `上一次更新时间：` +
        this.$utils.formatDate("yyyy-MM-dd hh:mm:ss", new Date());
      this.$axios
        .get(this.$api.fundListData, {
          params: {
            pageIndex: 1,
            pageSize: 100,
            appType: "ttjj",
            product: "EFund",
            plat: "Android",
            deviceid: "ebcea167d74e3t29cvafhg9o",
            Version: 1,
            Fcodes: this.fundCodeList.join(","),
          },
        })
        .then((res) => {
          res.data.Datas.sort((a, b) => {
            return b.GSZZL - a.GSZZL;
          });
          this.$set(this, "fundData", res.data.Datas);
          // this.fundData = res.data.Datas;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          e && e();
        });
    },
    getDataBaseFundList() {
      this.$axios
        .get(this.$api.getDatabaseFundList, {
          params: {
            optCode: md5("chaos_all_fund"),
          },
        })
        .then((res) => {
          console.log(res);
          this.$set(
            this,
            "fundCodeList",
            res.data.data.data.map((item) => {
              return item.fund_code;
            })
          );
          this.getFundListData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    const that = this;
    this.personInfo.tagsList = this.personInfo.tagsList.map((item) => {
      let obj = {};
      obj.label = item;
      obj.color = that.rgb();
      return obj;
    });
    this.getDataBaseFundList();
  },
  updated() {
    console.log("进去了updated", this.showAddFundPopup);
  },
  data: function() {
    return {
      suggestFundList: [],
      showName: true,
      showDetail: false,
      refreshText: "",
      fundCodeList: [],
      fundData: [],
      showAddFundPopup: false,
      addFundCode: "",
      personInfo: {
        name: "何超豪",
        englishName: "chaos",
        schools: "广东工业大学",
        professional: "数字媒体技术",
        level: "本科统招",
        workYears: "1.5",
        years: 22,
        github: "github.com/ch4osho/myWebRoad",
        avatorUrl: "http://www.chaosho.com/static/images/cat.jpeg",
        tagsList: [
          "刻苦",
          "探险",
          "钻研",
          "音乐",
          "电影",
          "有责任心",
          "王者荣耀",
          "LOL",
          "97后",
          "果粉",
          "爱女友",
          "热爱前端，向往全栈",
        ],
        birthday: "1997/11/25",
        tel: "15626258839",
        email: "1414249719@qq.com",
      },
      commentList: [
        '英语<span class="high-light">CET-4</span>证书，良好的英文读写能力，能够流利阅读国内外英文API文档',
        '熟悉<span class="high-light">JavaScript</span>面向对象编程,<span class="high-light">HTML5</span>, <span class="high-light">CSS3</span>，DOM标准, AJAX，ES6，熟悉前端模块化思想；',
        '掌握前端主流框架：<span class="high-light">Vue.js</span>，<span class="high-light">React.js</span>，<span class="high-light">jquery.js</span>，element-ui，antd，jquery；',
        '熟悉<span class="high-light">git</span>项目版本管理，熟悉<span class="high-light">webpack</span>、<span class="high-light">gulp</span>等前端自动化构建工具；',
        '熟悉<span class="high-light">Web性能优化</span>方案，有实际的性能优化经验；有<span class="high-light">移动端开发</span>经验，调试经验，能快速定位问题所在',
        '熟悉css预处理语言 <span class="high-light">sass</span>,<span class="high-light">less</span>；了解<span class="high-light">Typescript</span>编程语言；',
        '能够熟练的使用<span class="high-light">npm</span>包管理工具，快速学习上手网上出色的开源项目',
        '能面对不同的调试环境采取各种<span class="high-light">调试工具</span>进行调试，<span class="high-light">charles抓包网络代理</span>、android logcat日志抓取、chrome dev tools调试工具等；',
        '了解<span class="high-light">NodeJs</span>、<span class="high-light">php</span>、<span class="high-light">python</span>基本用法，可以书写php简单借口，能用python做基本的数据爬虫；',
      ],
    };
  },
};
</script>

<style lang="scss" src="./index.scss"></style>
