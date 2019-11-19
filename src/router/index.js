import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import address from '@/views/address/address'
import store from '../store/store'

Vue.use(Router)
if (sessionStorage.getItem('token')) {
  store.commit('set_token', sessionStorage.getItem('token'))
}
const router= new Router({
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
      path: '/address',
      name: 'address',
      component: address,
      meta: {
        title: ''
      }
    },
    {
      path:'/advertises',name:'advertises',component:()=>import('../views/advertises/index')
    },
    {
      path:'/recommend',name:'recommend',component:()=>import('../views/recommend/index')
    },
    {
      path:'/tixian',name:'tixian',component:()=>import('../views/recommend/tixian.vue')
    },
    {
      path:'/reward',name:'reward',component:()=>import('../views/recommend/reward.vue')
    },
    {
      path: '/invitation',
      name: 'invitation',
      component:()=>import('../views/invitation/invitation')
    },
    {
      path: '/trip',
      name: 'trip',
      component:()=>import('../views/trip/index')
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component:()=>import('../views/evaluate/index')
    },
    {
      path: '/callDriver',
      name: 'callDriver',
      component:()=>import('../views/callDriver/index')
    },
    {
      path: '/hotline',
      name: 'hotline',
      component:()=>import('../views/hotline/index')
    },
    {
      path:'/coupon',name:'coupon',component:()=>import('../views/coupon/index')
    },
  ],
})
// router.beforeEach((to,from,next)=>{
//   // console.log(to);
//   // console.log(from);
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next();
// })
export default router;