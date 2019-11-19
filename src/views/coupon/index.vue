<template>
  <div>
    <div class="bg">
      <div class="coupon">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm coupon_form"
        >
          <el-form-item prop="phone">
            <el-input
              type="number"
              class="coupon_input"
              v-model="ruleForm.name"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form>
        <p class="txt">
        1.优惠券领取后，可在APP客户端“我的账户-优惠券”中查看使用详情；</br>
2.优惠券使用于已开通代驾城市；</br>
3.本活动禁止刷单，一经发现，代驾券作废处理；</br>
4.本活动最终解释权归洪师傅代驾所有；</br>
5.活动有效日期2019年10月22日 至 2019年11月22日。</br>
</p>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "coupon",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
      }
    };
  },
  components: {},
  methods: {
    getHeight() {
      $(document).ready(function() {
        var windowHeight = $(window).height();
        $(".bg").css("height", windowHeight);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    this.getHeight();
  }
};
</script>
<style lang="less" scoped>
.bg {
  width: 750px;
  margin: 0px auto;
  display: flex;
  position: relative;
  background-color: #f54244;
  background-image: url("../../img/coupon-bg.png");
  background-repeat: no-repeat;
}
.coupon {
  width: 100%;
  .coupon_form {
    width: 400px;
    margin: 550px auto 0px;
  }
  .el-form-item__content {
    margin-left: 0px !important;
  }
  .el-input__inner {
    border: 0px;
    text-align: center;
    font-size: 32px;
    height: 60px;
    line-height: 60px;
  }
  .el-form-item__error {
    width: 100%;
    font-size: 24px;
    margin-top: 15px;
  }
  .el-button {
    width: 100%;
    height: 80px;
    margin-top: 50px;
    opacity: 0;
  }
}
.txt{
  width:600px;
  margin:120px auto 0px;
  text-align: left;
  font-size: 28px;
  color: #fff;
}
</style>