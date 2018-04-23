import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios);
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    word:"hello world!",
    //设置属性
    userData:{

    },
    userInterest:['办公效率','人力资源1','人际沟通']
  },
  getters:{
    //获取属性
  },
  mutations:{
    //获取属性
    getUserData(state,data){
      state.userData=data;
    },
    changeUserInterest(state,data){
      state.userInterest=Array.from(data);
    }
  },
  actions:{
    change(state){
      state.word='hello user!'
    }
  }
});

export default store;

axios.get('http://jsonplaceholder.typicode.com/posts/1/comments').then(
  function(res){
     store.commit('getUserData',res.data);
  }
);
