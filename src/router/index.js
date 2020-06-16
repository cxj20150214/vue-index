import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import address from '@/views/address/address'
import callDriver from '@/views/callDriver/index'
import advertises from '@/views/advertises/index'
import advertiseslb from '@/views/advertises/lb'
import recommend from '@/views/recommend/index'
import tixian from '@/views/recommend/tixian'
import reward from '@/views/recommend/reward'
import invitation from '@/views/invitation/invitation'
import trip from '@/views/trip/index'
import evaluate from '@/views/evaluate/index'
import hotline from '@/views/hotline/index'
import coupon from '@/views/coupon/index'
import store from '../store/store'
import shopcenter from '@/views/shopcenter/index'
import shopcard from '@/views/shopcard/index'
import shopinte from '@/views/shopinte/index'
import shopbind from '@/views/shopcenter/bind'
import shopmall from '@/views/shopmall/index'
import prodetail from '@/views/shopmall/prodetail'
import confirm from '@/views/shopmall/confirm'
import agreement from '@/views/agreement/index'
import gift from '@/views/shopcard/gift'
import shoporder from '@/views/shoporder/index'
import shoporderDetail from '@/views/shoporder/detail'
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
        title: '',
        index:1
      }
    },
    {
      path:'/advertises',name:'advertises',component: advertises,
      meta: {
        title: ''
      }
    },
    {
      path:'/advertiseslb',name:'advertiseslb',component: advertiseslb,
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
        title: '',
        index:2
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
        title: '',
        index:1
      }
    },
    {
      path:'/coupon',name:'coupon',component: coupon,
      meta: {
        title: ''
      }
    },
    {
      path:'/shopcenter',name:'shopcenter',component: shopcenter,
      meta: {
        title: '',
        index:0
      }
    },
    {
      path:'/shopcard',name:'shopcard',component: shopcard,
      meta: {
        title: '',
        index:1
      }
    },
    {
      path:'/shoporder',name:'shoporder',component: shoporder,
      meta: {
        title: '',
        index:1
      }
    },
    {
      path:'/shoporderDetail',name:'shoporderDetail',component: shoporderDetail,
      meta: {
        title: '',
        index:2
      }
    },
    {
      path:'/shopinte',name:'shopinte',component: shopinte,
      meta: {
        title: '',
        index:1
      }
    },
    {
      path:'/shopbind',name:'shopbind',component: shopbind,
      meta: {
        title: '',
        index:1
      }
    },
    {
      path:'/shopmall',name:'shopmall',component: shopmall,
      meta: {
        title: '',
        index:1
      }
    },
    {
      path:'/prodetail',name:'prodetail',component: prodetail,
      meta: {
        title: '',
        index:2
      }
    },
    {
      path:'/confirm',name:'confirm',component: confirm,
      meta: {
        title: '',
        index:3
      }
    },
    {
      path:'/agreement',name:'agreement',component: agreement,
      meta: {
        title: '',
        index:1
      }
    },
    {
      path:'/gift',name:'gift',component: gift,
      meta: {
        title: '',
        index:1
      }
    }
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