<template>
  <div class="reward">
      <div class="rew_info">
          <p>将账户余额将提现到微信</p>
<<<<<<< HEAD
          <p class="rew_price">￥ 8000.00</p>
          <p class="rew_totail">当前可提现金额：￥8563.23  （最小提现额度1元）</p>
=======
          <p class="rew_price">￥ <input  @change="search($event)" type="number" v-model="money" min="1"></p>
          <p class="rew_totail">当前可提现金额：￥{{totalmoney}}  （最小提现额度1元）</p>
>>>>>>> develop
      </div>
      <p class="rew_wx" @click="getmoney">提现到微信</p>
      <div class="infinite-list-wrapper" style="overflow:auto" ref="my_pull">
        <ul class="list">
        <li v-for="remoney in remoneys" class="list-item rew_inf">
            <p class="rew_money"><i class="isty1">￥</i>{{remoney.royalty_money}}</p>
            <p class="rew_infs">
                <span>{{remoney.created_at}} 提现{{remoney.pay_name}}</span>
            </p>
        </li>
        </ul>
    <p v-if="!isLast" class="moreinf">加载中...</p>
    <p v-if="isLast" class="moreinf">我是有底线的...</p>
  </div>

  </div>
</template>
<script>
import { reject } from 'q'
export default {
  data:function () {
    return {
        count:5,
        current:'1',
        totalmoney:'',
        total:'',
        el:{},
        isLast:false,
        money:'',
        openid:this.$store.state.openid,
        // openid:'o7jOgs23RdFFtKApihTyO9d-4IM0',
        shop_id:'1',
        subscribe:'',
        page:1,
        limit:8,
        remoneys: [],
        loading: false,
        service_id:''
      }
    },
    created() {
    //返回值  
    this.getorder();
  },
  watch:{
    current(){
      this.money=this.current
    },
  '$route':"getopenid"
//  '$route' () {
//    console.log('222')
//    this.getopenid();
//     }

  },
  mounted() {
       this.clientHeight = document.documentElement.clientHeight
       this.$nextTick(() => {
          this.el = this.$refs.my_pull;
          window.addEventListener('scroll', this.handleScroll)
       })
        },
    methods: {
    getorder(){
        this.$axios.post('/api/shop/info',{openid:this.openid}).then(res=>{
        if(res.code===200){
          this.totalmoney=res.data.royalty_money;
          this.money=res.data.royalty_money;
          this.subscribe=res.data.status;
          this.shop_id=res.data.id;
          this.getServer();
        }else if(res.code===422){
            var service_id = this.$route.query.service_id
            this.$router.push({
                path: 'invitation', 
                query: {
                  service_id: service_id
                }
              })
        }
      },reject=>{
        alert("重新刷新！");
      })
    },
     handleScroll() {
        let a = this.el.getBoundingClientRect().bottom;
        a = Math.ceil(a);
        if (a +50== this.clientHeight) {
         this.isbottom = -1
         this.page++
         this.getServer()}
         },
      getServer(){
          this.$axios.get("/api/shop/orderlist",{
            shop_id:this.shop_id,
            type:1,
            page:this.page,
            limit:this.limit
          }).then((res)=>{
            console.log(res)
            if(res.code==200){
               if (this.page == 1) {
                 this.remoneys = res.data.list;
                } else {
                this.remoneys = [...this.remoneys,...res.data.list]
                      }
               if (res.data.list.length >= 1) {
                 this.isLast = false
                 } else {
                 this.isLast = true;
                 this.isbottom = 1
                window.removeEventListener('scroll', this.handleScroll)
                        }
      
          }else{
            alert('重新刷新!')
          }
          },(reject)=>{
            alert('重新刷新!')
          })
      },
      search(event){
        if(event.target.value<=this.totalmoney&&event.target.value>=1){
          this.current=event.target.value
        }else if(event.target.value<1){
          alert('不能提现小于1！')
          this.money=this.current 
        }else{
          alert('额度大于总提现金额！')
          this.money=this.current
        }
        
      },
    getmoney(){
        if(this.money<=this.totalmoney){
          this.$axios.post('/api/shop/withdraw',{
            shop_id:this.shop_id,
            money:this.money,
            openid:this.openid,
            subscribe:this.subscribe
          }).then(res=>{
            if(res.code==200){
              alert('提现成功！')
              // this.$router.go(0);
              window.location.reload()
            }else if(res.code==422){
              alert('余额不足！')
            }else{
              alert('提现失败！重新提交！')
            }
          },reject=>{
            alert('提现失败！重新提交！')
          })
        }else{
           alert('提现额度大于总提现金额！')
        }
      },
       getUrlKey(name){//获取url 参数
         return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
    },
     getCodeApi(state) {
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
    }
  }
</script>
<style lang="less">
.reward{
    padding:1rem;
    background-color: #f1f1f1;
    }
.rew_info{
    padding: 1.2rem;
    background-color: #fff;
    border-radius: .4rem;
    font-size: 1rem;
    color: #7c838d;
    text-align: left;
    }
.rew_price{
    font-size: 2.2rem;
    font-weight: bold;
    color: #121922;
    padding-top: 1.1rem;
    padding-bottom: .4rem;
    border-bottom: 1px solid #e4e4ee;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    }
.rew_totail{font-size: .9rem;}
.rew_wx{
    font-size: 1rem;
    background-color: #ff6767;
    line-height: 3;
    border-radius: 1rem;
    color: #fff;
    margin-top: 1.6rem;
    margin-bottom: 1.4rem;
}
.rew_inf{
    border-bottom: 1px solid #e4e4ee;
    padding-top:.5rem;
    padding-bottom: .5rem;
    color: #121922;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.isty1{
    font-size: 1.2rem;
    font-style: normal;
}
.rew_money{
    font-size: 1.4rem;
    font-weight: bold;
    }
.rew_infs{
    font-size: 1.1rem;
    color: #7c838d;
    span{
        display: block;
        text-align: right;
        
    }
}
.moreinf{
  margin-top: .8rem;
  color: #7c838d
  }
</style>
