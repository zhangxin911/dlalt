'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

require('element-ui/lib/theme-chalk/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mainPage from '@/components/mainPage'
// import elementJs from './assets/element-ui/js/index.js'
//
_vue2.default.use(_vueRouter2.default);
// Vue.use(elementJs)
_vue2.default.use(_elementUi2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'mainPage',
    component: function component(resolve) {
      return require(['../components/mainPage.vue'], resolve);
    }
  }, {
    path: '/home',
    name: 'home',
    component: function component(resolve) {
      return require(['../components/home.vue'], resolve);
    }
  }, {
    path: '/trainee',
    name: 'traineeMain',
    component: function component(resolve) {
      return require(['../components/trainee/trainee-main.vue'], resolve);
    }
  }, {
    path: '/trainee-info',
    name: 'traineeInfo',
    component: function component(resolve) {
      return require(['../components/trainee/trainee-info.vue'], resolve);
    }
  }, {
    path: '/trainee/interests-tab',
    name: 'interestsTab',
    component: function component(resolve) {
      return require(['../components/trainee/interests-tab.vue'], resolve);
    }
  }, {
    path: '/offline-meeting',
    name: 'offline-meeting-main',
    component: function component(resolve) {
      return require(['../components/offline-meeting/offline-meeting-main.vue'], resolve);
    }
  }, {
    path: '/offline-meeting-rate',
    name: 'offline-meeting-rate',
    component: function component(resolve) {
      return require(['../components/offline-meeting/offline-meeting-rate.vue'], resolve);
    }
  }, {
    path: '/user-bind',
    name: 'user-bind',
    component: function component(resolve) {
      return require(['../components/user-bind.vue'], resolve);
    }
  }, {
    path: '/enroll/enroll-info',
    name: 'enroll-info',
    component: function component(resolve) {
      return require(['../components/enroll/enroll-info.vue'], resolve);
    }
  }, {
    path: '/enroll/enroll-success',
    name: 'enroll-info',
    component: function component(resolve) {
      return require(['../components/enroll/enroll-success.vue'], resolve);
    }
  }, {
    path: '/register/register-info',
    name: 'register-info',
    component: function component(resolve) {
      return require(['../components/register/register-info.vue'], resolve);
    }
  }, {
    path: '/courseware/courseware',
    name: 'courseware',
    component: function component(resolve) {
      return require(['../components/courseware/courseware.vue'], resolve);
    }
  }, {
    path: '/research/research',
    name: 'research',
    component: function component(resolve) {
      return require(['../components/research/research.vue'], resolve);
    }
  }, {
    path: '/trainer',
    name: 'trainer',
    component: function component(resolve) {
      return require(['../components/trainer/trainer-main.vue'], resolve);
    }
  }, {
    path: '/trainer/start-class',
    name: 'start-class',
    component: function component(resolve) {
      return require(['../components/trainer/start-class.vue'], resolve);
    }
  }, {
    path: '/trainer/start-success',
    name: 'start-class',
    component: function component(resolve) {
      return require(['../components/trainer/start-success.vue'], resolve);
    }
  }, {
    path: '/trainer/courseware',
    name: 'courseware',
    component: function component(resolve) {
      return require(['../components/trainer/courseware.vue'], resolve);
    }
  }, {
    path: '/trainer/register',
    name: 'register',
    component: function component(resolve) {
      return require(['../components/trainer/register.vue'], resolve);
    }
  }, {
    path: '/trainer/enroll',
    name: 'enroll',
    component: function component(resolve) {
      return require(['../components/trainer/enroll.vue'], resolve);
    }
  }, {
    path: '/trainer/survey',
    name: 'survey',
    component: function component(resolve) {
      return require(['../components/trainer/survey.vue'], resolve);
    }
  }, {
    path: '/trainer/train-data',
    name: 'train-data',
    component: function component(resolve) {
      return require(['../components/trainer/train-data.vue'], resolve);
    }
  }, {
    path: '/train-data/enroll-info',
    name: 'enroll-info',
    component: function component(resolve) {
      return require(['../components/trainer/enroll-info.vue'], resolve);
    }
  }, {
    path: '/train-data/rate-info',
    name: 'rate-info',
    component: function component(resolve) {
      return require(['../components/trainer/rate-info.vue'], resolve);
    }
  }, {
    path: '/train-data/schedule-info',
    name: 'schedule-info',
    component: function component(resolve) {
      return require(['../components/trainer/schedule-info.vue'], resolve);
    }
  }, {
    path: '/train-data/schedule-add',
    name: 'schedule-add',
    component: function component(resolve) {
      return require(['../components/trainer/schedule-add.vue'], resolve);
    }
  }, {
    path: '/train-data/questionnaire',
    name: 'questionnaire',
    component: function component(resolve) {
      return require(['../components/trainer/questionnaire.vue'], resolve);
    }
  }, {
    path: '/train-data/questionnaire-detail',
    name: 'questionnaire',
    component: function component(resolve) {
      return require(['../components/trainer/questionnaire-detail.vue'], resolve);
    }
  }]
});
//# sourceMappingURL=index.js.map