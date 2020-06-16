<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="shopbox">
      <div class="card">
        <ul>
          <li v-for="item in querylist">
            <div class="time" @click="goDetail(item.id)">
              <p class="dj">代驾</p>
              <p class="startTime">{{item.created_at}}</p>
              <p class="status">{{item.status_name}} ></p>
            </div>
            <div class="add" @click="goDetail(item.id)">{{item.order_address}}</div>
            <div class="price">
              <p class="jg">¥{{item.money}}</p>
              <div class="pj" @click="goEvaluate(item.id)">评价</div>
            </div>
          </li>
        </ul>
        <div class="unlist" v-show="shownolist==0">您没有订单记录。</div>
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
  name: "shoporder",
  data() {
    return {
      querylist: "",
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
    // 跳转详情页
    goDetail(item) {
      console.log(item);
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shoporderDetail",
        query: {
          service_id: serviceId,
          id: item
        }
      });
    },
    goEvaluate(item) {
      console.log(item);
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/evaluate",
        query: {
          service_id: serviceId,
          order_id: item
        }
      });
    }
  },
  mounted() {},
  created() {
    // 获取订单列表
    this.$axios
      .get("/api/order/list", {
        token: this.$store.state.token1
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
  .card {
    width: 92%;
    margin: 20px auto;
    ul {
      li {
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        padding: 25px;
        .time {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 75px;
          line-height: 75px;
          border-bottom: 1px solid #ddd;
          .dj {
            font-size: 32px;
          }
          .startTime {
            width: 300px;
            text-align: left;
            font-size: 28px;
            color: #999;
          }
          .status {
            font-size: 32px;
            color: #666;
          }
        }
        .add {
          height: 95px;
          line-height: 95px;
          font-size: 30px;
          color: #9f9f9f;
          position: relative;
          text-align: left;
          padding-left: 35px;
          border-bottom: 1px solid #d5d5d5;
          &::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 100px;
            background-color: #44bfa3;
            left: 0px;
            top: 40px;
          }
        }
        .price {
          height: 95px;
          line-height: 95px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .jg {
            font-size: 42px;
            color: #ff596a;
          }
          .pj {
            width: 150px;
            height: 60px;
            line-height: 60px;
            background-color: #ff596a;
            margin-top: 20px;
            color: #fff;
            font-size: 26px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>