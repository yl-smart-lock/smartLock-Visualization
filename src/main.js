import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element_ui/index.js'
import './assets/font/iconfont.css'

import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui'

// import ELEMENT from 'element-ui'

import 'amfe-flexible'


import  * as echarts from 'echarts'
Vue.prototype.$echarts = echarts





Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(echarts)
// axios.defaults.baseURL='/hld'
// axios.defaults.baseURL='/api'


// 实例对象
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')