<template>
  <div class="tixian infinite-list-wrapper"  >
      <div class="ti_header">
          <p class="ti_title">总金额（元）</p>
          <p class="ti_totail">8888.00</p>
      </div>
      <!-- <div class="ti_inf">
          <p class="ti_time">日期：2018.09.12  16:00</p>
          <p class="ti_infs">订单号：2569565856445<span class="ti_money">+8元</span></p>
      </div>
      <div class="ti_inf">
          <p class="ti_time">日期：2018.09.12  16:00</p>
          <p class="ti_infs">订单号：2569565856445<span class="ti_money">+8元</span></p>
      </div> -->
      <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="timoney in timoneys" class="list-item ti_inf">
          <p class="ti_time">日期：{{timoney.time}}</p>
          <p class="ti_infs">订单号：{{timoney.time}}<span class="ti_money">+{{timoney.money}}元</span></p>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
  </div>
</template>
<script>
export default {
  data:function () {
    return {
        count:5,
        timoneys: [
            {
             time:"2018.09.12  16:00",
             order:"2569565856445",
             money:"1"
            },
            {
             time:"2018.09.12  16:00",
             order:"2569565856445",
             money:"2"
            },
            {
             time:"2018.09.12  16:00",
             order:"2569565856445",
             money:"3"
            },
            {
             time:"2018.09.12  16:00",
             order:"2569565856445",
             money:"4"
            }
        ],
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 12
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
</script>
<style lang="less">
.tixian{
    background-color:#f7f7f7;
    padding-bottom: 1rem;
}
.ti_header{
  background: url(../../img/hsfimg11.png);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: calc(0.388736 * 100vw);
}
.ti_title{
    font-size: 1rem;
    color: rgba(255, 255, 255, .6);
    padding-top: calc(0.12077 * 100vw);
}
.ti_totail{
    font-size: 1.95rem;
    color: #fff;
    margin-top: 1rem;

}
.ti_inf{
    margin: .73rem 1rem;
    padding: 1.6rem 1.445rem 1.45rem;
    background-color: #fff;
    border-radius: .6rem;
    text-align: left;
    font-size: .88rem;
    position: relative;
    &::before{
    position: absolute;
    content: '';
    background-color: #ffcf73;
    height: 0.6rem;
    width: 5.5rem;
    -ms-transform: skewX(30deg);
    -moz-transform: skewX(30deg);
    -webkit-transform: skewX(30deg);
    transform: skewX(30deg);
    top: 0;
    right: 0.3rem;
    }
    &::after{
    position: absolute;
    content: '';
    background-color: #ffcf73;
    height: 0.55rem;
    width: 0.5rem;
    border-top-right-radius: 0.55rem;
    right: 0;
    top: 0;
    }
}
.ti_infs{
    position: relative;
    padding-top: 1rem;
}
.ti_money{color: #ff3333;position: absolute;right: 0;}
</style>
