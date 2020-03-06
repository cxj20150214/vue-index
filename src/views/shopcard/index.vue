<template>
  <div>
    <div class="shopbox">
      <div class="tabs">
        <ul>
          <li @click="num=0" class="first" :class="{active:num==0}">未使用</li>
          <li @click="num=1" :class="{active:num==1}">已使用</li>
        </ul>
      </div>
      <div class="content">
        <div class="user" v-show="num==0">
          <div class="card">
            <ul>
              <li>
                <div class="box1">
                  <p class="txt1">新人用户立减优惠券</p>
                  <div class="txt_box">
                    <div class="box">
                      <p class="txt2">
                        <span>50</span>￥
                      </p>
                      <p class="txt3">满100元立减</p>
                    </div>
                    <p class="txt4">凭券消费满100元立减50元仅限本平台使用内使用</p>
                  </div>
                  <div class="qx">2天后到期</div>
                </div>
                <div class="box2">
                  <p>有效期至2020-12-30</p>
                  <div class="sy">
                    <a href>立即使用</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="box1">
                  <p class="txt1">新人用户立减优惠券</p>
                  <div class="txt_box">
                    <div class="box">
                      <p class="txt2">
                        <span>50</span>￥
                      </p>
                      <p class="txt3">满100元立减</p>
                    </div>
                    <p class="txt4">凭券消费满100元立减50元仅限本平台使用内使用</p>
                  </div>
                  <div class="qx">2天后到期</div>
                </div>
                <div class="box2">
                  <p>有效期至2020-12-30</p>
                  <div class="sy">
                    <a href>立即使用</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="box1">
                  <p class="txt1">新人用户立减优惠券</p>
                  <div class="txt_box">
                    <div class="box">
                      <p class="txt2">
                        <span>50</span>￥
                      </p>
                      <p class="txt3">满100元立减</p>
                    </div>
                    <p class="txt4">凭券消费满100元立减50元仅限本平台使用内使用</p>
                  </div>
                  <div class="qx">2天后到期</div>
                </div>
                <div class="box2">
                  <p>有效期至2020-12-30</p>
                  <div class="sy">
                    <a href>立即使用</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="user" v-show="num==1">
          <div class="card">
            <ul>
              <li>
                <div class="box1">
                  <p class="txt1">新人用户立减优惠券</p>
                  <div class="txt_box">
                    <div class="box">
                      <p class="txt2">
                        <span>50</span>￥
                      </p>
                      <p class="txt3">满100元立减</p>
                    </div>
                    <p class="txt4">凭券消费满100元立减50元仅限本平台使用内使用</p>
                  </div>
                  <div class="qx">已到期</div>
                </div>
                <div class="box2">
                  <p>有效期至2020-12-30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopcard",
  data() {
    return {
      num: 0
    };
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.shopbox {
  width: 750px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  .tabs {
    ul {
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #d5d5d5;
      padding-bottom: 30px;
      padding-top: 30px;
      li {
        font-size: 32px;
        width: 50%;
        position: relative;
        &.first {
          border-right: 1px solid #d5d5d5;
        }
        &.active {
          color: #f1574d;
          &::after {
            position: absolute;
            content: "";
            width: 60px;
            height: 3px;
            background-color: #f1574d;
            left: 50%;
            margin-left: -30px;
            bottom: -10px;
          }
        }
      }
    }
  }
  .user {
    margin-top: 40px;
    .card {
      width: 690px;
      margin: 0px auto;
      li {
        width: 690px;
        height: 330px;
        border-radius: 15px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 50px;
        overflow: hidden;
        .box1 {
          padding: 25px;
          height: 180px;
          color: #fff;
          background-color: #ff5442;
          position: relative;
          .txt1 {
            font-size: 28px;
            text-align: left;
          }
          .txt_box {
            height: 125px;
            display: flex;
            flex-direction: row;
            .box {
              width: 215px;
              .txt2 {
                text-align: left;
                height: 90px;
                span {
                  font-size: 80px;
                }
              }
              .txt3 {
                text-align: left;
                font-size: 28px;
              }
            }
            .txt4 {
              font-size: 28px;
              text-align: left;
              margin-left: 20px;
              margin-top: 34px;
              border-left: 1px solid #fff;
              padding-left: 15px;
              height: 75px;
              width: 340px;
            }
          }
          .qx {
            position: absolute;
            width: 180px;
            height: 60px;
            background-image: url("../../img/qx.png");
            right: -10px;
            top: 10px;
            line-height: 60px;
            text-align: center;
            color: #dc3a2d;
            font-size: 24px;
          }
        }
        .box2 {
          padding: 20px;
          display: flex;
          flex-direction: row;
          p {
            font-size: 28px;
            color: #666;
            float: left;
            margin-top: 10px;
          }
          .sy {
            width: 170px;
            height: 60px;
            border-radius: 30px;
            border: 1px solid #f1574d;
            line-height: 60px;
            margin-left: 200px;
            a {
              display: block;
              color: #f1574d;
              font-size: 28px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>