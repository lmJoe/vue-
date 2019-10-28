// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 单独引入的样式文件 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import axios from 'axios'
// vuex
import {store} from './store'
// swiper
import vueSwiper from 'vue-awesome-swiper'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import 'swiper/dist/css/swiper.css'
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(vueSwiper)
Vue.config.productionTip = false
// import recharge from '.components/user/recharge'

/* eslint-disable no-new */
new Vue({
  // 使用store
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
