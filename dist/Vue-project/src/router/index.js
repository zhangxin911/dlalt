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
  }]
});
//# sourceMappingURL=index.js.map