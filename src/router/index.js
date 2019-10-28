import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import recharge from '@/components/user/recharge'
import moviesdetail from '@/components/user/moviesdetail'
import user from '@/components/user/user'
import movieslist from '@/components/user/movieslist'
import videoList from '@/components/user/videoList'
import welcomepage from '@/components/user/welcomepage'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcomepage'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/welcomepage',
          name: 'welcomepage',
          component: welcomepage,
          meta: {
            keepAlive: false
          }
        },
        {
          path: '/user',
          name: 'user',
          component: user,
          meta: {
            keepAlive: false
          }
        },
        {
          path: '/movieslist',
          name: 'movieslist',
          component: movieslist,
          meta: {
            keepAlive: false
          }
        },
        {
          path: '/videoList',
          name: 'videoList',
          component: videoList,
          meta: {
            keepAlive: false
          }
        }
      ]
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge,
      meta: {
        keepAlive: true,
        // 用于判断上一个页面是哪个
        isBack: true
      }
    },
    {
      path: '/moviesdetail',
      name: 'moviesdetail',
      component: moviesdetail,
      meta: {
        keepAlive: true,
        // 用于判断上一个页面是哪个
        isBack: true
      }
    }
  ]
})
