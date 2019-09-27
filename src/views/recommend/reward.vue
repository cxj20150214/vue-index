<template>
  <div class="reward">
      <div class="rew_info">
          <p>将账户余额将提现到微信</p>
          <p class="rew_price">￥ 8000.00</p>
          <p class="rew_totail">当前可提现金额：￥8563.23  （最小提现额度1元）</p>
      </div>
      <p class="rew_wx">提现到微信</p>
      <div class="infinite-list-wrapper" style="overflow:auto">
        <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <li v-for="remoney in remoneys" class="list-item rew_inf">
            <p class="rew_money"><i class="isty1">￥</i>{{remoney.money}}</p>
            <p class="rew_infs">
                <span>{{remoney.time1}} 提现</span>
                <span>{{remoney.time2}} 到账</span>
            </p>
        </li>
        </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>

<div id="star-six"></div>
  </div>
</template>
<script>
export default {
  data:function () {
    return {
        count:5,
        remoneys: [
            {
             time1:"2018.09.12  16:00",
             time2:"2018.09.12  16:00",
             money:"11"
            },
            {
             time1:"2018.09.12  16:00",
             time2:"2018.09.12  16:00",
             money:"211"
            },
            {
             time1:"2018.09.12  16:00",
             time2:"2018.09.12  16:00",
             money:"323"
            },
            {
             time1:"2018.09.12  16:00",
             time2:"2018.09.12  16:00",
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
<style lang="less">
.reward{
    padding:1rem;
    background-color: #f1f1f1;
    }
.rew_info{
    padding: 1.2rem;
    background-color: #fff;
    border-radius: .4rem;
    font-size: .85rem;
    color: #7c838d;
    text-align: left;
    }
.rew_price{
    font-size: 2.2rem;
    font-weight: bold;
    color: #121922;
    padding-top: .9rem;
    padding-bottom: .4rem;
    border-bottom: 1px solid #e4e4ee;
    margin-bottom: 1.5rem;
    }
.rew_totail{font-size: .75rem;}
.rew_wx{
    font-size: 1rem;
    background-color: #ff6767;
    line-height: 3;
    border-radius: 1rem;
    color: #fff;
    margin-top: 1.6rem;
    margin-bottom: 1.4rem;
}
.rew_inf{
    border-bottom: 1px solid #e4e4ee;
    padding-top:.5rem;
    padding-bottom: .5rem;
    color: #121922;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.isty1{
    font-size: 1rem;
    font-style: normal;
}
.rew_money{
    font-size: 1.22rem;
    font-weight: bold;
    }
.rew_infs{
    font-size: .9rem;
    color: #7c838d;
    span{
        display: block;
    }
}

</style>
