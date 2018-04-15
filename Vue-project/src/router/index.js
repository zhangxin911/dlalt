import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
// Vue.use(elementJs)
Vue.use(ElementUI)


export default new Router({
  mode:'history',  //去除#, 使用html5 History模式
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
    },
    {
      path:'/offline-meeting-rate',
      name:'offline-meeting-rate',
      component:resolve=>require(['../components/offline-meeting/offline-meeting-rate.vue'],resolve)
    },
    {
      path:'/user-bind',
      name:'user-bind',
      component:resolve=>require(['../components/user-bind.vue'],resolve)
    },
    {
      path:'/enroll/enroll-info',
      name:'enroll-info',
      component:resolve=>require(['../components/enroll/enroll-info.vue'],resolve)
    },
    {
      path:'/enroll/enroll-success',
      name:'enroll-success',
      component:resolve=>require(['../components/enroll/enroll-success.vue'],resolve)
    },
    {
      path:'/register/register-info',
      name:'register-info',
      component:resolve=>require(['../components/register/register-info.vue'],resolve)
    },
    {
      path:'/courseware/courseware',
      name:'courseware',
      component:resolve=>require(['../components/courseware/courseware.vue'],resolve)
    },
    {
      path:'/research/research',
      name:'research',
      component:resolve=>require(['../components/research/research.vue'],resolve)
    },
    {
      path:'/trainer',
      name:'trainer',
      component:resolve=>require(['../components/trainer/trainer-main.vue'],resolve)
    },
    {
      path:'/trainer/start-class',
      name:'start-class',
      component:resolve=>require(['../components/trainer/start-class.vue'],resolve)
    },
    {
      path:'/trainer/start-success',
      name:'start-success',
      component:resolve=>require(['../components/trainer/start-success.vue'],resolve)
    },
    {
      path:'/trainer/courseware',
      name:'courseware',
      component:resolve=>require(['../components/trainer/courseware.vue'],resolve)
    },
    {
      path:'/trainer/register',
      name:'register',
      component:resolve=>require(['../components/trainer/register.vue'],resolve)
    },
    {
      path:'/trainer/enroll',
      name:'enroll',
      component:resolve=>require(['../components/trainer/enroll.vue'],resolve)
    },
    {
      path:'/trainer/survey',
      name:'survey',
      component:resolve=>require(['../components/trainer/survey.vue'],resolve)
    },
    {
      path:'/trainer/train-data',
      name:'train-data',
      component:resolve=>require(['../components/trainer/train-data.vue'],resolve)
    },
    {
      path:'/train-data/enroll-info',
      name:'enroll-info',
      component:resolve=>require(['../components/trainer/enroll-info.vue'],resolve)
    },
    {
      path:'/train-data/rate-info',
      name:'rate-info',
      component:resolve=>require(['../components/trainer/rate-info.vue'],resolve)
    },
    {
      path:'/train-data/schedule-info',
      name:'schedule-info',
      component:resolve=>require(['../components/trainer/schedule-info.vue'],resolve)
    },
    {
      path:'/train-data/schedule-add',
      name:'schedule-add',
      component:resolve=>require(['../components/trainer/schedule-add.vue'],resolve)
    },{
      path:'/train-data/questionnaire',
      name:'questionnaire',
      component:resolve=>require(['../components/trainer/questionnaire.vue'],resolve)
    },{
      path:'/train-data/questionnaire-detail',
      name:'questionnaire',
      component:resolve=>require(['../components/trainer/questionnaire-detail.vue'],resolve)
    }
  ]
})
