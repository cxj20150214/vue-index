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
              <p class="tit">用户名</p>
              <p>13888888888</p>
            </div>
            <div class="button">
              <a href>更换</a>
            </div>
          </div>
          <div class="card2">
            <ul>
              <li class="first">
                <img src="../../img/yuer.png" alt />我的余额0
              </li>
              <li>
                <img src="../../img/jf.png" alt />我的积分0
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style="width:100%;height:40px;background-color:#f7f7f7;"></div>
      <div class="box2">
        <ul>
          <a href>
            <li>
              <img src="../../img/jfsc.png" alt /> 积分商城
              <p>></p>
            </li>
          </a>
          <a href>
            <li>
              <img src="../../img/wdkq.png" alt />我的卡券
              <p>></p>
            </li>
          </a>
          <a href>
            <li>
              <img src="../../img/jsbd.png" alt />绑定账号
              <p>></p>
            </li>
          </a>
        </ul>
      </div>
      <div class="box3">
        <div class="ewm">
          <img src="../../img/shopewm.png" alt />
        </div>
        <p>扫码获取更多奖励</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopcenter",
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
  }
  .box2 {
    ul {
      width: 90%;
      margin: 0px auto;
      display: flex;
      flex-direction: column;
      li {
        height: 110px;
        line-height: 110px;
        text-align: left;
        font-size: 32px;
        border-bottom: 1px solid #d5d5d5;
        img {
          width: 30px;
          margin-right: 20px;
        }
        p {
          float: right;
          color: #ddd;
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