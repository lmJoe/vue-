// 引入vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 引入之后，对vuex进行引用
Vue.use(Vuex)

// 创建且声明一个对象
export const store = new Vuex.Store({
  //  要设置的全局访问的state对象
  strict: true, // 严格模式开启
  state: {
    // 要设置的初始属性值
    count: 0,
    idList: sessionStorage.getItem('idList') ? JSON.parse(sessionStorage.getItem('idList')) : null
  },
  getters: { // 实时监听state值的变化（最新状态）
    getCount (state) { // 承载变化的count的值
      return state.count
    },
    // isShow (state) {
    //   return state.ChangeShowCom
    // },
    getIdList (state) {
      return state.idList
    }
  },
  mutations: {
    saveId (state, val) {
      state.count = val
    }
  },
  actions: {}
})
