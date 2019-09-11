<template>
    <div>
       <div class="addressBg">
          <div class="address_box">
            <div class="city">

            </div>
            <div class="price"></div>
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
   
  },
  mounted(){
   
  }
}
</script>
<style lang="less" scoped>
.addressBg{
  width: 750px;
  height: auto;
  display: flex;
  margin: 0px auto;
  background-image: url('../../img/address-bg.jpg');
  background-size: 100% 18vh;
  background-repeat: no-repeat;
  .address_box{
    width:90%;
    margin:50px auto;
    .city{
      background-color: #fff;
      border-radius:10px;
      height: 195px;
      box-shadow: 0px 5px 10px rgba(0,0,0,.1);
    }
  }
}
  @media screen and (max-width: 750px) {
    .addressBg{
      width:100%;
    }
  }
   @media screen and (min-width: 750px) {
    
  }
</style>