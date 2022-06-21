import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'

//将VueRouter插件加载到Vue中，因为VueRouter需要依赖Vue
Vue.use(VueRouter)

const routes = [
    {path: '/home', component:Home},
    {path: '/mine', component:Mine}
]

const router = new VueRouter({
    routes
})


export default router