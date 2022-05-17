import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/MyLogin.vue'
import Home from '../components/MyHome.vue'
import MyUser from '../components/menus/MyUsers.vue'
import MyRights from '../components/menus/MyRights.vue'
import MyUserDetail from '../components/user/MyUserDetail.vue'


//将VueRouter插件加载到Vue中，因为VueRouter需要依赖Vue
Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home, children: [
        {path: 'user', component: MyUser},
        {path: 'right', component: MyRights},
        {path: 'userInfo/:id', component: MyUserDetail, props: true},
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
    const token = localStorage.getItem('token')
    if (to.path == '/login') {
        next()
        return
    }
    if (token != null) {
        next()
    } else {
        console.log(222);
        next('/login')
    }
})

export default router