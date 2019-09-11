<template>
    <div>
       <div class="addressBg">
          <div class="address_box">
            <div class="city">
                <div class="city_choice">
                  <img class="dw" src="../../img/szcs.png" alt="">
                  <p>所在城市</p>
                  <img class="qh" src="../../img/qh.png" alt="">
                </div>
                <div class="city_show"></div>
            </div>
            <div class="price">
              <div class="price1">
                 <div class="price1_1">
                  厦门市地区价格表
                 </div>
              </div>
              <div class="price2">
                  <div class="p_box">
                    <img class="dbx" src="../../img/dbx1 (1).png" alt="">
                    <p class="p1">微信叫代驾只需<span>18</span>元</p>
                    <img class="dbx1" src="../../img/dbx1 (2).png" alt="">
                  </div>
                  <p class="p2">含5.5km(07:00-21:59)</p>
                  <p class="p3">含3.5km(22:00-06:59)</p>
                  <p class="p4">超出每<span>0.8km</span>加收<span>2</span>元，不足<span>0.8km</span>按照<span>0.8km</span>计算</p>
                  <p class="p5">1.代驾出区外  2.区外代驾到区内</br>
                  3.区外代驾区外超过6公里，系统自动增收20％的返程费。</p>
                  <p class="p6">（起点或目的地在区外，超过6公里才收取）</p>
              </div>
              <div class="price3">
                <p class="p7">等待时间：</p>
                <p class="p8">10分钟免费，超过1分钟1元不满1分钟按1分钟计算</p>
              </div>
            </div>
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
  background-size: 100% 145px;
  background-repeat: no-repeat;
  .address_box{
    width:90%;
    margin:50px auto;
    .city{
      background-color: #fff;
      border-radius:10px;
      height: 195px;
      box-shadow: 0px 5px 10px rgba(0,0,0,.1);
      .city_choice{
        width:100%;
        height:95px;
        line-height:95px;
        border-bottom:1px solid #f2f2f2;
        .dw{
          width:20px;
          margin-left: 5%;
          margin-top: 35px;
          float: left;
        }
        p{
          float: left;
          margin-left: 15px;
          font-size:1.2rem;
        }
        .qh{
          width:120px;
          float:right;
          margin-top: 30px;
          margin-right: 20px;
        }
      }
    }
    .price{
      margin:20px auto;
      margin-left: -10px;
      padding:37px;
      height:860px;
      background-image: url('../../img/address-bg1.png');
      background-size: 700px 860px;
      background-repeat: no-repeat;
      .price1{
        height: 125px;
        border-bottom:1px solid #d5d5d5;
        display: flex; 
        .price1_1{
          width:407px;
          height:73px;
          margin:15px auto 0px;
          background-image: url("../../img/address-bg2.png");
          background-size: 100%;
          background-repeat: no-repeat;
          color:#333;
          line-height: 73px;
          font-size: 1.3rem;
          font-weight: 700;
        }
      }
      .price2{
        height:543px;
        display: flex;
        flex-direction: column;
        .p_box{
          width:80%;
          display: flex;
          flex-direction: row;
          text-align: center;
          margin:60px auto 0px;
        }
        .dbx{
          width:32px;
          height: 40px;
          display: inline;
          margin-right:20px;
          margin-top: 20px;
        }
        .dbx1{
          width:32px;
          height: 40px;
          margin-left:20px;
          margin-top: 20px;
        }
        .p1{
          font-size: 1.8rem;
          line-height: -20px;
          span{
            font-size: 2.5rem;
            color:#f34845;
          }
        }
        .p2{
          width:60%;
          margin:30px auto 0px;
          font-size: 1.5rem;
          padding-bottom: 10px;
          border-bottom:1px solid #ffd104;
        }
        .p3{
          margin-top: 10px;
          font-size: 1.5rem;
        }
        .p4{
          margin-top: 20px;
          font-size: 1.3rem;
          span{
            color:#f34845;
          }
        }
        .p5{
          margin-top: 30px;
          font-size: 1.1rem;
        }
        .p6{
          margin-top: 20px;
          font-size: 1.1rem;
        }
      }
      .price3{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        .p7{
          width:40%;
          text-align: right;
          font-size:1.3rem;
        }
        .p8{
          width:60%;
          font-size:1.2rem;
          text-align: left;
        }
      }
    }
  }
}
@media screen and (max-width:750px) {
.addressBg{
  width:100%;
}
}
</style>
<style lang="less">

</style>