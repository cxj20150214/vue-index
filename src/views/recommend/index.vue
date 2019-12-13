<template>
  <div class="recom">
    <div class="recom1">
      <div class="user_inf">
        <div class="userid"><img :src="this.$store.state.userInfo.headimgurl"></div>
        <div class="userinf">
          <p class="username">{{this.$store.state.userInfo.nickname}}</p>
        </div>
        <div class="getmonery"  @click="totixian">提现</div>
      </div>
      <div class="user_pro">
        <div class="user_pro1"><p>{{symoney}}</p>收益</div>
        <div class="user_pro2"><p>{{royalty_money}}</p>余额</div>
      </div>
      <div class="user_rec" @click="toreward">奖励细明&nbsp;<i class="iconfont icon-arrowright"></i>
      </div>
    </div>
    <div class="recom2">
      <p class="recom2_p1">邀请轻松赚零花钱</p>
  
      <p class="recom2_p3">邀请新人扫码，受邀人下单后即为邀请成功。邀请新用户可获得一定的奖励金额</p>
    </div>
    <div class="recom3">
      <span class="recom31">扫码</span>
      <img :src="qrcode_url">
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
      openid:this.$store.state.openid,
      // openid:'oNrsY1nhE5kjM4DTHPl3IYGpDrIw',
      // openid:'o7jOgs23RdFFtKApihTyO9d-4IM0',
      royalty_money:this.$store.state.shInfo.royalty_money,
      id:this.$store.state.shInfo.id,
      qrcode_url:this.$store.state.shInfo.qrcode_url,
      symoney:'',
    }
  },
  methods:{
    toreward(){
      let service_id  = this.$route.query.service_id;
      this.$router.push({ 
        path: '/tixian',
        query: {
          service_id:service_id
        }
      })
    },
    totixian(){
      let service_id  = this.$route.query.service_id;
      this.$router.push({
          path: '/reward',
          query: {
          service_id:service_id
        }
      })
    },
     getCodeApi(state) {
      //获取code
      var thisUrl = this.$route.fullPath
      if(thisUrl.indexOf("service_id") == -1){
        this.$axios.get('/api/wechat/info/appid',{
         service_id:2
       })
       .then(res=>{
          console.log(res,'获取到appid');
          let urlNow = encodeURIComponent(window.location.href);
          let scope = "snsapi_userinfo"; //snsapi_userinfo   //静默授权 用户无感知
          let appid = "";
          appid = res.data
          console.log(appid)
          let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
          window.location.replace(url);
       })
      }
      if(thisUrl.indexOf("service_id") != -1){
        let service_id =  this.$route.query.service_id
        this.$axios.get('/api/wechat/info/appid',{
         service_id:service_id
       })
       .then(res=>{
          console.log(res,'获取到appid');
          let urlNow = encodeURIComponent(window.location.href);
          let scope = "snsapi_userinfo"; //snsapi_userinfo   //静默授权 用户无感知
          let appid = "";
          appid = res.data
          console.log(appid)
          let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
          window.location.replace(url);
       })
      }
    },
    getUrlKey(name) {
      //获取url 参数
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            location.href
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    },
    info(){
      this.$axios.post('/api/shop/info',{
      openid:this.openid
    })
    .then(res=>{
      var service_id = this.$route.query.service_id
      if(res.code == 422){
        this.$router.push({
                path: 'invitation', 
                query: {
                  service_id:service_id,
                }
              })
      }
      if(res.code == 200){
        this.$store.commit("set_shInfo", res.data);
        this.qrcode_url = res.data.qrcode_url;
        this.royalty_money = res.data.royalty_money;
        this.id = res.data.id
        this.$axios.get('/api/shop/income',{
          shop_id:this.id
        })
        .then(res=>{
          if(res.code == 200){
            this.symoney = res.data.money
          }
        })
      }
    })
    }
  },
  mounted(){
    // this.info();
  },
  created() {
    //返回值
    let code = this.getUrlKey("code");
    if (code) {
      this.$axios.post("/api/auth/wechatinfo?code=" + code).then(res => {
        console.log(res);
        if (res.code == 200) {
          console.log(res.data.original.openid);
          this.openid = res.data.original.openid;
          this.$store.commit("set_openid", res.data.original.openid);
          this.$store.commit("set_userInfo", res.data.original);
          this.info();
        }
        if(res.code == 500) {
          this.info();
        }
      });
    } else {
      this.getCodeApi("123");
    }

  }
}
</script>
<style lang="less">
.recom{
  height: 100vh;
}
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

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
.userinf{color:#fff;align-self: center;
font-size: 28px;
.usertel{font-size: 28px;}
}
.username{font-size: 36px;margin-left: -190px;}
.getmonery{
  color:#ff5a57;
  background-color: #ffd47e;
  border-radius: 1rem;
  padding: 15px 50px;
  border:2px solid #ff5a57;
  line-height: 1rem;
  height: 1rem;
  font-size: 28px;
  align-self: center;
  box-shadow: 1px 1px 1px 2px #ffd47e,-1px -1px 1px 2px #ffd47e;
  }
.userid{align-self: center;}
.userid img{
  width: 80px;
  border-radius: 50%;
  border:.166rem solid rgba(255, 255, 255, .2)}
  .user_pro{
    display: flex;
    color: #fff;
    justify-content:space-around;
    font-size: 28px;
    padding-top: calc(100% * 0.12077);
    p{font-size: 32px;color:#ffde00}   
    }
.user_rec{
  font-size:28px;
  color: #ff5949;
  margin-top: 8px;
}
.recom2{
  background: url(../../img/hsfimg7.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  height: calc(0.61148 * 100vw);
}
.recom2_p1{padding-top:calc(0.12 * 100vw);color: #ff3721;font-size: 32px;line-height: 32px;}
.recom2_p2{padding-top:calc(0.035 * 100vw);color:#666;font-size:.9rem}
.recom2_p3{padding:calc(0.12 * 100vw) calc(0.13526 * 100vw) 0;color:#666;font-size:26px;text-align: center;margin-top: 40px;}
.recom3{display: flex;
width: 100vw;
bottom:0px;
position: absolute;
padding-bottom: 1rem;
padding-top: 1rem;
justify-content: space-around;
align-items: center;
background: url(../../img/hsfimg8.jpg) no-repeat center bottom;
background-size: 100%;
img{width: 33%;}}
.recom31{display: block;font-size: 1.5rem;color: #ff3721}
</style>
