// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/js/swiper.min.js';
import animated from 'animate.css'
import axios from "./utils/axios"
import '../static/css/global.css' 
import store from './store/store'
import VueLazyload from 'vue-lazyload'
import '../src/assets/iconfont/css/iconfont.css'
import VueRouter from 'vue-router'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueWechatTitle)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: require('@/img/case1.png'),   //请求失败后显示的图片
  // loading: require('@/img/case1.png'),   //加载的loading过渡图片
  attempt: 1     // 加载图片数量
})
Vue.prototype.$axios = axios;
Vue.use(animated)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    if(localStorage.getItem("set_token") === null){
      localStorage.setItem("set_token","");
    }
    this.$store.state.token =  localStorage.getItem("set_token");
    // 根据service_id设置统一标题
    var thisUrl = this.$route.fullPath
    console.log(this.$route.fullPath,'111')
    if(thisUrl.indexOf("service_id") != -1){
     var service_id =  this.$route.query.service_id
     this.$axios.get('/api/wechat/info/info',{
      service_id:service_id
    })
    .then(res=>{
      console.log(res,2222222222);
      document.title = res.data
    })
    }
    if(thisUrl.indexOf("service_id") == -1){
      document.title = "洪师傅代驾"
    }
  }
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//  console.log('路由守卫')
// })