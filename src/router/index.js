import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import address from '@/views/address/address'
import callDriver from '@/views/callDriver/index'
import advertises from '@/views/advertises/index'
import recommend from '@/views/recommend/index'
import tixian from '@/views/recommend/tixian'
import reward from '@/views/recommend/reward'
import invitation from '@/views/invitation/invitation'
import trip from '@/views/trip/index'
import evaluate from '@/views/evaluate/index'
import hotline from '@/views/hotline/index'
import coupon from '@/views/coupon/index'
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
      path:'/advertises',name:'advertises',component: advertises,
      meta: {
        title: ''
      }
    },
    {
      path:'/recommend',name:'recommend',component: recommend,
      meta: {
        title: ''
      }
    },
    {
      path:'/tixian',name:'tixian',component: tixian,
      meta: {
        title: ''
      }
    },
    {
      path:'/reward',name:'reward',component: reward,
      meta: {
        title: ''
      }
    },
    {
      path: '/invitation',
      name: 'invitation',
      component: invitation,
      meta: {
        title: ''
      }
    },
    {
      path: '/trip',
      name: 'trip',
      component: trip,
      meta: {
        title: ''
      }
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate,
      meta: {
        title: ''
      }
    },
    {
      path: '/callDriver',
      name: 'callDriver',
      component: callDriver,
      meta: {
        title: ''
      }
    },
    {
      path: '/hotline',
      name: 'hotline',
      component: hotline,
      meta: {
        title: ''
      }
    },
    {
      path:'/coupon',name:'coupon',component: coupon,
      meta: {
        title: ''
      }
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