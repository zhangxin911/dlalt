import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
// import elementJs from './assets/element-ui/js/index.js'
//


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component:resolve => require(['../components/mainPage.vue'],resolve)
    },
    {
      path:'/home',
      name:'home',
      component: resolve => require(['../components/home.vue'],resolve)
    }
  ]
})
