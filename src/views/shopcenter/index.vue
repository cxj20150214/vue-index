<template>
  <div>
    <div class="shopbox">
      <div class="box1">
        <div class="card">
          <div class="card1">
            <div class="tx">
              <img src="../../img/userid.png" alt />
            </div>
            <div class="txt">
              <p class="tit">{{this.thisinfo.realname}}</p>
              <p>{{this.thisinfo.mobile}}</p>
            </div>
            <div class="button">
              <a @click="logout">更换</a>
            </div>
          </div>
          <div class="card2">
            <ul>
              <!--<li class="first">
                <img src="../../img/yuer.png" alt />我的余额0
              </li>-->
              <li @click="toShopinte">
                <img src="../../img/jf.png" alt />
                我的积分{{this.thisinfo.credit}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style="width:100%;height:40px;background-color:#f7f7f7;"></div>
      <div class="box2">
        <ul>
          <li>
            <a @click="toOrder">
              <img src="../../img/dd.png" alt />
              <p>我的订单</p>
            </a>
          </li>
          <li>
            <a @click="toShopmall">
              <img src="../../img/jfsc1.png" alt />
              <p>积分商城</p>
            </a>
          </li>
          <li>
            <a @click="toShopcard">
              <img src="../../img/wdkq.png" alt />
              <p>我的卡券</p>
            </a>
          </li>
           <li>
            <a @click="toGift">
              <img src="../../img/lp.png" alt />
              <p>我的礼品</p>
            </a>
          </li>
          <li>
            <a @click="logout">
              <img src="../../img/jsbd.png" alt />
              <p>绑定账号</p>
            </a>
          </li>
          <li>
            <a @click="toAddress">
              <img src="../../img/wdkq.png" alt />
              <p>收费标准</p>
            </a>
          </li>
          <li>
            <a @click="tohotline">
              <img src="../../img/kf.png" alt />
              <p>客服热线</p>
            </a>
          </li>
          <li>
            <a @click="toAgreement">
              <img src="../../img/kf.png" alt />
              <p>代驾服务协议</p>
            </a>
          </li>
        </ul>
      </div>
      <!--<div class="box3">
        <div class="ewm">
          <img src="../../img/shopewm.png" alt />
        </div>
        <p>扫码获取更多奖励</p>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      thisinfo: "",
      service_id: this.$route.query.service_id,
      // open_id: "oNrsY1nhE5kjM4DTHPl3IYGpDrIw",
      open_id: this.$store.state.openid,
      token: this.$store.state.token,
      query: ""
    };
  },
  name: "shopcenter",
  components: {},
  methods: {
    toGift() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/gift",
        query: {
          service_id: serviceId
        }
      });
    },
    // 跳转至服务协议
    toAgreement() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/agreement",
        query: {
          service_id: serviceId
        }
      });
    },
    // 跳转至客服热线
    tohotline() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/hotline",
        query: {
          service_id: serviceId
        }
      });
    },
    // 跳转至客服热线
    tohotline() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/hotline",
        query: {
          service_id: serviceId
        }
      });
    },
    // 跳转至收费标准
    toAddress() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/address",
        query: {
          service_id: serviceId
        }
      });
    },
    // 跳转至卡券
    toShopcard() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shopcard",
        query: {
          service_id: serviceId,
          user_id: this.thisinfo.id
        }
      });
    },
    // 跳转至积分记录
    toShopinte() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shopinte",
        query: {
          service_id: serviceId,
          myNums: this.thisinfo.credit,
          user_id: this.thisinfo.id
        }
      });
    },
    // 跳转至商场
    toShopmall() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shopmall",
        query: {
          service_id: serviceId,
          myNums: this.thisinfo.credit,
          user_id: this.thisinfo.id
        }
      });
    },
    //跳转至我的订单
    toOrder() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shoporder",
        query: {
          service_id: serviceId,
        }
      });
    },
    // 快捷登录
    quick_login() {
      console.log("快捷登录");
      this.$axios
        .post("/api/auth/quick_login", {
          platform: "official_accounts",
          openid: this.open_id
        })
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            this.token = res.data.access_token;
            this.$store.commit("set_token", "bearer " + res.data.access_token);
            this.$store.commit("set_token1", res.data.access_token);
            // this.$router.go(0);
            this.info();
          } else {
            var serviceId = this.$route.query.service_id;
            this.$router.push({
              path: "/shopbind",
              query: {
                service_id: serviceId
              }
            });
          }
        });
    },
    // 获取用户信息
    info() {
      this.$axios
        .get("/api/auth/info", {
          token: this.token
        })
        .then(res => {
          this.thisinfo = res.data;
          console.log("获取到用户信息", res);
        });
    },
    logout() {
      var serviceId = this.$route.query.service_id;
      console.log(serviceId);
      this.$router.push({
        path: "/shopbind",
        query: {
          service_id: serviceId
        }
      });
    },
    getCodeApi(state) {
      //获取code
      var thisUrl = this.$route.fullPath;
      if (thisUrl.indexOf("service_id") == -1) {
        this.$axios
          .get("/api/wechat/info/appid", {
            service_id: 2
          })
          .then(res => {
            console.log(res, "获取到appid");
            let urlNow = encodeURIComponent(window.location.href);
            let scope = "snsapi_userinfo"; //snsapi_userinfo   //静默授权 用户无感知
            let appid = "";
            appid = res.data;
            console.log(appid);
            let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
            window.location.replace(url);
          });
      }
      if (thisUrl.indexOf("service_id") != -1) {
        let service_id = this.$route.query.service_id;
        this.$axios
          .get("/api/wechat/info/appid", {
            service_id: service_id
          })
          .then(res => {
            console.log(res, "获取到appid");
            let urlNow = encodeURIComponent(window.location.href);
            let scope = "snsapi_userinfo"; //snsapi_userinfo   //静默授权 用户无感知
            let appid = "";
            appid = res.data;
            console.log(appid);
            let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
            window.location.replace(url);
          });
      }
    },
    getUrlKey(name) {
      //获取url 参数
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            location.href
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    }
  },
  mounted() {},
  created() {
    // 获取用户信息
    this.$axios
      .get("/api/auth/info", {
        token: this.$store.state.token1
      })
      .then(res => {
        if (res.code == 200) {
          this.thisinfo = res.data;
          console.log("获取到用户信息", res);
        } else {
          console.log("未获取到用户信息，走授权");
          //返回值
          let code = this.getUrlKey("code");
          if (code) {
            this.$axios.post("/api/auth/wechatinfo?code=" + code).then(res => {
              console.log(res);
              if (res.code == 200) {
                console.log(res.data.original.openid);
                this.open_id = res.data.original.openid;
                this.$store.commit("set_openid", res.data.original.openid);
                this.$store.commit("set_userInfo", res.data.original);
                this.quick_login();
                console.log(res);
              }
              if (res.code == 500) {
                this.quick_login();
              }
            });
          } else {
            this.getCodeApi("123");
          }
        }
      });
  }
};
</script>
<style lang="less" scoped>
.shopbox {
  width: 750px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  .box1 {
    width: 750px;
    height: 480px;
    background-image: url("../../img/top-background.png");
    background-position-y: -75px;
    background-repeat: no-repeat;
    .card {
      width: 720px;
      height: 355px;
      margin: 80px auto 0px;
      border-radius: 10px;
      background-image: url("../../img/z22.png");
      background-size: 100% 100%;
      .card1 {
        width: 100%;
        height: 240px;
        display: flex;
        flex-direction: row;
        position: relative;
        .tx {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 100px;
          overflow: hidden;
          left: 50px;
          background: #f2f2f2;
          img {
            width: 100%;
            margin: 0px auto;
          }
        }
        .txt {
          width: 320px;
          font-size: 28px;
          text-align: left;
          color: #999;
          margin-left: 240px;
          margin-top: 40px;
          .tit {
            font-size: 36px;
            color: #333;
            margin-bottom: 5px;
          }
        }
        .button {
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background-color: #ffc923;
          border-radius: 10px;
          margin-left: 0px;
          margin-top: 60px;
          a {
            display: block;
            font-size: 28px;
          }
        }
      }
      .card2 {
        ul {
          width: 90%;
          display: flex;
          flex-direction: row;
          margin: 25px auto 0px;
          li {
            width: 50%;
            font-size: 32px;
            position: relative;
            img {
              width: 28px;
              margin-right: 10px;
            }
            &.first {
              &:after {
                position: absolute;
                content: "";
                width: 1px;
                height: 50px;
                background-color: #ddd;
                right: 0px;
              }
            }
          }
        }
      }
    }
  }
  .box2 {
    ul {
      width: 90%;
      margin: 0px auto;
      li {
        a {
          display: flex;
          flex-direction: column;
        }
        width: 33.33%;
        height: 220px;
        text-align: center;
        font-size: 30px;
        border-bottom: 1px solid #f2f2f2;
        float: left;
        img {
          width: 40px;
          height: 45px;
          margin: 60px auto 20px;
        }
        p {
          float: right;
        }
      }
    }
  }
  .box3 {
    display: flex;
    flex-direction: column;
    .ewm {
      width: 225px;
      margin: 150px auto 0px;
    }
    p {
      text-align: center;
      font-size: 30px;
      margin-top: 15px;
    }
  }
}
</style>