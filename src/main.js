import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from "echarts";
import './axios/index'
import 'lib-flexible'

import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import  '@/element_ui/index.js'
Vue.prototype.$echarts = echarts;

// Vue.use(element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
