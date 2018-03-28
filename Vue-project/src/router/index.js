import Vue from 'vue'
import Router from 'vue-router'
// import mainPage from '@/components/mainPage'
// import elementJs from './assets/element-ui/js/index.js'
//
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
// Vue.use(elementJs)
Vue.use(ElementUI)


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
    },
    {
      path:'/trainee',
      name:'traineeMain',
      component:resolve=>require(['../components/trainee/trainee-main.vue'],resolve)
    },
    {
      path:'/trainee-info',
      name:'traineeInfo',
      component:resolve=>require(['../components/trainee/trainee-info.vue'],resolve)
    },
    {
      path:'/trainee/interests-tab',
      name:'interestsTab',
      component:resolve=>require(['../components/trainee/interests-tab.vue'],resolve)
    },
    {
      path:'/offline-meeting',
      name:'offline-meeting-main',
      component:resolve=>require(['../components/offline-meeting/offline-meeting-main.vue'],resolve)
    }
  ]
})
