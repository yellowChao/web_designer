import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局自定义指令
Vue.directive('color', (el,bind) => {
  el.style.background = bind.value
})

new Vue({
  render: h => h(App),
}).$mount('#app')
