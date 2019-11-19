<template>
    <div>
        <div class="bg_invitation">
          <img class="dibu" src="../../img/yaoqin_bg1.png" alt="">
          <img class="title" src="../../img/yaoqin_bg2.png" alt="">
          <div class="content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm yaoqinForm">
              <el-form-item  prop="yaoqin">
                <el-input v-model="ruleForm.yaoqin" class="yaoqinInput"></el-input>
              </el-form-item>
                <el-button type="primary" class="yaoqinSub" @click="submitForm('ruleForm')">立即创建</el-button>
            </el-form>
          </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'invitation',
  components:{
  },
    data() {
      return {
        openid:this.$store.state.openid,
        // openid:"oNrsY1nhE5kjM4DTHPl3IYGpDrIw",
        ruleForm: {
          yaoqin: '',
        },
        rules: {
          yaoqin: [
            { required: true, message: '请输入邀请码', trigger: 'blur' },
            { min: 1, max: 8, message: '长度在 3 到 50 个字符', trigger: 'blur' }
          ]
        }
      };
   },
  methods:{
    // getHeight(){
    //   $(document).ready(function(){
    //      var windowHeight = $(window).height()
    //      $('.bg_invitation').css('height',windowHeight)
    //   })
    // },
    submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/shop/bind",{
              openid:this.openid,
              bind_code:this.ruleForm.yaoqin
            })
            .then(res=>{
              if(res.code == 200){
                // alert(res.message)
                this.$router.go(-1);
              }
              if(res.code == 422){
                alert(res.message)
              }
            })
          } else {
            console.log('绑定失败!!');
            return false;
          }
        });
    },
  },
  mounted(){
  //  this.getHeight()
  }
}
</script>
<style lang="less" scoped>
  .bg_invitation{
    width:750px;
    height: 100vh;
    margin:0px auto;
    position: relative;
    background-image: url('../../img/yaoqin_bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    .title{
      width:500px;
      margin-top: 125px;
      margin-bottom: 100px;
    }
    .dibu{
      width:80%;
      position: absolute;
      bottom:50px;
      left:10%;
    }
    .content{
      width:566px;
      height:566px;
      margin:0px auto;
      background-image: url('../../img/coin.png');
      display: flex;
    }
  }
  .yaoqinForm{
    width:300px;
    margin-left: 100px;
    margin-top: 195px;
  }
  .yaoqinSub{
    margin-top: 140px;
    width:330px;
  }
  @media screen and (max-width: 750px) {
    .bg_invitation{
      width:100%;
    }
  }
   @media screen and (min-width: 750px) {
   
  }
</style>
<style lang="less">
.yaoqinForm {
   .el-input__inner{
      border:0px;
      font-size: 36px;
      height: 50px;
      line-height: 50px;
  }
  .el-form-item__error{
    padding-top: 15px;
    font-size: 16px;
  }
  .el-button{
        padding: 25px 20px;
        opacity: 0;
  }
}
   
</style>