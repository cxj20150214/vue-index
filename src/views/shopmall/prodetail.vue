<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="prodetail">
      <div class="banner">
        <img :src="proDetail.pic_url" alt />
      </div>
      <div class="box">
        <div class="box_tit">
          <div class="tit">
            <p class="t1">{{proDetail.shop_name}}</p>
            <p class="t2">{{proDetail.nums}}积分</p>
          </div>
          <div class="button">
            <a v-on:click="open">立即抢购</a>
          </div>
        </div>
        <div class="kc">
          <p>库存：{{proDetail.stock}}份</p>
          <p>X 不支持退款</p>
        </div>
      </div>
      <div style="width:100%;height:20px;background-color:#f7f7f7;"></div>
      <div class="detail">
        <h2>商品详情</h2>
        <div v-html="proDetail.remark"></div>
      </div>
      <div class="bg" v-show="play">
        <div class="det">
          <div class="box">
            <div class="box_tit">
              <img :src="proDetail.pic_url" alt />
              <div class="tit">
                <p class="t1">{{proDetail.shop_name}}</p>
                <p class="t2">{{allprice}}积分</p>
              </div>
              <div class="button1">
                <a v-on:click="hide">X</a>
              </div>
            </div>
          </div>
          <div class="num">
            <p>购买数量</p>
            <div class="label">
              <button class="btn_minute" @click="btnMinute">-</button>
              <input type="text" value="0" size="1" v-model="count" @blur="changeJG" />
              <button class="btn_add" @click="btnAdd">+</button>
            </div>
          </div>
          <div class="exchange">
            <a @click="exchange">兑换</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "prodetail",
  data() {
    return {
      proDetail: "",
      play: false,
      count: "1",
      integral: "",
      allprice: ""
    };
  },
  components: {},
  methods: {
    // 兑换
    exchange() {
      var id = this.$route.query.id;
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/confirm",
        query: {
          service_id: serviceId,
          nums: this.count,
          allprice: this.allprice,
          pic_url: this.proDetail.pic_url,
          shop_name: this.proDetail.shop_name,
          id: id
        }
      });
    },
    // 购买数量改变价格
    changeJG() {
      if (this.count < 1) {
        alert("该宝贝不能减少了哟~");
        this.count = 1;
        this.allprice = this.count * this.proDetail.nums;
      } else {
        this.allprice = this.count * this.proDetail.nums;
      }
    },
    open() {
      this.play = true;
    },
    hide() {
      this.play = false;
    },
    btnAdd(count) {
      // 如果是低价商品，则限购
      if (this.vegas_id) {
        console.log("优惠商品限购一件哦~");
      } else {
        // 如果数量大于商品库存
        if (this.count >= this.proDetail.stock) {
          alert("该宝贝不能购买更多了~");
        } else {
          this.count++;
          this.allprice = this.count * this.proDetail.nums;
        }
      }
    },
    btnMinute(count) {
      if (this.count <= 1) {
        alert("该宝贝不能减少了哟~");
      } else {
        this.count--;
        this.allprice = this.count * this.proDetail.nums;
      }
    }
  },
  mounted() {},
  created() {
    var id = this.$route.query.id;
    this.$axios
      .get("/api/goods/goodsdetail", {
        id: id,
        token: this.$store.state.token1
      })
      .then(res => {
        this.proDetail = res.data;
        this.allprice = this.count * this.proDetail.nums;
        console.log(res);
      });
  }
};
</script>
<style lang="less" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  .det {
    width: 100vw;
    height: 50vh;
    margin-top: 50vh;
    background-color: #fff;
    .num {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 30px;
      p {
        font-size: 28px;
        color: #333;
        text-align: left;
      }
      .label {
        display: flex;
        flex-direction: row;
        button {
          width: 50px;
          height: 50px;
          line-height: 42px;
          text-align: center;
          font-size: 28px;
          border: 1px solid #999;
          background-color: #f1f1f1;
        }
        input {
          text-align: center;
          height: 50px;
          width: 60px;
          border: 1px solid #999;
          font-size: 28px;
          color: #666;
        }
      }
    }
    .box {
      .box_tit {
        img {
          width: 150px;
          height: 150px;
        }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
        border-bottom: 1px solid #d5d5d5;
        .tit {
          text-align: left;
          .t1 {
            font-size: 36px;
            margin-bottom: 15px;
          }
          .t2 {
            font-size: 28px;
            color: #f54029;
          }
        }
        .button1 {
          width: 70px;
          border-radius: 50px;
          text-align: center;
          background-color: #fff;
          a {
            font-size: 32px;
            color: #999;
            display: block;
          }
        }
      }
      .kc {
        padding: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        p:last-child {
          color: #999;
        }
      }
    }
    .exchange {
      width: 90%;
      margin: 10vh auto;
      border-radius: 50px;
      height: 85px;
      line-height: 85px;
      text-align: center;
      background-color: #ff4f59;
      a {
        color: #fff;
        font-size: 32px;
        display: block;
      }
    }
  }
}
.prodetail {
  display: flex;
  flex-direction: column;
  .banner {
    background-color: #f7f7f8;
    height: auto;
  }
  .box {
    .box_tit {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 30px;
      border-bottom: 1px solid #d5d5d5;
      .tit {
        text-align: left;
        .t1 {
          font-size: 36px;
          margin-bottom: 15px;
        }
        .t2 {
          font-size: 28px;
          color: #f54029;
        }
      }
      .button {
        width: 175px;
        height: 70px;
        line-height: 70px;
        background-color: #ff4f59;
        border-radius: 50px;
        text-align: center;
        margin-top: 20px;
        a {
          font-size: 28px;
          color: #fff;
          display: block;
        }
      }
    }
    .kc {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 28px;
      p:last-child {
        color: #999;
      }
    }
  }
  .detail {
    padding: 30px;
    h2 {
      font-size: 28px;
      color: #666;
      text-align: left;
      border-bottom: 1px solid #d5d5d5;
      padding-bottom: 15px;
      margin-bottom: 30px;
    }
  }
}
</style>