import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const state={
  word:"hello world!"
};


export default new Vuex.Store({
  state,
  mutations:{
    change(state){
      state.word='hello user!'
    }
  }
});

