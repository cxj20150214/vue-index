<template>
  <div>
    <div class="callbox">
      <div class="callbox_txt">
        <p class="tit">
        当前您附近有超过<span>{{driverNumber}}</span>位司机
        </p>
        <p class="tit1">为您服务</p>
      </div>
      <div class="callBorder"></div>
      <div class="callbox_input">
        <div class="tit">
          <div class="chufadi">
            <i class="iconfont icon-dingwei icon1"></i>
            <p class="txt_call">选择出发地</p>
          </div>
          <p class="address" @click="maplink">
            {{thisAddress}}
            <span>></span>
          </p>
        </div>
      </div>
      <p class="qibu"><router-link to="/address">点击查看地区服务价格</router-link></p>
      <el-button
        type="danger"
        class="button_hujiao"
        @click="callDriver()"
      >呼叫司机</el-button>
    </div>
    <el-dialog class="phoneVerification" :visible.sync="dialogFormVisible" width="90%">
      <div class="root">
        <el-form
          :model="Register"
          :rules="rules"
          ref="RegisterForm"
          label-width
          class="RegisterForm"
        >
          <el-form-item prop="phone">
            <el-input type="number" v-model="Register.phone" placeholder="请输入11位手机号码" class="v_phone"></el-input>
          </el-form-item>
          <el-form-item prop="sendcode" class="code">
            <el-input  type="number" v-model="Register.sendcode" placeholder="请输入验证码" class="v_phone"></el-input>
            <el-button
              type="button"
              @click="sendcode"
              :disabled="disabled"
              v-if="disabled==false"
            >发送验证码</el-button>
            <el-button
              type="button"
              style="background-color:#d5d6da;"
              @click="sendcode"
              :disabled="disabled"
              v-if="disabled==true"
            >{{btntxt}}</el-button>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              @click="dialogFormVisible = false ,submitForm('RegisterForm')"
            >确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "callDriver",
  inject: ['reload'],
  data() {
    return {
      appid:'',
      thisAddress:'',
      order_id:'',
      extension_shop:'0',
      province:'',
      openid:'',
      city:'',
      district:'',
      addr:'',
      driverNumber:'',
      order_address:'',
      order_lng :'',
      order_lat :'',
      access_token:'',
      platform:'official_accounts',
      dialogFormVisible: false,
      Register: {
        phone: "",
        sendcode: ""
      },
      rules: {
        phone: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
        sendcode: [
          { required: true, message: "验证码不能为空不能为空", trigger: "blur" }
        ]
      },
      disabled: false,
      time: 0,
      btntxt: "重新发送"
    };
  },
  methods: {
    NearbyDriver(){
      this.$axios.get('/api/driver/lists',{
        order_lng:this.order_lng,
        order_lat :this.order_lat
    })
      .then(res=>{
        console.log(res)
        this.driverNumber = res.data.total
      })
    },
    maplink(){
      let thisUrl = encodeURIComponent(window.location.href);
      window.location.href =`https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=${thisUrl}&key=CCHBZ-QHXK5-4VKIO-QYX6L-ODEHV-EZBXB&referer=洪师傅-h5`
    },
    getMyLocation() {
                var geolocation = new qq.maps.Geolocation("CCHBZ-QHXK5-4VKIO-QYX6L-ODEHV-EZBXB", "洪师傅-h5");
                geolocation.getIpLocation(this.showPosition, this.showErr);
                //geolocation.getLocation(this.showPosition, this.showErr);//或者用getLocation精确度比较高
            },
            showPosition(position) {
                console.log(position);
                this.order_lat = position.lat;
                this.order_lng = position.lng;
                this.city = position.city;
                this.province = position.province;
                this.addr = position.addr;
                this.thisAddress = position.province + position.city + position.addr;
                this.NearbyDriver();
            },
            showErr() {
                alert('定位失败');
                this.getMyLocation();//定位失败再请求定位，测试使用
                
            },
   //手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.Register.phone == "") {
        alert("手机号不能为空");
        return;
      }
      if (!reg.test(this.Register.phone)) {
        alert("请输入正确的手机号");
        return;
      } else {
        console.log(this.Register.phone);
        alert("发送成功");
        this.$axios.post('/api/sms/send',{
          mobile:this.Register.phone,
          type:'login'
        }).then(res=>{

        })
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    //60S倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post('/api/auth/login',{
            mobile:this.Register.phone,
            smsvcode :this.Register.sendcode,
            platform:'official_accounts',
            openid :this.openid
          }).then(res=>{
            console.log(res.data)
              if(res.code == 200){
                this.access_token = res.data.access_token
                let data = res.data;
                this.$store.commit('set_token', 'bearer ' + data.access_token);
                window.location.reload()
              }
          })
        } else {
          alert("请填写完整");
          this.dialogFormVisible = true;
          return false;
        }
      });
    },
    callDriver() {
      var thisUrl = this.$route.fullPath
      if(thisUrl.indexOf("extension_shop") == -1){
        this.extension_shop = 0
      }
      if(thisUrl.indexOf("extension_shop") != -1){
        this.extension_shop = this.$route.query.extension_shop;
      }
      this.$axios.post('/api/order/pagesave',{
            order_address :this.thisAddress,
            order_lng :this.order_lng ,
            order_lat :this.order_lat ,
            extension_shop:this.extension_shop,
            token:this.access_token
          }).then(res =>{
            console.log(res.data)
            if(res.code == 200){
              console.log(res.data.order_id)
              this.order_id = res.data.order_id
              alert('预约成功')
              this.$router.push({
                path: 'trip', 
                query: {
                  order_id: this.order_id
                }
              })
            }
            if(res.code == 401){
              this.dialogFormVisible =true
            }
            if(res.code ==422){
              alert(res.message);
            }
            if(res.code ==500){
              alert(res.message);
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
    getUrlKey(name){//获取url 参数
         return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
    },
    getOrder(){
      this.$axios.post('/api/auth/quick_login',{
        platform:this.platform,
        openid:this.openid,
      }).then(res =>{
        console.log(res)
        if(res.code == 200){
          this.access_token = res.data.access_token
          let data = res.data;
          this.$store.commit('set_token', 'bearer ' + data.access_token);
          // this.$router.go(0);
          window.location.reload()
        }
        if(res.code ==422){
          this.dialogFormVisible =true
        }
      })
    }
  },
  mounted(){
    // this.getMyLocation();
    // this.NearbyDriver();
  },
   created() {
    //  地图选点
     var thisUrl = this.$route.fullPath
     console.log(decodeURIComponent(thisUrl))
     if(thisUrl.indexOf("addr") != -1){
       var thisAddress = this.$route.query.addr
       var isArr = Array.isArray(thisAddress)
       console.log(thisAddress)
       console.log(isArr);
       if(!isArr){
         this.thisAddress = thisAddress
       }
       if(isArr){
         let address = thisAddress[thisAddress.length-1];
         this.thisAddress = address
       }
    }
    if(thisUrl.indexOf("latng") != -1){
      var latngArr = this.$route.query.latng
      var isArr = Array.isArray(latngArr)
      console.log(isArr);
      if(!isArr){
        let lat = latngArr.match(/(\S*),/)[0]
        let lat1 =lat.substring(0,lat.length-1)
        let lan = latngArr.match(/,(\S*)/)[1]
        console.log(lat1)
        console.log(lan)
        this.order_lng = lan
        this.order_lat = lat1
        this.NearbyDriver();
      }
      if(isArr){
        var thisLatng = this.$route.query.latng
        let Latng = thisLatng[thisLatng.length-1]
        let lat = Latng.match(/(\S*),/)[0]
        let lat1 =lat.substring(0,lat.length-1)
        let lan = Latng.match(/,(\S*)/)[1]
        console.log(lat1)
        console.log(lan)
        this.order_lng = lan
        this.order_lat = lat1
        this.NearbyDriver();
      }
    }
    if(thisUrl.indexOf("module") == -1){
      console.log('没用地图选点')
      this.getMyLocation();
    }
    //授权
    let code = this.getUrlKey("code");
    if (code) {
      this.$axios.post("/api/auth/wechatinfo?code=" + code).then(res => {
          console.log(res);
          if(res.code == 200){
            console.log(res.data.original.openid)
            this.openid = res.data.original.openid;
            this.$store.commit('set_openid',res.data.original.openid);
            this.getOrder();
          }
        });
      // console.log(code)
    } else {
      this.getCodeApi("123");
    }
  }
};
</script>
<style lang="less" scoped>
.qibu a{
  color:#999;
}
.callbox {
  display: flex;
  flex-direction: column;
  .qibu {
    width: 90%;
    margin: 0px auto;
    font-size: 24px;
    color: #999;
    margin-top: 60px;
    text-align: left;
  }
  .button_hujiao {
    width: 90%;
    height: 85px;
    font-size: 30px;
    margin: 30px auto 0px;
    border-radius: 15px;
  }
  .el-button--danger {
    background-color: #ff596a;
  }
}
.callbox_txt {
  .tit {
    font-size: 42px;
    margin-top: 60px;
    font-weight: 700;
    span {
      font-size: 52px;
      color: #ff732d;
    }
  }
  .tit1 {
    width: 300px;
    text-align: center;
    margin: 0px auto;
    font-size: 38px;
    font-weight: 600;
    margin-top: 20px;
    position: relative;
    margin-bottom: 80px;
    &::before {
      position: absolute;
      content: "";
      width: 40px;
      height: 3px;
      background-color: #ff2a40;
      left: 0px;
      top: 25px;
      border-radius: 15px;
    }
    &::after {
      position: absolute;
      content: "";
      width: 40px;
      height: 3px;
      background-color: #ff2a40;
      right: 0px;
      top: 25px;
      border-radius: 15px;
    }
  }
}
.callBorder {
  width: 100%;
  height: 10px;
  background-color: #f7f7f7;
}
.callbox_input {
  width: 90%;
  margin: 50px auto 0px;
  .tit {
    float: left;
    width: 100%;
    font-size: 36px;
    display: flex;
    flex-direction: column;
    .icon1 {
      float: left;
      font-size: 36px;
      color: #ff596a;
    }
    .txt_call {
      float: left;
      margin-left: 30px;
    }
    .address {
      text-align: left;
      padding-left: 60px;
      margin-top: 30px;
      position: relative;
      border-bottom: 1px solid #d5d5d5;
      padding-bottom: 30px;
      &::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: #44bfa3;
        left: 8px;
        top: 18px;
      }
      span {
        float: right;
        color: #999;
      }
    }
  }
}
.phoneVerification {
  .el-dialog__headerbtn {
    font-size: 30px !important;
  }
}

.root {
  background-size: 100% 100%;
  height: auto;
  width: 100vw;
  display: table-cell;
  vertical-align: middle;
  form {
    width: 90%;
    margin: auto;
    .code {
      .el-input {
        width: 60%;
        border-radius: 0px;
        float: left;
        display: inline-block;
      }
      .el-button {
        width: 40%;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
        padding: 0px;
        border: 0px;
        background-color: #ff596a;
        color: #fff;
        border-bottom: 1px solid #d5d5d5;
        float: left;
        display: inline-block;
        border-radius: 15px;
      }
    }
    .el-button--primary {
      width: 100%;
      background-color: #ff596a;
      border: none;
      height: 60px;
      font-size: 28px;
      color: #fff;
      border-radius: 20px;
    }
  }
}
.el-button{
  opacity: 1;
}
</style>
<style lang="less">
.el-button--danger:focus, .el-button--danger:hover{
    background: #999999!important;
    border-color: #999999!important;
    box-shadow: 0px 10px 15px rgba(0,0,0,.2);
}
.v_phone {
  margin-bottom: 15px;
}
.v_phone .el-input__inner {
  border: 0px;
  font-size: 32px;
  border-bottom: 1px solid #d5d5d5;
  height: 60px;
  line-height: 60px;
}
.root .el-form-item__error {
  display: none;
}
</style>