import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
// Vue.use(elementJs)
Vue.use(ElementUI)

import trainee from '../components/trainee/trainee-main.vue'
import traineeInfo from '../components/trainee/trainee-info.vue'
import mainPage from '../components/mainPage.vue'
import interestsTab from '../components/trainee/interests-tab.vue'
import offlineMeetingMain from '../components/offline-meeting/offline-meeting-main.vue'
import offlineMeetingRate from '../components/offline-meeting/offline-meeting-rate.vue'
import userBind from '../components/user-bind.vue'
import enrollInfo from '../components/enroll/enroll-info.vue'
import enrollSuccess from '../components/enroll/enroll-success.vue'
import registerInfo from '../components/register/register-info.vue'
import research from '../components/research/research.vue'
import trainer from '../components/trainer/trainer-main.vue'
import startClass from '../components/trainer/start-class.vue'
import startSuccess from '../components/trainer/start-success.vue'
import tCourseWare from '../components/trainer/courseware.vue'
import register from '../components/trainer/register.vue'
import enroll from '../components/trainer/enroll.vue'
import survey from '../components/trainer/survey.vue'
import trainData from '../components/trainer/train-data.vue'
import tEnrollInfo from '../components/trainer/enroll-info.vue'
import rateInfo from '../components/trainer/rate-info.vue'
import scheduleInfo from '../components/trainer/schedule-info.vue'
import scheduleAdd from '../components/trainer/schedule-add.vue'
import questionnaire from '../components/trainer/questionnaire.vue'
import questionnaireDetail from '../components/trainer/questionnaire-detail.vue'


export default new Router({
  mode:'history',  //去除#, 使用html5 History模式
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component:mainPage,
    },
    {
      path:'/trainee',
      name:'trainee',
      component:trainee,
    },
    {
      path:'/trainee-info',
      name:'traineeInfo',
      component:traineeInfo
    },
    {
      path:'/trainee/interests-tab',
      name:'interestsTab',
      component:interestsTab
    },
    {
      path:'/offline-meeting',
      name:'offlineMeetingMain',
      component:offlineMeetingMain
    },
    {
      path:'/offline-meeting-rate',
      name:'offlineMeetingRate',
      component:offlineMeetingRate
    },
    {
      path:'/user-bind',
      name:'userBind',
      component:userBind
    },
    {
      path:'/enroll/enroll-info',
      name:'enrollInfo',
      component:enrollInfo
    },
    {
      path:'/enroll/enroll-success',
      name:'enrollSuccess',
      component:enrollSuccess
    },
    {
      path:'/register/register-info',
      name:'registerInfo',
      component:registerInfo
    },
    {
      path:'/courseware/courseware',
      name:'courseware',
      component:resolve=>require(['../components/courseware/courseware.vue'],resolve)
    },
    {
      path:'/research/research',
      name:'research',
      component:research
    },
    {
      path:'/trainer',
      name:'trainer',
      component:trainer
    },
    {
      path:'/trainer/start-class',
      name:'start-class',
      component:startClass
    },
    {
      path:'/trainer/start-success',
      name:'start-success',
      component:startSuccess
    },
    {
      path:'/trainer/courseware',
      name:'tCourseWare',
      component:tCourseWare
    },
    {
      path:'/trainer/register',
      name:'register',
      component:register
    },
    {
      path:'/trainer/enroll',
      name:'enroll',
      component:enroll
    },
    {
      path:'/trainer/survey',
      name:'survey',
      component:survey
    },
    {
      path:'/trainer/train-data',
      name:'trainData',
      component:trainData
    },
    {
      path:'/train-data/enroll-info',
      name:'tEnrollInfo',
      component:tEnrollInfo
    },
    {
      path:'/train-data/rate-info',
      name:'rateInfo',
      component:rateInfo
    },
    {
      path:'/train-data/schedule-info',
      name:'scheduleInfo',
      component:scheduleInfo
    },
    {
      path:'/train-data/schedule-add',
      name:'schedule-add',
      component:scheduleAdd
    },{
      path:'/train-data/questionnaire',
      name:'questionnaire',
      component:questionnaire
    },{
      path:'/train-data/questionnaire-detail',
      name:'questionnaireDetail',
      component:questionnaireDetail
    }
  ]
})
