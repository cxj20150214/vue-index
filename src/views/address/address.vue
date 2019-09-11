<template>
    <div>
       <div class="addressBg">

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
  margin: 0px auto;
  background-image: url('../../img/address-bg.jpg')
}
  @media screen and (max-width: 750px) {
    .addressBg{
      width:100%;
    }
  }
   @media screen and (min-width: 750px) {
    
  }
</style>