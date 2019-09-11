<template>
  <div class="adv_bg">
    <div class="adv_banner">
      <img src="../../img/hsfbanner1.jpg">
    </div>
    <div class="adv_1">
      <div class="adv_ti"><span>· 公司简介 ·</span></div>
      <div class="adv_1_1">洪师傅酒后代驾成立于2013年，成立以来始终把服务顾客，留住顾客,赢得顾客当成宗旨坚持执行到位，目前覆盖30多个城市，同时上线达到数千名的司机覆盖率，正常到达速度10分钟内，同时还为顾客提供5大保障:
      </div>
      <div class=""><img src="../../img/hsfimg10.jpg"></div>
    </div>
    <div class="adv_1">
      <div class="adv_ti"><span>工作特点</span></div>
      <div class="adv_2_1">
      <p class="adv_2_ti">1.时间自由</p>
      <p class="adv_2_cont">代驾时间一般在晚上，司机可以利用晚上的空闲时间进行代驾。</p>
      <p class="adv_2_ti">2.行动自由</p>
      <p class="adv_2_cont">每个司机都配有定位司机端口，无须像传统代驾去蹲点或指定地方等待，有了这个端口的司机随时都能让客户看到你在哪里，只要你和客户距离近，客户随时会选你为他们进行服务。</p>
      <p class="adv_2_ti">3.时间灵活</p>
      <p class="adv_2_cont">时间以你的为准，少了请假的尴尬，只要想代驾时打开司机端口，不上时关闭司机端口，上班时间由你来定。</p>
      <p class="adv_2_ti">4.客源稳定</p>
      <p class="adv_2_cont">平台里积累了庞大的客户群体，只要司机服务周到，相信会给你带来巨大的收获。</p>
      <p class="adv_2_ti">5.待遇丰厚</p>
      <p class="adv_2_cont">每单的费用，公司只收取少数的佣金，大部分都归司机所有，按劳分配，平时日均200+,多劳多得。春节期间日均收入500+。</p>  
      </div>   
    </div>
    <div class="adv_1">
      <div class="adv_ti"><span>招聘需求</span></div>
        <div class="adv_3_1">
          <div class="adv_3_2">
            <p class="adv_3_ti">持有C1驾照三年以上</p>
            <p class="adv_3_ti">适应夜间工作，刻骨耐劳</p>
            <p class="adv_3_ti">驾车期间无重大事故</p>
            <p class="adv_3_ti">年龄在25-50之间，男女不限</p>
            <p class="adv_3_ti">为人机警正派，能服从分配</p>
            <p class="adv_3_ti">自备智能手机一部接受派单</p>
          </div>
        </div>
    </div>
    <div class="adv_1">
      <div class="adv_ti"><span>报名信息</span></div>
      <form>
      </form>
    </div>


    
<div style="margin-bottom: 30rem;"></div>
  </div>
</template>
<script>
export default {
  components:{
  }
}
</script>
<style>
.adv_bg{
  background:-moz-linear-gradient(right,#2d6efc,#1b8cf6);
  background:-webkit-linear-gradient(right,#2d6efc,#1b8cf6);
  background: linear-gradient(to right,#2d6efc,#1b8cf6);
  }
.adv_1{
  position: relative;
  margin: .8rem .6rem;
  border-radius: .7rem;/* 11px*/
  background-color: #fff;
  padding: 2.05rem 1.667rem;/* 37px  30px*/
  font-size: .8rem;/* 14px  */
  text-align: left;
  }
.adv_ti{
  font-size: 1rem;
  background: url(../../img/hsfimg9.png);
  background-repeat: no-repeat;
  height: calc(0.1583 * (100vw - 6.01rem));
  margin-left: .8rem;
  margin-right: .8rem;
  background-size: 100%;
  text-align: center;
  justify-content: center;
  color: #fff;
  display: flex;
  font-weight: bold;
  letter-spacing: .25rem;
}
.adv_ti span{
    align-self: center;
  }
.adv_1_1{
  padding: 1.7rem 1.9rem;
  line-height: 1.8;
  border-radius: .388rem;
  border: solid 1px rgba(238,238,238,.8);
  border-bottom-color: #ff9100;
  border-right-color: #ff9100;
  position: relative;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.adv_2_ti{
  color: #333;
  font-weight: bold;
  position: relative;
  z-index: 0;
}
.adv_2_ti::before{
    position: absolute;
    content:'';
    width: .5rem;
    height: .5rem;
    border-radius:50%;
    background-color: #ffd107;
    z-index: -1;
    top: .2rem
  }
.adv_2_cont{
  color: #666;
  padding-bottom: .7rem;
  padding-top: .7rem}
.adv_2_1{margin-top: 2.8rem}
.adv_3_1{margin-top: 2.5rem;}
.adv_3_1,.adv_3_2{position: relative;}
.adv_3_2{padding:1.667rem}
.adv_3_1::before,.adv_3_1::after,.adv_3_2::before,.adv_3_2::after{
  position: absolute;
  width: 2.3rem;
  height: 2.3rem;
  content: '';
}
.adv_3_1::before{
  top:0;
  left: 0;
  border-top:1px solid #ffc739;
  border-left: 1px solid #ffc739;

}
.adv_3_1::after{
  top:0;
  right: 0;
  border-top:1px solid #ffc739;
  border-right: 1px solid #ffc739;
}
.adv_3_2::before{
  bottom:0;
  left: 0;
  border-bottom:1px solid #ffc739;
  border-left: 1px solid #ffc739;
}
.adv_3_2::after{
  bottom:0;
  right: 0;
  border-bottom:1px solid #ffc739;
  border-right: 1px solid #ffc739;
}
.adv_3_ti{
  position: relative;
  padding-left:2.1rem;
  margin-bottom: .8rem;
  margin-top: .8rem;
  line-height: 1rem;}
.adv_3_ti::before{
  position: absolute;
  content:'';
  width: 1rem;
  height: .86rem;
  left: .7rem;
  top: -.05rem;
  background: url(../../img/hsfimg5.png);
  background-repeat: no-repeat;
  background-size: 100%; 
}
</style>
