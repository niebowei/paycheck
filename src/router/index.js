import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import info from '@/components/info'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/info',
      name:'info',
      component:info
    }
  ]
})
