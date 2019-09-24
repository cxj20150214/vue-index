<template>
  <div>
    <div class="evaluate">
      <div class="eva_box">
        <p class="title">您对本次洪师傅代驾服务师傅满意？</p>
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <div class="block">
            <el-rate v-model="ruleForm.value1" :colors="colors" show-text></el-rate>
          </div>
          <el-input v-model="ruleForm.value1" type="hidden"></el-input>
          <div class="biaoqian">
            <el-checkbox-group v-model="ruleForm.type" class="biaoqian_box">
              <el-checkbox label="态度良好" name="type"></el-checkbox>
              <el-checkbox label="行驶安全" name="type"></el-checkbox>
              <el-checkbox label="说话有礼貌" name="type"></el-checkbox>
              <el-checkbox label="行进路程快" name="type"></el-checkbox>
              <el-checkbox label="干净" name="type"></el-checkbox>
              <el-checkbox label="车子好" name="type"></el-checkbox>
              <el-checkbox label="服务态度好" name="type"></el-checkbox>
              <el-checkbox label="有按时完成服务标准" name="type"></el-checkbox>
            </el-checkbox-group>
          </div>
          <el-input
            class="textarea_box"
            type="textarea"
            v-model="ruleForm.desc"
            rows="5"
            placeholder="还想说点啥？写在这里吧！"
          ></el-input>
          <el-checkbox v-model="ruleForm.checked" class="unName">匿名评价</el-checkbox>
          <el-button class="sub_button" type="primary" @click="submitForm('ruleForm')">立即评价</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "evaluate",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      ruleForm: {
        value1: 4,
        type: ['态度良好','干净'],
        desc: "不错,非常好的一次代驾体验",
        checked: false
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("提交成功");
        } else {
          console.log("提交失败");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.evaluate {
  width: 100%;
  height: 100vh;
  .eva_box {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    margin: 30px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 28px;
      margin-top: 40px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 70px;
        height: 1px;
        background-color: #666;
        left: 15px;
        top: 18px;
      }
      &::after {
        content: "";
        position: absolute;
        width: 70px;
        height: 1px;
        background-color: #666;
        right: 15px;
        top: 18px;
      }
    }
    .block {
      margin-top: 40px;
    }
    .biaoqian {
      width: 100%;
      height: 300px;
      background-color: #f4f4f4;
      border-radius: 15px;
      position: relative;
      margin-top: 55px;
      &::before {
        content: "";
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 35px solid #f4f4f4;
        border-left: 50px solid transparent;
        top: -40px;
        left: 250px;
        position: absolute;
      }
      .biaoqian_box {
        padding: 35px;
      }
    }
    .textarea_box {
      margin-top: 30px;
    }
  }
}
</style>
<style lang="less">
.el-rate__icon {
  font-size: 48px;
  margin-right: 12px;
}
.el-rate {
  height: 50px;
}
.el-rate__text {
  font-size: 24px;
  margin-left: 15px;
}
.biaoqian {
  .el-checkbox__label {
    font-size: 28px;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .el-checkbox__inner {
    display: none;
  }
  .el-checkbox {
    float: left;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    border: 1px solid #ff596a;
    color: #ff596a;
  }
}
.el-textarea__inner {
  border: 1px solid #d5d5d5;
  padding: 20px;
  font-size: 28px;
}
.el-checkbox__label {
  font-size: 24px;
}
.el-checkbox__inner {
  width: 20px;
  height: 20px;
}
.unName {
  float: right;
  margin-top: 25px;
}
.el-checkbox__input {
  margin-top: -5px;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #ff596a;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ff596a;
  border-color: #ff596a;
}
.el-checkbox__inner::after {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  content: "";
  border: 2px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 10px;
  left: 7px;
  position: absolute;
  top: 2px;
  -webkit-transform: rotate(45deg) scaleY(0);
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
  transition: -webkit-transform 0.15s ease-in 0.05s;
  transition: transform 0.15s ease-in 0.05s;
  transition: transform 0.15s ease-in 0.05s,
    -webkit-transform 0.15s ease-in 0.05s;
  transition: transform 0.15s ease-in 0.05s,
    -webkit-transform 0.15s ease-in 0.05s;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.sub_button {
  width: 100%;
  margin-top: 150px;
  height: 90px;
  font-size: 28px;
}
.el-button--primary {
  background-color: #ff596a;
  border-color: #ff596a;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #ff596a;
  border-color: #ff596a;
}
</style>