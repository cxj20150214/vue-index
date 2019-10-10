<template>
  <div>
    <div class="callbox">
      <div class="callbox_txt">
        <p class="tit">
          当前您附近有超过
          <span>15</span>位司机
        </p>
        <p class="tit1">为您服务</p>
      </div>
      <div class="callBorder"></div>
      <div class="callbox_input">
        <div class="tit">
          <div class="chufadi">
            <i class="iconfont icon-dingwei icon1"></i>
            <p class="txt">选择出发地</p>
          </div>
          <p class="address"> 
            福建省厦门市思明区体育中心
            <span>></span>
          </p>
        </div>
      </div>
      <p class="qibu">18元起步，查看服务价格和接单范围</p>
      <el-button
        type="danger"
        class="button_hujiao"
        v-if="dialoglogin ==false"
        @click="dialogFormVisible = true"
      >呼叫司机</el-button>
      <el-button
        type="danger"
        class="button_hujiao"
        v-if="dialoglogin ==true"
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
            <el-input v-model="Register.phone" placeholder="请输入11位手机号码" class="v_phone"></el-input>
          </el-form-item>
          <el-form-item prop="sendcode" class="code">
            <el-input v-model="Register.sendcode" placeholder="请输入验证码" class="v_phone"></el-input>
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
  data() {
    return {
      dialogFormVisible: false,
      dialoglogin: false,
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
    //手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.Register.phone == "") {
        alert('手机号不能为空')
        return;
      }
      if (!reg.test(this.Register.phone)) {
        alert('请输入正确的手机号')
        return;
      } else {
        console.log(this.Register.phone);
        alert('发送成功')
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
          alert("注册成功")
          this.dialoglogin = true
        } else {
          alert("请填写完整")
          this.dialogFormVisible = true;
          return false;
        }
      });
    },
    callDriver() {
      alert('呼叫成功')
    }
  }
};
</script>
<style lang="less" scoped>
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
    .txt {
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
</style>
<style lang="less">
.v_phone {
  margin-bottom: 15px;
}
.v_phone .el-input__inner {
  border: 0px;
  font-size: 28px;
  border-bottom: 1px solid #d5d5d5;
  height: 60px;
  line-height: 60px;
}
.root .el-form-item__error {
  display: none;
}
</style>