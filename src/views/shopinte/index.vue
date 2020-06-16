<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="shopinte">
      <div class="box1">
        <div class="txt">
          <p class="tit1">当前积分</p>
          <p class="tit2">{{myNums}}</p>
          <!--<p class="tit3">今日获取积分：100</p>-->
        </div>
        <div class="dh">
          <a @click="toShopmall">兑换</a>
        </div>
      </div>
      <div class="box2">
        <div class="tabs">
          <!-- <ul>
            <li @click="num=0" class="first" :class="{active:num==0}">积分明细</li>
            <li @click="num=1" :class="{active:num==1}">兑换记录</li>
          </ul>-->
        </div>
        <div class="content">
          <div class="user" v-show="num==0">
            <div class="card">
              <ul>
                <li v-for="item in querylist">
                  <div class="tit">
                    <p class="t1">{{item.remark}}</p>
                    <p class="t2">{{item.created_at}}</p>
                  </div>
                  <p class="t3" :class="addClass(item.type)">{{item.nums}}</p>
                </li>
              </ul>
              <div class="unlist" v-show="shownolist=0">您还没有积分明细。</div>
            </div>
          </div>
          <!--<div class="user" v-show="num==1">
            <div class="card">
              <ul>
                  <li v-for="item in duihlist">
                  <div class="tit">
                    <p class="t1">{{item.name}}</p>
                    <p class="t2">{{item.time}}</p>
                  </div>
                  <p class="t3 dh">{{item.jf}}</p>
                </li>
              </ul>
              <div class="unlist" v-show="shownolist1==0">您还没有兑换记录。</div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopinte",
  data() {
    return {
      num: 0,
      myNums: this.$route.query.myNums,
      querylist: "",
      duihlist: "",
      shownolist: "",
      shownolist1: ""
    };
  },
  components: {},
  methods: {
    // 样式渲染
    addClass(i) {
      switch (i) {
        case "reduce":
          return "dh";
      }
    },
    toShopmall() {
      var serviceId = this.$route.query.service_id;
      this.$router.push({
        path: "/shopmall",
        query: {
          service_id: serviceId,
          myNums: this.$route.query.myNums
        }
      });
    }
  },
  mounted() {},
  created() {
    var userId = this.$route.query.user_id;
    // 获取积分明细
    this.$axios
      .get("/api/user/credit/list", {
        user_id: userId,
        token: this.$store.state.token1
      })
      .then(res => {
        if (res.code == 200) {
          // res.data.list = [
          //   {
          //     name: "活动获取积分",
          //     time: "2019-12-02 22:24",
          //     jf: "+100"
          //   },
          //   {
          //     name: "活动获取积分",
          //     time: "2019-12-22 22:24",
          //     jf: "+200"
          //   }
          // ];
          // res.data.list = [];
          this.querylist = res.data.list;
          console.log(this.querylist);
          if (res.data.total == 0) {
            console.log("列表为空");
            this.shownolist = 0;
          }
        }
      });
    // 获取兑换记录
    this.$axios
      .get("/api/goods/exchangelist", {
        token: this.$store.state.token1
      })
      .then(res => {
        if (res.code == 200) {
          // res.data.list = [
          //   {
          //     name: "活动获取积分",
          //     time: "2019-12-02 22:24",
          //     jf: "-100"
          //   },
          //   {
          //     name: "活动获取积分",
          //     time: "2019-12-22 22:24",
          //     jf: "-200"
          //   }
          // ];
          res.data.list = [];
          this.duihlist = res.data.list;
          console.log(this.duihlist);
          if (res.data.total == 0) {
            console.log("兑换记录为空");
            this.shownolist1 = 0;
          }
        }
      });
  }
};
</script>
<style lang="less" scoped>
.shopinte {
  .box1 {
    height: 165px;
    padding: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: url(../../img/ejwzdh.png);
    .dh {
      width: 190px;
      height: 65px;
      line-height: 65px;
      border-radius: 50px;
      background-color: #fff;
      margin-top: 65px;
      a {
        display: block;
        color: #ef4e42;
        font-size: 32px;
        text-align: center;
      }
    }
    .txt {
      color: #fff;
      text-align: left;
      .tit1 {
        font-size: 28px;
      }
      .tit2 {
        font-size: 74px;
      }
      .tit3 {
        font-size: 26px;
      }
    }
  }
  .box2 {
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
          height: 140px;
          margin-bottom: 50px;
          border-bottom: 1px solid #d5d5d5;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .tit {
            text-align: left;
            .t1 {
              font-size: 28px;
              margin-top: 15px;
            }
            .t2 {
              font-size: 25px;
              color: #888;
            }
          }
          .t3 {
            font-size: 28px;
            color: #2ad45e;
            margin-top: 30px;
            position: relative;
            &.dh {
              color: #f29c20;
              position: relative;
              &:before {
                content: "";
                position: absolute;
                width: 12px;
                height: 3px;
                background-color: #f29c20;
                left: -20px;
                top: 19px;
              }
            }
          }
        }
      }
    }
  }
}
</style>