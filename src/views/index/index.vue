<template>
    <div>
        <div class="bg">
          <img src="../../img/download.png" alt="">
          <div class="link">
            <router-link to='/' class="android"></router-link>
            <router-link to='/' class="iphone"></router-link>
          </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'index',
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
    background-color: #2C44DE;
    .link{
      position: absolute;
      bottom:0px;
      width:100%;
      height:30vh;
      .android{
        width:80%;
        height:10vh;
        margin:2% auto 0px;
        display: inline-block;
        background-image: url("../../img/bottom1.png");
        background-size: 100%;
        background-repeat: no-repeat;
      }
      .iphone{
        width:80%;
        height:10vh;
        margin:1% auto 0px;
        display: inline-block;
        background-image: url("../../img/bottom2.png");
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
    img{
      width:100%;
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