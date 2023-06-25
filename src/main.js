import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element_ui/index.js'
import './assets/font/iconfont.css'

import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts-liquidfill'


import ElementUI from 'element-ui'

// import ELEMENT from 'element-ui'

// import 'amfe-flexible'


import * as echarts from 'echarts'
import {
  login
} from "@/api/api";

var token = window.location.href.split("=")[1];
login({
  token: token
}).then((res) => {
  if (res.code == 100) {
    this.$message.error("登录出错");
  } else {
    sessionStorage.setItem("token", res.results.access_token);
    // this.$store.commit("setToken", res.results.access_token);
  }
});
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