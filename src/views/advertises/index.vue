<template>
  <div class="adv_bg">
    <div class="adv_banner">
      <img src="../../img/hsfbanner1.jpg" />
    </div>
    <div class="adv_1">
      <div class="adv_ti">
        <span>· 公司简介 ·</span>
      </div>
      <div
        class="adv_1_1"
      >洪师傅酒后代驾成立于2013年，成立以来始终把服务顾客，留住顾客,赢得顾客当成宗旨坚持执行到位，目前覆盖30多个城市，同时上线达到数千名的司机覆盖率，正常到达速度10分钟内，同时还为顾客提供5大保障:</div>
      <div class>
        <img src="../../img/hsfimg10.jpg" />
      </div>
    </div>
    <!-- <div class="adv_1">
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
    </div>-->
    <!-- <div class="adv_1 mb3">
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
    </div>-->
    <div class="adv_1 adv_bottom">
      <div class="adv_ti">
        <span>报名信息</span>
      </div>
      <div class="adv_4" ref="putcontent">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓名:" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="电话:" prop="phone">
            <el-input v-model="ruleForm.phone" type="number" placeholder="请输入您的手机号"></el-input>
          </el-form-item>
          <el-form-item label="驾龄:" prop="driving_age">
            <el-input v-model="ruleForm.driving_age" type="number" placeholder="请输入您的驾龄"></el-input>
          </el-form-item>
          <el-form-item label="地区:" prop="">
            <el-cascader class="cityChoice" ref="myCascader" :options="data" @change="handleChange"></el-cascader>
          </el-form-item>
          <el-form-item label="公司:" prop="company">
            <el-select
              v-model="ruleForm.company"
              placeholder="请选择"
              class="companyChoice"
              @change="handleChange1"
            >
              <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-input v-model="ruleForm.region_id" class="hidden_input" type="hidden"></el-input>
          <el-input v-model="ruleForm.company_id" class type="hidden"></el-input>
          <button class="adv_button" type="primary" @click.prevent="submitForm('ruleForm')">提交</button>
        </el-form>
      </div>
    </div>
    <div class="adv_5" @click="toadv4()">
      <a href="javascript:;">立即报名</a>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      data: [],
      ruleForm: {
        name: "",
        phone: "",
        driving_age: "",
        region_id: "",
        company_id: "",
        company:''
      },
      options: [],
      rules: {
        name: [
          { required: true,message: "请输入姓名", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        address:[{required: true,message: "地区为必填",trigger: "blur"}],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
        driving_age: [{ required: true,message: "驾龄为必填", trigger: "blur" }],
        company: [{ required: true,message: "公司为必填", trigger: "blur" }]
      },
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: 1,
              label: `选项`,
              leaf: level >= 2
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        }
      }
    };
  },
  methods: {
    handleChange(value) {
      this.ruleForm.region_id = value[2];
      this.$axios
        .get("/api/wechat/region/company", {
          id: this.ruleForm.region_id
        })
        .then(res => {
          this.options = res.data;
          console.log(res);
        });
    },
    handleChange1(value) {
      this.ruleForm.company_id = value;
      this.ruleForm.company =value;
    },
    getCity() {
      this.$axios
        .get("/api/wechat/region/list")
        .then(res => {
          this.data = res.data;
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = this.ruleForm;
          this.$axios
            .post("/api/wechat/driver/signup", data)
            .then(res => {
              if (res.code == 200) {
                alert("提交成功");
              }
              if (res.code == 422) {
                alert(res.message);
                return
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toadv4() {
      let height = this.$refs.putcontent.clientHeight;
      if (true) {
        this.$refs.putcontent.scrollIntoView();
      } else {
        document.documentElement
          ? (document.documentElement.scrollTop = height)
          : (document.body.scrollTop = height);
      }
    }
  },
  mounted() {
    this.getCity();
  }
};
</script>
<style lang="less">
.adv_bg {
  background: -moz-linear-gradient(right, #2d6efc, #1b8cf6);
  background: -webkit-linear-gradient(right, #2d6efc, #1b8cf6);
  background: linear-gradient(to right, #2d6efc, #1b8cf6);
  padding-bottom: 2px;
}
.adv_1 {
  position: relative;
  margin: 0.8rem 0.6rem;
  border-radius: 0.7rem; /* 11px*/
  background-color: #fff;
  padding: 2.05rem 1.667rem; /* 37px  30px*/
  font-size: 0.8rem; /* 14px  */
  text-align: left;
  margin-bottom: 80px;
}
.adv_button {
  width: 270px;
  height: 65px;
  margin: 0px auto 0px !important;
  font-size: 24px;
  background-color: #3366ff !important;
  display: block;
  border: 0px;
  color: #fff;
}
.adv_ti {
  font-size: 1.2rem;
  background: url(../../img/hsfimg9.png);
  background-repeat: no-repeat;
  height: calc(0.1583 * (100vw - 6.01rem));
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  background-size: 100%;
  text-align: center;
  justify-content: center;
  color: #fff;
  display: flex;
  font-weight: bold;
  letter-spacing: 0.25rem;
}
.adv_ti span {
  align-self: center;
}
.adv_1_1 {
  padding: 1.7rem 1.9rem;
  line-height: 1.8;
  border-radius: 0.388rem;
  border: solid 1px rgba(238, 238, 238, 0.8);
  border-bottom-color: #ff9100;
  border-right-color: #ff9100;
  position: relative;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 24px;
}
.adv_2_ti {
  color: #333;
  font-weight: bold;
  position: relative;
  z-index: 0;
}
.adv_2_ti::before {
  position: absolute;
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ffd107;
  z-index: -1;
  top: 0.2rem;
}
.adv_2_cont {
  color: #666;
  padding-bottom: 0.7rem;
  padding-top: 0.7rem;
}
.adv_2_1 {
  margin-top: 2.8rem;
}
.adv_3_1 {
  margin-top: 2.5rem;
}
.adv_3_1,
.adv_3_2 {
  position: relative;
}
.adv_3_2 {
  padding: 2rem;
}
.adv_3_1::before,
.adv_3_1::after,
.adv_3_2::before,
.adv_3_2::after {
  position: absolute;
  width: 2.3rem;
  height: 2.3rem;
  content: "";
}
.mb3 {
  margin-bottom: 3rem;
}
.adv_3_1::before {
  top: 0;
  left: 0;
  border-top: 1px solid #ffc739;
  border-left: 1px solid #ffc739;
}
.adv_3_1::after {
  top: 0;
  right: 0;
  border-top: 1px solid #ffc739;
  border-right: 1px solid #ffc739;
}
.adv_bottom{
  margin-bottom: 120px;
}
.adv_3_2::before {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #ffc739;
  border-left: 1px solid #ffc739;
}
.adv_3_2::after {
  bottom: 0;
  right: 0;
  border-bottom: 1px solid #ffc739;
  border-right: 1px solid #ffc739;
}
.cityChoice {
  width: 490px;
}
.companyChoice {
  width: 490px;
}
.adv_3_ti {
  position: relative;
  padding-left: 2.1rem;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
  line-height: 1rem;
}
.adv_3_ti::before {
  position: absolute;
  content: "";
  width: 1rem;
  height: 0.86rem;
  left: 0.7rem;
  top: -0.05rem;
  background: url(../../img/hsfimg5.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
.adv_4 {
  width: 90%;
  margin: 0px auto;
  color: #666;
  font-size: 24px;
  margin-top: 40px;

  label {
    color: #333;
  }
  .el-form-item__label {
    font-size: 30px;
    width: 100px !important;
    border-bottom: 1px solid #d5d5d5;
    height: 80px;
    text-align: left;
    line-height: 80px;
  }
  .el-form-item__content {
    margin-left: 100px !important;
  }
  .el-input {
    font-size: 32px;
  }
  .el-form-item__error {
    font-size:20px;
  }
  .el-input__inner {
    border: 0px;
    border-bottom: 1px solid #d5d5d5;
    text-align: left;
    height: 80px;
    line-height: 80px;
  }
}
.adv_p {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 0.8rem;
  padding-bottom: 0.55rem;
  margin-top: 0.8rem;
  line-height: 2;
}
.adv_5 {
  background-color: #f4d31c;
  bottom: 0;
  width: 100%;
  height:100px;
  font-size: 36px;
  color: #fff;
  line-height:100px;
  position: fixed;
}
.el-cascader__dropdown {
  width: 96%;
  left: 2% !important;
}
.el-cascader-menu {
  width: 33.33%;
}
.el-cascader-panel {
  font-size: 28px;
}
.el-cascader-node {
  height: 80px;
  line-height: 80px;
}
.el-cascader-menu__wrap {
  height: 400px;
}
.el-select-dropdown__item {
  height: 60px;
  line-height: 60px;
  font-size: 32px !important;
}
</style>