'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _mainPage = require('@/components/mainPage');

var _mainPage2 = _interopRequireDefault(_mainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import elementJs from './assets/element-ui/js/index.js'
//


_vue2.default.use(_vueRouter2.default);

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
  }]
});
//# sourceMappingURL=index.js.map