<template>
  <div>
    <div class="shopbind">
      <div class="now">
        <p class="tit">当前绑定微信号</p>
        <div class="box">
          <img src="../../img/z26.png" alt />
          <div class="txt_box">
            <p class="t1">微信号</p>
            <p>139*****987</p>
          </div>
          <p class="t2">已绑定</p>
        </div>
      </div>
      <div class="bind">
        <p class="tit">绑定以下手机账号用于登录</p>
        <div class="box">
          <img src="../../img/dh.png" alt />
          <div class="txt_box">
            <form action>
              <div class="bind_input">
                <input class="input_box" type="num" placeholder="输入需绑定手机号码" />
                <div class="button yz">验证</div>
              </div>
              <div class="bind_input">
                <input class="input_box" type="num" placeholder="输入验证码" />
                <div class="button bd">绑定</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopbind",
  data() {
    return {
      num: 0
    };
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.shopbind {
  .now {
    width: 590px;
    margin: 0px auto;
    padding: 50px;
    border-bottom: 1px solid #d5d5d5;
    .tit {
      font-size: 32px;
      color: #7a7979;
      text-align: left;
    }
    .box {
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      .txt_box {
        text-align: left;
        color: #999;
        font-size: 28px;
        margin-left: 30px;
        .t1 {
          font-size: 32px;
          color: #333;
        }
      }
      img {
        width: 90px;
        height: 90px;
      }
      .t2 {
        margin-left: 230px;
        font-size: 28px;
        margin-top: 15px;
        color: #666;
      }
    }
  }
  .bind {
    width: 590px;
    margin: 0px auto;
    padding: 50px;
    .tit {
      font-size: 32px;
      color: #7a7979;
      text-align: left;
    }
    .box {
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      img {
        width: 90px;
        height: 90px;
      }
      .txt_box {
        margin-left: 30px;
        width: 480px;
        .bind_input {
          margin-bottom: 20px;
        }
        .input_box {
          width: 270px;
          height: 70px;
          border-bottom: 1px solid #d5d5d5;
          font-size: 28px;
          margin-bottom: 40px;
          float: left;
          &:focus {
            outline: none;
          }
        }
        .button {
          width: 135px;
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: 28px;
          border-radius: 30px;
          float: right;
          &.yz {
            background-color: #f7f6fb;
            color: #666;
          }
          &.bd {
            background-color: #6e84f5;
            color:#fff;
          }
        }
      }
    }
  }
}
</style>