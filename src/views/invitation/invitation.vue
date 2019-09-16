<template>
    <div>
        <div class="bg">
          <img class="dibu" src="../../img/yaoqin_bg1.png" alt="">
          <img class="title" src="../../img/yaoqin_bg2.png" alt="">
          <div class="content">
            
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
  methods:{
    getHeight(){
      $(document).ready(function(){
         var windowHeight = $(window).height()
         $('.bg').css('height',windowHeight)
      })
    }
  },
  mounted(){
   this.getHeight()
  }
}
</script>
<style lang="less" scoped>
  .bg{
    width:750px;
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
    }
  }
  @media screen and (max-width: 750px) {
    .bg{
      width:100%;
    }
  }
   @media screen and (min-width: 1200px) {
    .bg{
      height:auto!important;
    }
    .bg .link .android{
      height: 140px;
    }
    .bg .link .iphone{
      height: 140px;
    }
    .bg .link{
      height: auto!important;
    }
  }
</style>