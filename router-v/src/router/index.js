import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Tab1 from '@/components/Tab1'
import Tab2 from '@/components/Tab2'
import Login from '@/components/Login'


//将VueRouter插件加载到Vue中，因为VueRouter需要依赖Vue
Vue.use(VueRouter)

const routes = [
  //设置默认路由
  // { path: '/', component: Home},
  { path: '/', redirect: '/About'}, // redirect设置重定向页面
  { path: '/Home/:id', component: Home, props: true}, //props: true 会将 path中的动态path作为参数传入props中
  { path: '/Login', component: Login},
  { path: '/About', component: About, children: [
    {path: '', component: Tab1 }, //嵌套路由中path不需要/ ， ''空串为默认路由，也可以使用父组件的redirect
    {path: 'tab2', component: Tab2 }
  ]}
]
const router = new VueRouter({
    routes
})

// 每个路由请求前都会调用该函数 (这个叫做 全局前置守卫)

// to : 将要访问的对象
// from : 将要离开的访问的对象
// next : 表示放行通过，next(false) 表示无法跳转
router.beforeEach((to, from, next) => {
  if (to.path === '/About') {
    next('/Login')
  } else {
    next()
  }
})

export default router