<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="shopbox">
      <div class="tabs">
        <ul>
          <li @click="num=0" class="first" :class="{active:num==0}">未使用</li>
          <li @click="num=1" :class="{active:num==1}">已使用</li>
        </ul>
      </div>
      <div class="content">
        <div class="user" v-show="num==0">
          <div class="card">
            <ul>
              <li v-for="item in querylist">
                <div class="box1">
                  <p class="txt1">{{item.rule_name}}</p>
                  <div class="txt_box">
                    <div class="box">
                      <p class="txt2">
                        <span>{{item.discount}}</span>￥
                      </p>
                      <p class="txt3">满{{item.money}}元立减</p>
                    </div>
                    <p class="txt4">凭券消费满{{item.money}}元立减{{item.discount}}元仅限本平台使用内使用</p>
                  </div>
                  <div class="qx">{{item.invalid_day}}天后到期</div>
                </div>
                <div class="box2">
                  <p>有效期至{{item.end_at}}</p>
                  <div class="sy">
                    <a @click="dialogVisible = true,getUrl(item.id)">立即使用</a>
                  </div>
                </div>
              </li>
            </ul>
            <div class="unlist" v-show="shownolist==0">您没有未使用的优惠券。</div>
          </div>
          <el-dialog :visible.sync="dialogVisible" width="60vw" style="margin-top:15vh;">
            <img class="imgurl" :src="this.imgUrl" alt />
            <p class="code">请出示此二维码给服务人员扫码核销</p>
            <p class="code">优惠码：{{this.code}}</p>
          </el-dialog>
        </div>
        <div class="user" v-show="num==1">
          <div class="card">
            <ul>
              <li v-for="item in querylist1">
                <div class="box1">
                  <p class="txt1">{{item.rule_name}}</p>
                  <div class="txt_box">
                    <div class="box">
                      <p class="txt2">
                        <span>{{item.discount}}</span>￥
                      </p>
                      <p class="txt3">满{{item.money}}元立减</p>
                    </div>
                    <p class="txt4">凭券消费满{{item.money}}元立减{{item.discount}}元仅限本平台使用内使用</p>
                  </div>
                  <div class="qx">已使用</div>
                </div>
                <div class="box2">
                  <p>有效期至{{item.end_at}}</p>
                </div>
              </li>
            </ul>
            <div class="unlist" v-show="shownolist1==0">您没有已使用的优惠券。</div>
          </div>
        </div>
      </div>
      <div class="fiex">
      <img @click="toggle()" src="../../img/fiex.png" alt />
      <ul class="fiex_box" :class="{active:fiex_box==1}">
        <li @click="toGift">礼品</li>
        <li @click="toCenter">中心</li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopcard",
  data() {
    return {
      num: 0,
      querylist: "",
      querylist1: "",
      shownolist: 1,
      shownolist1: 1,
      dialogVisible: false,
      imgUrl: "",
      code: "",
      fiex_box: 1,
    };
  },
  components: {},
  methods: {
      // 礼品中心
    toGift() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/gift",
        query: {
          service_id: serviceId
        }
      });
    },
    // 个人中心
    toCenter() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shopcenter",
        query: {
          service_id: serviceId
        }
      });
    },
     // 导航条
    toggle() {
      console.log("点击");
      if (this.fiex_box == 0) {
        this.fiex_box = 1;
      } else {
        this.fiex_box = 0;
      }
    },
    getUrl(value) {
      console.log(value);
      this.$axios
        .get("/api/coupon/qrcode", {
          id: value,
          token: this.$store.state.token1
        })
        .then(res => {
          this.imgUrl = res.data.qrcode_url;
          this.code = res.data.code;
        });
    }
  },
  mounted() {},
  created() {
    var userId = this.$route.query.user_id;
    // 获取未使用券
    this.$axios
      .get("/api/coupon/list", {
        user_id: userId,
        token: this.$store.state.token1,
        type: "1"
      })
      .then(res => {
        if (res.code == 200) {
          this.querylist = res.data.list;
          console.log(this.querylist);
          if (res.data.total == 0) {
            console.log("列表为空");
            this.shownolist = 0;
          }
        }
      });
    // 获取已使用券
    this.$axios
      .get("/api/coupon/list", {
        user_id: userId,
        token: this.$store.state.token1,
        type: "2"
      })
      .then(res => {
        if (res.code == 200) {
          this.querylist1 = res.data.list;
          console.log(this.querylist);
          if (res.data.total == 0) {
            console.log("列表为空");
            this.shownolist1 = 0;
          }
        }
      });
  }
};
</script>
<style lang="less" scoped>
.fiex {
  width: 102px;
  height: 102px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  img {
    position: absolute;
    left: 0px;
    z-index: 999;
  }
  .fiex_box {
    width: 90px;
    height: 160px;
    padding: 5px;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: -140px;
    overflow: hidden;
    transition: all 0.3s;
    background: #fff;
    &.active {
      top: 20px;
      height: 0px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
    li {
      margin-top: 20px;
      font-size: 28px;
    }
  }
}
.imgurl {
  width: 80%;
  margin: 0px auto;
}
.code{
  font-size: 24px;
  margin-top: 10px;
}
.shopbox {
  width: 750px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  .tabs {
    ul {
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #d5d5d5;
      padding-bottom: 30px;
      padding-top: 30px;
      li {
        font-size: 32px;
        width: 50%;
        position: relative;
        &.first {
          border-right: 1px solid #d5d5d5;
        }
        &.active {
          color: #f1574d;
          &::after {
            position: absolute;
            content: "";
            width: 60px;
            height: 3px;
            background-color: #f1574d;
            left: 50%;
            margin-left: -30px;
            bottom: -10px;
          }
        }
      }
    }
  }
  .user {
    margin-top: 40px;
    .card {
      width: 690px;
      margin: 0px auto;
      li {
        width: 690px;
        height: 330px;
        border-radius: 15px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 50px;
        overflow: hidden;
        .box1 {
          padding: 25px;
          height: 180px;
          color: #fff;
          background-color: #ff5442;
          position: relative;
          .txt1 {
            font-size: 28px;
            text-align: left;
          }
          .txt_box {
            height: 125px;
            display: flex;
            flex-direction: row;
            .box {
              width: 215px;
              .txt2 {
                text-align: left;
                height: 90px;
                span {
                  font-size: 70px;
                }
              }
              .txt3 {
                text-align: left;
                font-size: 28px;
              }
            }
            .txt4 {
              font-size: 28px;
              text-align: left;
              margin-left: 20px;
              margin-top: 34px;
              border-left: 1px solid #fff;
              padding-left: 15px;
              height: 75px;
              width: 340px;
            }
          }
          .qx {
            position: absolute;
            width: 180px;
            height: 60px;
            background-image: url("../../img/qx.png");
            right: -10px;
            top: 10px;
            line-height: 60px;
            text-align: center;
            color: #dc3a2d;
            font-size: 24px;
          }
        }
        .box2 {
          padding: 20px;
          display: flex;
          flex-direction: row;
          p {
            font-size: 28px;
            color: #666;
            float: left;
            margin-top: 10px;
          }
          .sy {
            width: 170px;
            height: 60px;
            border-radius: 30px;
            border: 1px solid #f1574d;
            line-height: 60px;
            margin-left: 80px;
            a {
              display: block;
              color: #f1574d;
              font-size: 28px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>