<template>
    <div>
       <div class="addressBg">
          <div class="address_box">
            <div class="city" >
                <div class="city_choice">
                  <img class="dw" src="../../img/szcs.png" alt="">
                  <p>所在城市</p>
                  <img class="qh" src="../../img/qh.png" alt="" @click="choiceCity()">
                </div>
                <div class="city_show">
                  <div class="block city_show_1" >
                    <el-cascader
                      v-model="value"
                      :options="options"
                      @click="choiceCity()"
                      @change="handleChange"></el-cascader>
                  </div>
                </div>
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
    name:'index',
    data() {
      return {
        value: ['1','11','111'],
        options: [{
          value: '1',
          label: '福建',
          children: [{
            value: '11',
            label: '厦门市',
            children:[{
              value: '111',
              label: '思明区',
              },
              {
              value: '222',
              label: '湖里区',
              },
            ]
          },{
            value: '泉州市',
            label: '泉州市',
          },
          ]
        },{
          value: '1',
          label: '广州',
          children: [{
            value: '深圳',
            label: '深圳'
          }]
        }],
        cityVal:'',
        bgShow:false,
      };
    },
    methods: {
      handleChange(value) {
      },
      choiceCity(){
        $('.el-input').click();
        this.cityVal = $('.el-input__inner').val();
      }
    },
    mounted(){
 
    }
  };
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
          margin-top: 32px;
          float: left;
        }
        p{
          float: left;
          margin-left: 15px;
          font-size:26px;
        }
        .qh{
          width:120px;
          float:right;
          margin-top: 30px;
          margin-right: 20px;
        }
      }
      .city_show{
        .city_show_1{
          width:100%;
          margin:30px auto 0px;
          .el-cascader{
            width:100%;
            border:0px!important;
          }
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

@media screen and (min-width:750px) {
.addressBg{
  height:1200px;
}
}
@media screen and (min-width:1200px) {
.addressBg .address_box .price .price2 .p1{
  font-size: 1.4rem;
  line-height: 60px;
}

.addressBg .address_box .price .price2 .p2{
  font-size: 1rem;
}
.addressBg .address_box .price .price2 .p3{
  font-size: 1rem;
}
.addressBg .address_box .price .price2 .p4{
  font-size: 1rem;
}
.addressBg .address_box .price .price2 .p5{
  font-size: 0.8rem;
}
.addressBg .address_box .price .price3 .p7{
  font-size: 1rem;
}
.addressBg .address_box .price .price3 .p8{
  font-size: 1rem;
}
}
</style>
<style lang="less">
.el-input__inner{
  text-align: center;
  border:0px;
}
.el-input__icon{
  display: none;
}
.el-input{
  font-size: 32px;
  text-align: center;
}
.el-cascader-menu{
  min-width: 225px;
}
.el-cascader-panel{
  font-size: 28px;
}
.el-cascader-node.in-active-path{
  height:60px;
  color:#f34845;
}
.el-cascader-node{
  height: 60px;
  line-height: 60px;
}
.el-cascader-node.in-active-path, .el-cascader-node.is-active, .el-cascader-node.is-selectable.in-checked-path{
  color:#f34845;
}
.el-cascader-node__prefix{
  left:285px;
}
</style>
<style lang="less">
  @media screen and (max-width:750px) {
   
  }
</style>