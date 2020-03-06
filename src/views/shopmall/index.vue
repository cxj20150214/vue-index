<template>
  <div>
    <div class="shopbox">
      <div class="box1">
        <div class="card">
          <img src="../../img/shopbanner.png" alt />
        </div>
        <div class="myinte">
          <a href>
            <p class="t1">
              我的积分:
              <span>1000</span>
            </p>
            <p class="t2">查看></p>
          </a>
        </div>
      </div>
      <div style="width:100%;height:20px;background-color:#f7f7f7;"></div>
      <div class="box2">
        <h2>兑换专区</h2>
        <ul class="pro">
          <li>
            <a href>
              <img src="../../img/z39.png" alt />
              <p class="tit">小型家用豆浆机耐用</p>
              <p class="inte">2000积分</p>
            </a>
          </li>
          <li>
            <img src="../../img/z39.png" alt />
            <p class="tit">小型家用豆浆机耐用</p>
            <p class="inte">2000积分</p>
          </li>
          <li>
            <img src="../../img/z39.png" alt />
            <p class="tit">小型家用豆浆机耐用</p>
            <p class="inte">2000积分</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopmall",
  components: {},
  methods: {},
  mounted() {}
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
</style>