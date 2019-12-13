// 引入模块
import axios from "axios"
import qs from 'qs'
import store from '../store/store'
import Router from '../router/index'
// 是否允许跨域
axios.defaults.withCredentials = false;
axios.defaults.headers.common['Authorization'] = store.state.token;
// axios初始化：延迟时间，主路由地址
let instance = axios.create({
  baseURL: 'https://hsf-api.threeape.com',
  // baseURL: ' http://api.bzffs.cc/',
  timeout: 10000,
  headers: {
    // 'x-service-id':"1",
    'Authorization':store.state.token
    // 'Authorization':'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuYnpmZnMuY2NcL2FwaVwvYXV0aFwvcXVpY2tfbG9naW4iLCJpYXQiOjE1NzIzMTYwOTksImV4cCI6MTU3MzUyNTY5OSwibmJmIjoxNTcyMzE2MDk5LCJqdGkiOiJVbmN4Wm9oMnlLaEFPRkRjIiwic3ViIjoyNzkwMDgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.cCuBhRBzNobvUiXv6Y-eZTEkpayPdnO8zgkBDKyu3Jo'
}
});
// 设置请求头

// 设置拦截器
instance.interceptors.request.use(
  config => {
    var thisUrl = Router.app.$route.fullPath
    if(thisUrl.indexOf("service_id") != -1){
     var service_id =  Router.app.$route.query.service_id
     config.headers['x-service-id'] = service_id
    }
    if(thisUrl.indexOf("service_id") == -1){
       config.headers['x-service-id'] = '2'
    }
    return config
  }, function (error) {
    return Promise.reject(error) 
  }
)
//响应拦截器
instance.interceptors.response.use(function(response){
  //对响应数据做些事
  return response;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});
 
// 是否销毁拦截器
// 1.给拦截器起个名称 var myInterceptors = instance.interceptors.requesst.use();
// 2.instance.interceptors.request.eject(myInterceptor);
 
// 请求成功的回调
function checkStatus(res) {
  //请求结束成功
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  }
  return res
}
// 请求失败的回调
function checkCode(res) {
  if (res.code === 0) {
    throw new Error(res.msg)
  }
  return res
}
//模块化导出
export default {
  get(url, params) {
    if (!url) return;
    return instance({
      method: 'get',
      url: url,
      params,
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  post(url, data) {
    if (!url) return;
    return instance({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  postFile(url, data) {
    if (!url) return;
    return instance({
      method: 'post',
      url: url,
      data
    }).then(checkStatus).then(checkCode)
  }
}