<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="shopbox">
      <div class="box1">
        <img src="../../img/userid.png" alt />
        <div class="txt">
          <p>订单时间：{{this.queryDetail.created_at}}</p>
          <p>订单编号：{{this.queryDetail.id}}</p>
          <p>客户名字：{{this.queryDetail.user_realname}}</p>
          <p></p>
        </div>
        <div class="trip" @click="toTrip()">行程记录</div>
      </div>
      <div class="box2">
        <div class="title">
          <img src="../../img/dw.png" alt />
          <p>行程详情</p>
        </div>
        <div class="addr">
          <p>
            <span class="txt1">{{this.queryDetail.order_address}}</span>
            <span class="txt2">行驶路程：{{this.queryDetail.mileage}}km</span>
          </p>
          <p>
            <span class="txt3">{{this.queryDetail.destination_address}}</span>
            <span class="txt2">服务时长：{{this.queryDetail.total_minute}}分</span>
          </p>
        </div>
      </div>
      <div class="box3">
        <div class="title">
          <img src="../../img/ddxq.png" alt />
          <p>行程费用</p>
        </div>
        <div class="addr">
          <p>
            <span class="txt4">起步价</span>
            <span class="txt2">{{this.queryDetail.start_price}}元</span>
          </p>
          <p>
            <span class="txt4">里程（0.00km）</span>
            <span class="txt2">{{this.queryDetail.mileage}}km</span>
          </p>
          <p>
            <span class="txt4">行驶时长（1分钟）</span>
            <span class="txt2">{{this.queryDetail.driving_time_fee}}元</span>
          </p>
          <p>
            <span class="txt4">等待时长（3分钟）</span>
            <span class="txt2">{{this.queryDetail.wait_fee}}元</span>
          </p>
          <p>
            <span class="txt4">返程费用</span>
            <span class="txt2">{{this.queryDetail.remote_fee}}元</span>
          </p>
          <p>
            <span class="txt4">优惠金额</span>
            <span class="txt2">{{this.queryDetail.coupon_fee}}元</span>
          </p>
        </div>
      </div>
      <div class="foot">
        <p>
          总价：
          <span>{{this.queryDetail.money}}元</span>
          ({{this.queryDetail.status_name}})
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shoporderDetail",
  data() {
    return {
      queryDetail: "",
      querylist1: "",
      shownolist: 1,
      shownolist1: 1,
      dialogVisible: false,
      imgUrl: "",
      code: "",
      fiex_box: 1
    };
  },
  components: {},
  methods: {
    // 订单轨迹
    toTrip() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/trip",
        query: {
          service_id: serviceId,
          order_id: this.$route.query.id
        }
      });
    },
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
    }
  },
  mounted() {},
  created() {
    // 获取订单列表
    var id = this.$route.query.id;
    this.$axios
      .get("/api/order/detail", {
        token: this.$store.state.token1,
        id: id
      })
      .then(res => {
        if (res.code == 200) {
          this.queryDetail = res.data;
          if (res.data.total == 0) {
            console.log("列表为空");
            this.shownolist = 0;
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
.unlist {
  padding: 20px;
}
.shopbox {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  .box1 {
    width: 100%;
    background-color: #fff;
    height: 240px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    position: relative;
    img {
      width: 120px;
      height: 120px;
      border: 3px solid #ddd;
      border-radius: 100px;
      margin-top: 60px;
      margin-left: 20px;
    }
    .txt {
      margin-top: 50px;
      margin-left: 40px;
      font-size: 28px;
      text-align: left;
      p {
        margin-bottom: 10px;
      }
    }
    .trip {
      width: 180px;
      height: 60px;
      border: 2px solid #eca02b;
      line-height: 60px;
      color: #eca02b;
      position: absolute;
      right: 40px;
      bottom: 20px;
      font-size: 28px;
      border-radius: 10px;
    }
  }
  .box2 {
    background-color: #fff;
    .title {
      width: 90%;
      margin: 0px auto;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px solid #d5d5d5;
      img {
        width: 60px;
        margin-top: 20px;
        float: left;
      }
      p {
        float: left;
        font-size: 30px;
      }
    }
    .addr {
      width: 90%;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      p {
        float: left;
        font-size: 28px;
        width: 100%;
        margin-bottom: 10px;
        margin-top: 10px;
        .txt1 {
          float: left;
          position: relative;
          padding-left: 30px;
          &::before {
            position: absolute;
            left: 0px;
            top: 12px;
            content: "";
            background-color: #43bfa2;
            width: 15px;
            height: 15px;
            border-radius: 100%;
          }
        }
        .txt3 {
          float: left;
          position: relative;
          padding-left: 30px;
          &::before {
            position: absolute;
            left: 0px;
            top: 12px;
            content: "";
            background-color: #fe524f;
            width: 15px;
            height: 15px;
            border-radius: 100%;
          }
        }
        .txt2 {
          float: right;
        }
      }
    }
  }
  .box3 {
    background-color: #fff;
    margin-top: 20px;
    .title {
      width: 90%;
      margin: 0px auto;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px solid #d5d5d5;
      img {
        width: 60px;
        margin-top: 20px;
        float: left;
      }
      p {
        float: left;
        font-size: 30px;
      }
    }
    .addr {
      width: 90%;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      p {
        float: left;
        font-size: 28px;
        width: 100%;
        margin-bottom: 10px;
        margin-top: 10px;
        .txt1 {
          float: left;
          position: relative;
          padding-left: 30px;
          &::before {
            position: absolute;
            left: 0px;
            top: 12px;
            content: "";
            background-color: #43bfa2;
            width: 15px;
            height: 15px;
            border-radius: 100%;
          }
        }
        .txt3 {
          float: left;
          position: relative;
          padding-left: 30px;
          &::before {
            position: absolute;
            left: 0px;
            top: 12px;
            content: "";
            background-color: #fe524f;
            width: 15px;
            height: 15px;
            border-radius: 100%;
          }
        }
        .txt2 {
          float: right;
        }
        .txt4 {
          float: left;
        }
      }
    }
  }
}
.foot {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 120px;
  line-height: 120px;
  border-top: 1px solid #ddd;
  padding-left: 30px;
  p {
    text-align: left;
    font-size: 32px;
    span {
      color: #f99a0a;
      font-size: 46px;
    }
  }
}
</style>