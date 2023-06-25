import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageType:1,
    pageUrl:'',
    token:""
  },
  getters: {
  },
  mutations: {
    setToken:(state,data) => state.token =data,
    setPageType:(state,data) => state.pageType =data,
    setPageUrl:(state,data) => state.pageUrl =data,
  },
  actions: {
  },
  modules: {
  }
})
