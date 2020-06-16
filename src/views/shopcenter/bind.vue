<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="shopbind">
      <!--<div class="now">
        <p class="tit">当前登录微信号</p>
        <div class="box">
          <img :src="this.thisQuery.avatar_url" alt />
          <div class="txt_box">
            <p class="t1">{{this.thisQuery.realname}}</p>
            <p>{{this.thisQuery.mobile}}</p>
          </div>
          <p class="t2">已登录</p>
        </div>
      </div>-->
      <div class="bind">
        <img class="logo" src="../../img/bind_logo.png" alt />
        <div class="box">
          <!--<img src="../../img/dh.png" alt />-->
          <div class="txt_box">
            <el-form
              class="thisForm"
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="80px"
            >
              <el-form-item prop="mobile">
              <img class="bind_img1" src="../../img/bind1 (1).png" alt="">
                <input class="myInput" v-model="ruleForm.mobile" placeholder="输入手机号码" />
              </el-form-item>
              <el-form-item prop="smsvcode">
              <img class="bind_img1" src="../../img/bind1 (2).png" alt="">
                <input class="myInput" v-model="ruleForm.smsvcode" placeholder="输入验证码" />
                <div class="button yz" @click="verify">获取验证码</div>
              </el-form-item>
              <div class="button bd" @click="submitForm('ruleForm')">登录</div>
            </el-form>
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
      num: 0,
      // thisQuery: "",
      access_token: "",
      ruleForm: {
        mobile: "",
        smsvcode: ""
      },
      rules: {
        mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        smsvcode: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/auth/login", {
              mobile: this.ruleForm.mobile,
              smsvcode: this.ruleForm.smsvcode,
              platform: "official_accounts",
              openid: this.$store.state.openid
              // openid: "oNrsY1nhE5kjM4DTHPl3IYGpDrIw"
            })
            .then(res => {
              console.log(res);
              if (res.code == 200) {
                this.access_token = res.data.access_token;
                var serviceId = this.$route.query.service_id;
                this.$store.commit(
                  "set_token",
                  "bearer " + res.data.access_token
                );
                this.$store.commit("set_token1", res.data.access_token);
                alert("登录成功");
                this.$router.push({
                  path: "/shopcenter",
                  query: {
                    service_id: serviceId
                  }
                });
              } else {
                alert(res.message);
              }
            });
        } else {
          console.log("验证失败!!");
          return false;
        }
      });
    },
    verify() {
      this.$axios
        .post("/api/sms/send", {
          type: "login",
          mobile: this.ruleForm.mobile
        })
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            alert("发送成功");
          }else{
            alert(res.message)
          }
        });
    }
  },
  mounted() {},
  created() {
    // this.thisQuery = this.$route.query;
    // console.log(this.thisQuery);
  }
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
        background-color: #d5d5d5;
        border-radius: 100px;
      }
      .t2 {
        margin-left: 200px;
        font-size: 28px;
        margin-top: 15px;
        color: #666;
      }
    }
  }
  .bind {
    .logo {
      width: 250px;
    }
    width: 590px;
    margin: 0px auto;
    padding: 50px;
    .tit {
      font-size: 32px;
      color: #7a7979;
      text-align: center;
    }
    .box {
      display: flex;
      flex-direction: row;
      margin-top: 40px;
    
      .txt_box {
        width: 100%;
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
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: 28px;
          border-radius: 30px;
          float: right;
          margin-left: 20px;
          &.yz {
            width: 150px;
            color: #FF4F59;
          }
          &.bd {
            width: 100%;
            height:80px;
            line-height: 80px;
            font-size: 32px;
            background-color: #FF4F59;
            color: #fff;
          }
        }
      }
    }
  }
}
.thisForm {
  .el-form-item__content {
    width: 100%;
  }
  .el-input {
    font-size: 24px !important;
    .el-input__inner {
      border: 0px !important;
    }
  }
}
.button1 {
  width: 100%;
  background-color: #6e84f5;
}
.myInput {
  width: 345px;
  height: 60px;
  font-size: 28px;
  padding-left: 10px;
  float: left;
}
.el-form-item__error {
  font-size: 16px;
}
</style>
<style lang="less">
.thisForm {
  .bind_img1{
    width:25px;
    margin-top: 15px;
    float: left;
    margin-right: 20px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  .el-form-item__content {
    border-bottom: 1px solid #d5d5d5;
    margin-left: 0px !important;
  }
  .el-form-item__error{
    font-size: 24px;
  }
}
</style>