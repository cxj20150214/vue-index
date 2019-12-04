<template>
  <div>
    <div class="bg" :style="{backgroundImage: 'url(' + bg_url + ')', backgroundSize:'contain'}">
      <div class="coupon">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm coupon_form"
        >
          <el-form-item prop="name">
            <el-input
              type="number"
              class="coupon_input"
              v-model="ruleForm.name"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form>
        <h2 class="hdgz">活动规则</h2>
        <div class="txt" v-html="remark"></div>
        <p class="hdrq">活动有效日期：</br>{{valid_at[0]}}~{{valid_at[1]}}</p>
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
      bg_url:'',
      remark:'',
      valid_at:'',
      id:'',
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
         name: [
            { required: true, message: '手机号必填', trigger: 'blur' },
          ],
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
          this.$axios.post('/api/activity/coupon/obtain',{
            id:this.id,
            mobile:this.ruleForm.name
          }).then(res=>{
            if(res.code ==200){
              alert('领取成功！')
              window.location.reload()
            }else if(res.code ==422){
              alert(res.message)
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    this.getHeight();
  },
  created(){
    this.id = this.$route.query.id
    let remarkStr =''
    this.$axios.get('/api/activity/coupon/detail',{
      id:this.id
    }).then(res=>{
      console.log(res)
      if(res.code == 200){
        this.bg_url = res.data.bg_url
        remarkStr = res.data.remark.replace(/↵/g,"\n");
        console.log(remarkStr)
        this.remark = remarkStr
        this.valid_at = res.data.valid_at
      }
    })
  }
};
</script>
<style lang="less" scoped>
.hdrq{
  width:600px;
  color:#fff;
  font-size: 28px;
  margin:40px auto 0px;
  text-align:left;
}
.hdgz{
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin-top: 40px;
  position: relative;
  &:before{
    position: absolute;
    content:'';
    width:200px;
    height:1px;
    background-color: #fff;
    left:40px;
    top:20px;
  }
  &:after{
    position: absolute;
    content:'';
    width:200px;
    height:1px;
    background-color: #fff;
    right:40px;
    top:20px;
  }
}
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
    width: 630px;
    height: 382px;
    margin: 375px auto 0px;
        .el-input__inner {
    border: 0px;
    text-align: center;
    font-size: 32px;
    height: 60px;
    line-height: 60px;
  }
  }
  .el-form-item__content {
    margin-left: 0px !important;
  }
  .el-form-item__error {
    width: 100%;
    font-size: 24px;
    margin-top: 15px;
  }
  .el-button {
    width: 100%;
    height: 80px;
    margin-top: 80px;
    opacity: 0;
  }
}
.txt{
  width:600px;
  max-height: 295px;
  overflow: hidden;
  margin:40px auto 0px;
  text-align: left;
  font-size: 28px;
  color: #fff;
}
</style>
<style lang="less">
    .coupon_form {
      .el-form-item__error{
        font-size: 32px;
        text-align: center;
        position: relative;
        padding-top: 15px;
      }
    width: 630px;
    height: 382px;
    display: flex;
    flex-direction: column;
    margin: 375px auto 0px;
    background-image:url("../../img/bdsj.png");
    .el-form-item__content{
      margin-left: 0px!important;
    }
    .el-form-item{
      width:470px;
      margin:170px auto 0px;
    }
        .el-input__inner {
    border: 0px;
    text-align: center;
    font-size: 32px;
    height: 60px;
    line-height: 60px;
  }
  }
</style>