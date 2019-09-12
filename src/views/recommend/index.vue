<template>
  <div class="recom">
    <div class="recom1">
      <div class="user_inf">
        <div class="userid"><img src="../../img/userid.png"></div>
        <div class="userinf">
          <p class="username">用户名</p>
          <p calss="usertel">156****8665</p>
        </div>
        <div class="getmonery">提现</div>
      </div>
      <div class="user_pro">
        <div class="user_pro1"><p>0.56</p>收益</div>
        <div class="user_pro2"><p>0.56</p>余额</div>
      </div>
      <div class="user_rec">已邀请<span>8</span>人</div>
    </div>
    <div class="recom2">
      <p class="recom2_p1">洪师傅邀请轻松赚零花钱</p>
      <p class="recom2_p2">2019年8月28日至2019年12月31日</p>
      <p class="recom2_p3">邀请新人好友下载APP，受邀人下单后即为邀请成功。邀请新用户1-3人可获得<span class="color1">10</span>元，邀请4-10人可获得<span class="color1">30</span>元，邀请新用户11-20人可获得<span class="color1">88</span>元。</p>
    </div>
    <div class="recom3">
      <span class="recom31">扫码</span>
      <img src="../../img/wx.png">
      <span class="recom31">参与</span>
    </div>


  </div>
</template>
<script>
export default {
  components:{
  },
  data:function () {
    return {

    }
    
  },
  methods:{


  }
}
</script>
<style lang="less">
.recom1{
  background: url(../../img/hsfimg6.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  height: calc(0.6026666 * 100vw);
}
.user_inf{
  display: flex;
  padding: calc(0.06 * 100vw);
  justify-content:space-between
}
.userinf{color:#fff;align-self: center;}
.username{font-size: 1rem;}
.usertel{font-size: .9rem;}
.getmonery{
  color:#ff5a57;
  background-color: #ffd47e;
  border-radius: 1rem;
  padding: .5rem 1.8rem;
  border:2px solid #ff5a57;
  line-height: 1rem;
  height: 1rem;
  align-self: center;
  box-shadow: 1px 1px 1px 2px #ffd47e,-1px -1px 1px 2px #ffd47e;
  }
.userid{align-self: center;}
.userid img{
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border:.166rem solid rgba(255, 255, 255, .2)}
  .user_pro{
    display: flex;
    color: #fff;
    justify-content:space-around;
    font-size: .8rem;
    padding-top: 4.5rem;
    p{font-size: 1.34rem;color:#ffde00}   
    }
.user_rec{
  font-size: .9rem;
  color: #ff5949;
  margin-top: calc(0.055 * 100vw);;
  span{
    position: relative;
    color: #585858; 
    font-size: 1rem;
    padding-left: .2rem;
    padding-right: .2rem;
  &::before{
    width: .6rem;
    height: 0.2rem;
    content: '';
    background-color: #33f0ca;
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    z-index: 0
  }
  }}
.recom2{
  background: url(../../img/hsfimg7.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  height: calc(0.61148 * 100vw);
}
.recom2_p1{padding-top:calc(0.12 * 100vw);color: #ff3721;font-size: 1.2rem;}
.recom2_p2{padding-top:calc(0.035 * 100vw);color:#666;font-size:.9rem}
.recom2_p3{padding:calc(0.12 * 100vw) calc(0.13526 * 100vw) 0;color:#666;font-size:.9rem;text-align: left}
.recom3{display: flex;
padding-bottom: 1rem;
padding-top: 1rem;
justify-content: space-around;
align-items: center;
background: url(../../img/hsfimg8.jpg) no-repeat center bottom;
background-size: 100%;
img{width: 33%;}}
.recom31{display: block;font-size: 1.5rem;color: #ff3721}
</style>
