import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import addSite from '@/components/addSite'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/add',
      name: 'addSite',
      component: addSite
    },
  ]
})
