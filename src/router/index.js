import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  linkExactActiveClass:'active',
  // 跳转返回顶部
  scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/advertises',name:'advertises',component:()=>import('../views/advertises/index')
    },
    {
      path:'/recommend',name:'recommend',component:()=>import('../views/recommend/index')
    }



  ]
})
