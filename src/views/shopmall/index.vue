<template>
  <div :style="{'width':this.$store.state.width_s+'px'}" style="min-height:100vh;">
    <div class="shopbox">
      <div class="box1">
        <div class="card">
          <img src="../../img/shopbanner.png" alt />
        </div>
        <div class="myinte">
          <a @click="toShopinte">
            <p class="t1">
              我的积分:
              <span>{{myNums}}</span>
            </p>
            <p class="t2">查看></p>
          </a>
        </div>
      </div>
      <div style="width:100%;height:20px;background-color:#f7f7f7;"></div>
      <div class="box2">
        <h2>兑换专区</h2>
        <div class="distance">
          <p>距离筛选</p>
          <ul class="tabs">
            <li :class="{active:show==1}" @click="showall">全部</li>
            <li :class="{active:show==2}" @click="show1km">1KM</li>
            <li :class="{active:show==3}" @click="show5km">5KM</li>
            <li :class="{active:show==4}" @click="show10km">10KM</li>
          </ul>
        </div>
        <ul class="pro">
          <li v-for="item in items">
            <a @click="toProdetail(item.id)">
              <img :src="item.pic_url" alt />
              <p class="tit">{{item.shop_name}}</p>
              <p class="inte">{{item.nums}}积分</p>
            </a>
          </li>
        </ul>
        <p v-if="total==0" class="proNull">抱歉，暂无产品。</p>
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
  name: "shopmall",
  data() {
    return {
      show: 1,
      fiex_box: 1,
      listQuery: {
        lng: "118.159010",
        lat: "24.47790",
        distance: "",
        page: "",
        limit: ""
      },
      items: "",
      total: "",
      myNums: this.$route.query.myNums
    };
  },
  components: {},
  methods: {
    getMyLocation() {
      var geolocation = new qq.maps.Geolocation(
        "CCHBZ-QHXK5-4VKIO-QYX6L-ODEHV-EZBXB",
        "洪师傅-h5"
      );
      geolocation.getIpLocation(this.showPosition, this.showErr);
      //geolocation.getLocation(this.showPosition, this.showErr);//或者用getLocation精确度比较高
    },
    showPosition(position) {
      this.order_lat = position.lat;
      this.order_lng = position.lng;
    },
    showErr() {
      console.log("定位失败");
      this.getMyLocation(); //定位失败再请求定位，测试使用
    },
    // 跳转产品详情
    toProdetail(value) {
      console.log(value);
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/prodetail",
        query: {
          service_id: serviceId,
          id: value
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
    },
    // 跳转至积分记录
    toShopinte() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shopinte",
        query: {
          service_id: serviceId,
          myNums: this.$route.query.myNums,
          user_id: this.$route.query.user_id
        }
      });
    },
    showall() {
      this.show = 1;
      this.listQuery.distance = "";
      this.goodslist();
    },
    show1km() {
      this.show = 2;
      this.listQuery.distance = "1";
      this.goodslist();
    },
    show5km() {
      this.show = 3;
      this.listQuery.distance = "5";
      this.goodslist();
    },
    show10km() {
      this.show = 4;
      this.listQuery.distance = "10";
      this.goodslist();
    },
    // 获取商品列表
    goodslist() {
      var parm = this.listQuery;
      this.$axios.get("/api/goods/goodslist", parm).then(res => {
        this.items = res.data.list;
        this.total = res.data.total;
      });
    }
  },
  mounted() {
    // this.getMyLocation()
  },
  created() {
    this.goodslist();
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
    background-color: #fff;
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
.shopbox {
  width: 750px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  .box1 {
    width: 750px;
    height: 520px;
    background-image: url("../../img/tc531.png");
    background-position-y: -75px;
    background-repeat: no-repeat;
    background-size: 100% 400px;
    .card {
      width: 720px;
      margin: 80px auto 0px;
      border-radius: 10px;
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
          margin-left: 120px;
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
    .myinte {
      a {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      width: 690px;
      height: 85px;
      line-height: 85px;
      margin: 0px auto;
      display: flex;
      justify-content: space-between;
      font-size: 32px;
      .t1 {
        float: left;
        span {
          color: #f54029;
        }
      }
      .t2 {
        color: #999;
      }
    }
  }
  .box2 {
    width: 690px;
    margin: 20px auto;
    h2 {
      font-size: 36px;
      position: relative;
      text-align: left;
      padding-left: 20px;
      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 0px;
        width: 5px;
        height: 40px;
        background-color: #f1574d;
      }
    }
    .pro {
      margin-left: -40px;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(50% - 40px);
        height: 450px;
        margin-left: 40px;
        margin-bottom: 30px;
        float: left;
        img {
          height: 325px;
          background-color: #f7f7f8;
          border-radius: 20px;
        }
        .tit {
          font-size: 30px;
          margin-top: 30px;
        }
        .inte {
          color: #f54029;
          font-size: 28px;
        }
      }
    }
  }
}
.distance {
  width: 100%;
  text-align: left;
  margin: 20px auto;
  color: #575757;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    font-size: 28px;
  }
  .tabs {
    li {
      float: left;
      margin-left: 20px;
      font-size: 28px;
      color: #999;
      border: 1px solid #d5d5d5;
      padding: 3px 25px;
      border-radius: 30px;
      &.active {
        color: #333;
        border: 1px solid #666;
      }
    }
  }
}
.proNull {
  width: 100%;
  text-align: center;
  margin-top: 40px;
}
</style>