<template style="background:##F7F7F7">
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="gift">
      <ul>
        <li v-for="item in querylist" :status="item.status">
          <div class="tit">
            <p>{{item.goods_name}}</p>
            <p>{{item.status_name}}</p>
          </div>
          <div class="pro">
            <img :src="item.pic_url" alt />
            <div class="proTxt">
              <p>{{item.company_name}}</p>
            </div>
          </div>
          <div class="userbutton" @click="dialogVisible = true,getUrl(item.ordersn)">立即使用</div>
        </li>
      </ul>
      <el-dialog :visible.sync="dialogVisible" width="60vw" style="margin-top:15vh;">
        <img class="imgurl" :src="this.imgUrl" alt />
        <p class="code">请出示此二维码给服务人员扫码核销</p>
        <p class="code">优惠码：{{this.code}}</p>
      </el-dialog>
    </div>
    <div class="fiex">
      <img @click="toggle()" src="../../img/fiex.png" alt />
      <ul class="fiex_box" :class="{active:fiex_box==1}">
        <li @click="toGift">礼品</li>
        <li @click="toCenter">中心</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "gift",
  data() {
    return {
      querylist: "",
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
        .get("/api/goods/qrcode", {
          ordersn: value,
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
    // 获取未使用券
    this.$axios
      .get("/api/goods/exchangelist", {
        token: this.$store.state.token1
      })
      .then(res => {
        if (res.code == 200) {
          this.querylist = res.data.list;
          console.log(this.querylist);
          if (res.data.total == 0) {
            console.log("列表为空");
            // this.shownolist = 0;
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
.code {
  font-size: 24px;
  margin-top: 10px;
}
.gift {
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  ul {
    width: 690px;
    margin: 40px auto;
    li ,[status="1"] {
      width: 100%;
      height: 380px;
      border-radius: 30px;
      overflow: hidden;
      margin-bottom: 40px;
      background-color: #fff;
      .tit {
        height: 80px;
        background-color: #ff4d4d;
        line-height: 80px;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 30px;
        font-size: 32px;
      }
      .pro {
        display: flex;
        flex-direction: row;
        padding: 35px;
        img {
          width: 150px;
          height: 150px;
          border: 1px soild #d5d5d5;
        }
        .proTxt {
          font-size: 30px;
          padding: 20px;
        }
      }
      .userbutton {
        width: 175px;
        height: 60px;
        border: 1px solid #f1574d;
        color: #f1574d;
        float: right;
        margin-right: 20px;
        line-height: 60px;
        font-size: 28px;
        border-radius: 30px;
        display: block;
      }
    }
    li ,[status="0"]{
      .tit{
        background-color: #999;
      }
      .userbutton{
        display: none;
      }
    }
  }
}
</style>