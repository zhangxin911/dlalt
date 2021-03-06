// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  import Vue from 'vue'
  import Vuex from 'vuex'
  import App from './App'
  import router from './router'
  import Element from 'element-ui'
  import storeConfig from './vuex/store'
  import './assets/css/main.css'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Vuex);


/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  storeConfig,//使用store
  components: { App },
  template:'<App/>'
});
