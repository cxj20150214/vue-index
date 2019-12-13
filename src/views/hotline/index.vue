<template>
  <div ref="hehe">
    <div class="hotline">
        <div class="linesearch">
            <div class="linein">
                <input v-model="name" placeholder="请输入内容">
            </div>
            <div class="lineser" ><el-button type="primary" icon="el-icon-search" @click="getcompany">搜索</el-button></div>           
            </div>
        <div class="line_name"><div class="line_na">公司名称</div><div class="line_hot">客服热线</div></div>
        <div class="line_cont" v-infinite-scroll="load" style="overflow:auto">
            <div class="line_infs" v-for="item in items">
                <div class="line_company">
                    <img src="../../img/com_icon.png" class="line_img">
                    {{item.name}}</div>
                <a class="line_tel" v-bind:href="'tel:' + item.telphone">点击拨打</a>              
            </div>
        </div>
        <div class="loading">{{loadcont}}</div>
    </div>
  </div>
</template>
<script>
import { reject } from 'q'
export default {
  name: "hotline",
  data() { 
      return { 
          limit: 8,
          name:'',
          page:1,
          total:0,
          items:[],
          flag:false,
          loadcont:'我是有底线'
            }
  },
//   mounted(){
//       	this.flag = true;
// 		window.addEventListener('scroll',this.listenScrollbar,true);
//   },
  methods: {
      getcompany:function(){
          this.$axios.get("/api/wechat/company/hotline", {
          name: this.name,
          page:1,
          limit:this.limit   
          }).then(res=>{
              console.log(res.data)
              if(res.data.list.length===0) {
               alert("当前没有这家公司!")
              }else{
                this.items=res.data.list
              }},reject=>{
               alert("重新输入!")
           })
      },
      
      load () {
      this.$axios.get("/api/wechat/company/hotline", {
          name: this.name,
          page:this.page,
          limit:this.limit          
          }).then(res=>{
           if (res.code == 200) {   
               console.log(res.data)  
               this.total=res.data.total          
                this.items=res.data.list
                this.limit += 4

           }
        },reject=>{
            alert("刷新失败!")
        })


        
      }
  },

};
</script>
<style lang="less" scoped>
.loading{
    text-align: center;
    padding-top: 40px;
}
.hotline{
    font-size: 26px;
    margin: 35px 30px;  
    }
.lineser{
    width: 200px;
}
.linein input{
    width: 100%;
    border-radius: 6px 0px 0px 6px;
    border: solid 1px #0099ff;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 30px;
}
.linein {
    width: calc(100% - 200px);
}
.linein input,.lineser .el-button{
    line-height: 90px ;
    height: 90px;
    font-size: 26px;
}
.lineser .el-icon-search{
    width: 50px;
    height: 50px;
}
.linesearch,.line_name,.line_infs{
    display: flex;
    }
.lineser .el-button{
    display: block;
    width: 100%;
    padding: 0 20px;
    border-radius: 0 4px 4px 0;
    opacity: 1;
}
.line_hot{
    width: 40%;
    background-color: #fdfdfd;
	border-radius: 0px 6px 6px 0px;
}
.line_na{
    width: 60%;
    background-color: #f9f9f9;
	border-radius: 6px 0px 0px 6px;
    }
.line_name{
    margin-top: 35px;
    line-height: 70px;
    color: #535252;
    font-size: 28px;}

.line_infs{
    justify-content: space-between;
    border-bottom: 2px solid #f8f8f8;
    padding: 25px;
    line-height: 80px;
    }
.line_img{
    width: 30px;
    height: 30px;
    margin-right: 15px;
    vertical-align: -5px;
}
.line_company{
    flex-shrink: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
}
.line_tel{
    flex-shrink:0;
    background-image: linear-gradient(90deg, #ffa700 0%, #ffb427 100%);
    border-radius: 6px;
    border: 0;
    color: #ffffff;
    font-size: 28px;
    padding-left: 35px;
    padding-right: 35px;
    margin-left: 20px;
    vertical-align: middle;
}
</style>
