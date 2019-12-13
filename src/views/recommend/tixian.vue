<template>
  <div class="tixian infinite-list-wrapper">
    <div class="ti_header">
      <p class="ti_title">总金额（元）</p>
      <p class="ti_totail">{{royalty_money}}</p>
    </div>
    <!-- <div class="ti_inf">
          <p class="ti_time">日期：2018.09.12  16:00</p>
          <p class="ti_infs">订单号：2569565856445<span class="ti_money">+8元</span></p>
      </div>
      <div class="ti_inf">
          <p class="ti_time">日期：2018.09.12  16:00</p>
          <p class="ti_infs">订单号：2569565856445<span class="ti_money">+8元</span></p>
    </div>-->
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul class="list">
        <li v-for="timoney in timoneys" class="list-item ti_inf">
          <p class="ti_time">日期：{{timoney.created_at}}</p>
          <p class="ti_infs">
            订单号：{{timoney.order_id}}
            <span class="ti_money">+{{timoney.royalty_money}}元</span>
          </p>
        </li>
      </ul>
      <div class="sfopen" v-show="sfopen">抱歉，暂无奖励明细。</div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      // count: 5,
      openid: this.$store.state.openid,
      shop_id: this.$store.state.shInfo.id,
      type: "0",
      page: "1",
      limit: "100",
      sfopen:false,
      royalty_money:this.$store.state.shInfo.royalty_money,
      timoneys: [
        {
          created_at: "",
          order_id: "",
          royalty_money: ""
        },
      ],
      loading: false,
      service: ""
    };
  },
  // computed: {
  //   noMore() {
  //     return this.count >= 12;
  //   },
  //   disabled() {
  //     return this.loading || this.noMore;
  //   }
  // },
  methods: {
    // load() {
    //   this.loading = true;
    //   setTimeout(() => {
    //     this.count += 2;
    //     this.loading = false;
    //   }, 2000);
    // },
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
    orderlist() {
      this.$axios
        .get("/api/shop/orderlist", {
          shop_id: this.shop_id,
          type: this.type,
          page: this.page,
          limit: this.limit
        })
        .then(res => {
          this.timoneys = res.data.list
          if(res.data.list.length ==0){
            this.sfopen = true;
          }
        });
    },
    // info(){
    //   this.$axios.post('/api/shop/info',{
    //   openid:this.openid
    // })
    // .then(res=>{
    //   var url = this.$route.fullPath
    //   var newUrl = decodeURIComponent(url);
    //   var service_id = newUrl.match(/service_id=(\S*)/)[1]
    //   this.service_id = service_id
    //   console.log(service_id)
    //   if(res.code == 422){
    //     this.$router.push({
    //             path: 'invitation', 
    //             query: {
    //               service_id: this.service_id
    //             }
    //           })
    //   }
    //   if(res.code == 200){
    //     this.royalty_money = res.data.royalty_money
    //     this.shop_id =  res.data.id;
    //     this.orderlist();
    //   }
    // })
    // }
    // aaa(){
    //   var lastnum =url.charAt(url.length-1)
    //   var url = this.$route.query.order_id
    //   var newurl = url.substring(0, 18);
    //   console.log(newurl)
    // }
  },
  mounted() {
    // this.aaa();
    this.orderlist();
    //  this.info();
  },
  created() {
    //返回值
    // let code = this.getUrlKey("code");
    // if (code) {
    //   this.$axios.post("/api/auth/wechatinfo?code=" + code).then(res => {
    //     console.log(res);
    //     if (res.code == 200) {
    //       console.log(res.data.original.openid);
    //       this.openid = res.data.original.openid;
    //       this.$store.commit("set_openid", res.data.original.openid);
    //       this.info();
    //     }
    //     if(res.code == 500) {
    //       this.info();
    //     }
    //   });
    // } else {
    //   this.getCodeApi("123");
    // }
  }
};
</script>
</script>
<style lang="less">
.tixian {
  background-color: #f7f7f7;
  padding-bottom: 1rem;
}
.ti_header {
  background: url(../../img/hsfimg11.png);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: calc(0.388736 * 100vw);
}
.ti_title {
  font-size: 28px;
  color: rgba(255, 255, 255, 0.6);
  padding-top: calc(0.12077 * 100vw);
}
.ti_totail {
  font-size: 54px;
  color: #fff;
  margin-top: 1rem;
}
.ti_inf {
  margin: 0.73rem 1rem;
  padding: 1.6rem 1.445rem 1.45rem;
  background-color: #fff;
  border-radius: 0.6rem;
  text-align: left;
  font-size: 26px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background-color: #ffcf73;
    height: 0.6rem;
    width: 5.5rem;
    -ms-transform: skewX(30deg);
    -moz-transform: skewX(30deg);
    -webkit-transform: skewX(30deg);
    transform: skewX(30deg);
    top: 0;
    right: 0.3rem;
  }
  &::after {
    position: absolute;
    content: "";
    background-color: #ffcf73;
    height: 0.55rem;
    width: 0.5rem;
    border-top-right-radius: 0.55rem;
    right: 0;
    top: 0;
  }
}
.ti_infs {
  position: relative;
  padding-top: 1rem;
}
.ti_money {
  color: #ff3333;
  position: absolute;
  right: 0;
}
</style>
