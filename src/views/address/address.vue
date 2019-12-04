<template>
  <div>
    <div class="addressBg">
      <div class="address_box">
        <div class="city">
          <div class="city_choice">
            <img class="dw" src="../../img/szcs.png" alt />
            <p>{{city}}{{addr}}</p>
            <img class="qh" src="../../img/qh.png" alt @click="choiceCity()" />
          </div>
          <div class="city_show">
            <div class="block city_show_1">
              <el-cascader
                ref="myCascader"
                v-model="value"
                :options="data"
                @click="choiceCity()"
                @change="handleChange"
              ></el-cascader>
            </div>
          </div>
        </div>
        <div class="price">
          <div class="load" v-loading="loading">
            <div class="price1" v-show="priceShow">
              <div class="price1_1">{{regName}}价格表</div>
            </div>
            <div class="price2" v-for="item in priceList" v-show="priceShow">
              <p class="p2">
                含{{item.startkilometre}}km
                <span>({{item.servicetime[0]}}-{{item.servicetime[1]}})</span>
              </p>
              <p class="p1">
                微信叫代驾只需
                <span>{{item.startprice}}</span>元
              </p>
              <p class="p4">
                超出每
                <span>{{item.nextkilometre}}km</span>加收
                <span>{{item.nextprice}}</span>元，不足
                <span>{{item.nextkilometre}}km</span>按照
                <span>{{item.nextkilometre}}km</span>计算
              </p>
              <div class="price4">
                <p class="p7">等待时间：</p>
                <p
                  class="p8"
                >{{item.waittime}}分钟免费，超过{{item.nextwaittime}}分钟{{item.addwaittime}}元不满{{item.nextwaittime}}分钟按{{item.nextwaittime}}分钟计算</p>
              
              </div>
              <p v-show="item.rangeover > 0"
                  class="p9"
                >远途费，超过{{item.rangeover}}公里以后，每{{item.rangepercent}}公里（超过{{item.overrange}}km收费）加收{{item.addrange}}元</p>
            </div>
            <div class="noPrice" v-show="nopriceShow">抱歉，该区域暂未开放。</div>
            <div class="price3" v-show="priceShow">{{remarks}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "index",
  data() {
    return {
      value: [],
      data: [],
      cityVal: "",
      order_address:'',
      order_lng :'',
      order_lat :'',
      adcode:'',
      addr:'',
      bgShow: false,
      regId: "",
      cityLaber: "",
      yuantu:true,
      regName: "",
      loading: false,
      priceList: "",
      priceShow: true,
      nopriceShow: false,
      remarks: "",
      province:'',
      city:'',
      district:''
    };
  },
  methods: {
     getMyLocation() {
                var geolocation = new qq.maps.Geolocation("CCHBZ-QHXK5-4VKIO-QYX6L-ODEHV-EZBXB", "洪师傅-h5");
                geolocation.getIpLocation(this.showPosition, this.showErr);
                //geolocation.getLocation(this.showPosition, this.showErr);//或者用getLocation精确度比较高
            },
            showPosition(position) {
                var value =[];
                this.adcode = position.adcode;
                var pro = position.adcode.toString().substring(0, 2)
                var city = position.adcode.toString().substring(0, 4)
                var addr = position.adcode.toString()
                value.push(pro,city,addr)
                this.value = value
                this.order_lat = position.lat;
                this.order_lng = position.lng;
                this.city = position.city;
                this.addr = position.addr;
                this.getCity();
                this.getPrice();
            },
            showErr() {
                console.log("定位失败");
                this.getMyLocation();//定位失败再请求定位，测试使用
            },
    handleChange(value) {
      console.log(value)
      this.regName =
        this.$refs.myCascader.getCheckedNodes()[0].pathLabels[1] +
        this.$refs.myCascader.getCheckedNodes()[0].pathLabels[2];
      this.regId = value[2];
      this.$axios.get("/api/wechat/company/charge_standard", {
          id: this.regId
        })
        .then(res => {
          this.loading = true;
          if (res.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.priceShow = true;
              this.nopriceShow = false;
            }, 100);
            this.priceList = res.data.chargeStandard[0].standard;
            this.remarks = res.data.chargeStandard[0].remark;
          }
          if (res.code == 422) {
            setTimeout(() => {
              this.loading = false;
              this.priceShow = false;
              this.nopriceShow = true;
            }, 100);
          }
        });
    },
    choiceCity() {
      $(".el-input").click();
      this.cityVal = $(".el-input__inner").val();
    },
    getCity() {
      this.$axios
        .get("/api/wechat/region/list")
        .then(res => {
          this.data = res.data;
          console.log(res.data)
        });
    },
    getPrice() {
      this.$axios
        .get("/api/wechat/company/charge_standard", {
          id: this.adcode
        })
        .then(res => {
          this.loading = true;
          if (res.code == 200) {
            this.remarks = res.data.chargeStandard[0].remark;
            this.priceList = res.data.chargeStandard[0].standard;
            console.log(res,'远途费')
            setTimeout(() => {
              this.loading = false;
            }, 100);
          }
          if (res.code == 422) {
            setTimeout(() => {
              this.loading = false;
              this.priceShow = false;
              this.nopriceShow = true;
            }, 100);
          }
        });
    }
  },
  created(){
    // this.$axios.get('https://apis.map.qq.com/ws/geocoder/v1/?location= ',{
    //   location:'24.472775,118.155727',
    //   key:'CCHBZ-QHXK5-4VKIO-QYX6L-ODEHV-EZBXB'
    // }).then(res=>{
    //   console.log(res)
    //   // console.log('res')
    // })
  },
  mounted() {
    this.getCity();
    // this.getPrice();
    this.getMyLocation();
  }
};
</script>
<style lang="less" scoped>
.addressBg {
  width: 750px;
  height: auto;
  display: flex;
  margin: 0px auto;
  background-image: url("../../img/address-bg.jpg");
  background-size: 100% 145px;
  background-repeat: no-repeat;
  .address_box {
    width: 90%;
    margin: 50px auto;
    .city {
      background-color: #fff;
      border-radius: 10px;
      height: 195px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      .city_choice {
        width: 100%;
        height: 95px;
        line-height: 95px;
        border-bottom: 1px solid #f2f2f2;
        .dw {
          width: 20px;
          margin-left: 5%;
          margin-top: 32px;
          float: left;
        }
        p {
          float: left;
          margin-left: 15px;
          font-size: 26px;
        }
        .qh {
          width: 120px;
          float: right;
          margin-top: 30px;
          margin-right: 20px;
        }
      }
      .city_show {
        .city_show_1 {
          width: 100%;
          margin: 30px auto 0px;
          .el-cascader {
            width: 100%;
            border: 0px !important;
          }
        }
      }
    }
    .noPrice {
      height: 300px;
      font-size: 24px;
      border-radius: 15px;
      line-height: 300px;
    }
    .price {
      margin: 20px auto;
      padding: 37px;
      overflow: hidden;
      height: auto;
      // background-image: url('../../img/address-bg1.png');
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
      background-size: 700px 860px;
      background-repeat: no-repeat;
      border-radius: 15px;
      .price1 {
        height: 125px;
        border-bottom: 1px solid #d5d5d5;
        display: flex;
        .price1_1 {
          width: 407px;
          height: 73px;
          margin: 15px auto 0px;
          background-image: url("../../img/address-bg2.png");
          background-size: 100%;
          background-repeat: no-repeat;
          color: #333;
          line-height: 73px;
          font-size: 1.3rem;
          font-weight: 700;
        }
      }
      .price4 {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        margin-bottom: 20px;
      }
      .price2 {
        height: auto;
        border-bottom: 1px solid #d5d5d5;
        display: flex;
        flex-direction: column;
        .p_box {
          width: 80%;
          display: flex;
          flex-direction: row;
          text-align: center;
          margin: 60px auto 0px;
        }
        .dbx {
          width: 32px;
          height: 40px;
          display: inline;
          margin-right: 20px;
          margin-top: 20px;
        }
        .dbx1 {
          width: 32px;
          height: 40px;
          margin-left: 20px;
          margin-top: 20px;
        }
        .p1 {
          font-size: 1.2rem;
          line-height: -20px;
          margin-top: 20px;
          span {
            font-size: 1.2rem;
            color: #f34845;
          }
        }
        .p2 {
          width: 60%;
          margin: 30px auto 0px;
          font-size: 1.5rem;
          padding-bottom: 10px;
          border-bottom: 1px solid #ffd104;
        }
        .p3 {
          margin-top: 10px;
          font-size: 1.5rem;
        }
        .p4 {
          margin-top: 20px;
          font-size: 1.2rem;
          span {
            color: #f34845;
          }
        }
        .p5 {
          margin-top: 30px;
          font-size: 1.1rem;
        }
        .p6 {
          margin-top: 20px;
          font-size: 1.1rem;
        }
        .p7 {
          font-size: 1.3rem;
        }
        .p8 {
          font-size: 1.2rem;
        }
        .p9 {
          font-size: 1.2rem;
          margin-top: 15px;
          margin-bottom: 30px;
        }
      }
      .price3 {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        border-top: 1px dotted #d5d5d5;
        position: relative;
        font-size: 24px;
        &::before {
          content: "";
          left: -65px;
          top: -25px;
          width: 50px;
          height: 50px;
          background-color: #ffdb29;
          border-radius: 100%;
          position: absolute;
        }
        &::after {
          content: "";
          right: -65px;
          top: -25px;
          width: 50px;
          height: 50px;
          background-color: #ffdb29;
          border-radius: 100%;
          position: absolute;
        }
        .p5 {
          margin: 30px auto 0px;
          font-size: 1.2rem;
        }
        .p6 {
          margin-top: 20px;
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media screen and (min-width: 750px) {
  .addressBg {
    height: 1200px;
  }
}
@media screen and (min-width: 1200px) {
  .addressBg .address_box .price .price2 .p1 {
    font-size: 1.4rem;
    line-height: 60px;
  }

  .addressBg .address_box .price .price2 .p2 {
    font-size: 1rem;
  }
  .addressBg .address_box .price .price2 .p3 {
    font-size: 1rem;
  }
  .addressBg .address_box .price .price2 .p4 {
    font-size: 1rem;
  }
  .addressBg .address_box .price .price2 .p5 {
    font-size: 0.8rem;
  }
  .addressBg .address_box .price .price3 .p7 {
    font-size: 1rem;
  }
  .addressBg .address_box .price .price3 .p8 {
    font-size: 1rem;
  }
}
</style>
<style lang="less">
.el-cascader-menu__wrap{
  height:600px!important;
}
.el-input__inner {
  text-align: center;
  border: 0px;
}
.el-input__icon {
  display: none;
}
.city_show{
  .el-input {
  font-size: 32px;
  text-align: center;
}
.el-cascader{
  border:0px;
}
.el-input__inner{
  border:0px;
}
.el-input__suffix{
  display: none;
}
}
.el-cascader-menu {
  min-width: 225px!important;
}
.el-cascader-panel {
  font-size: 28px!important;
}
.el-cascader-node.in-active-path {
  height: 60px!important;
  color: #f34845!important;
}
.el-cascader-node {
  height: 60px!important;
  line-height: 60px!important;
}
.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  color: #f34845!important;
}
.el-cascader-node__prefix {
  left: 285px!important;
}
</style>
<style lang="less">
@media screen and (max-width: 750px) {
}
</style>