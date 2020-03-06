<template>
  <div>
    <div class="prodetail">
      <div class="bg" >
      <h2>订单详情</h2>
        <div class="det">
          <div class="box">
            <div class="box_tit">
              <img src="../../img/top.png" alt />
              <div class="tit">
                <p class="t1">蓝牙音乐智能音箱</p>
                <p class="t2">3000积分</p>
              </div>
              <div class="button1">
               <p>X1</p>
              </div>
            </div>
          </div>
          <div style="width:100%;height:20px;background-color:#f7f7f7;"></div>
          <div class="bz">
           <p>备注</p>
           <textarea name="" id=""  rows="10" placeholder="请输入需要备注的信息"></textarea>
          </div>
          <div class="exchange"><a href="">确认订单</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "confirm",
  data() {
    return {
    
    };
  },
  components: {},
  methods: {
    
  },
  mounted() {
   
  }
};
</script>
<style lang="less" scoped>
.bg {
    h2{
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #d5d5d5;
        text-align: left;
        font-size: 32px;
        padding-left: 30px;
        margin-top: 20px;
        color:#666;
    }
  width: 100vw;
  .det {
    width: 100vw;
    height: 50vh;
    background-color: #fff;
    .bz{
        padding:30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p{
            font-size: 32px;
        }
        textarea{
            font-size: 32px;
            width:70vw;
        }
    }
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
      .label{
        display: flex;
        flex-direction: row;
        button{
          width:50px;
          height: 50px;
          line-height: 42px;
          text-align: center;
          font-size: 28px;
          border:1px solid #999;
          background-color: #f1f1f1;
        }
        input{
          text-align: center;
          height: 50px;
          width:60px;
          border:1px solid #999;
          font-size: 28px;
          color:#666;
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
          margin-top: 40px;
          font-size: 32px;
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
    .exchange{
      width:90%;
      margin: 10vh auto;
      border-radius: 50px;
      height: 85px;
      line-height: 85px;
      text-align: center;
      background-color: #ff4f59;
      a{
        color:#fff;
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
    height: 630px;
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