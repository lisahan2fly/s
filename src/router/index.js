import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/list',
      component: r => require.ensure([], () => r(require('../page/list')), 'list')
    },
    {
      path: '/score',
      component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }
  ]
})
