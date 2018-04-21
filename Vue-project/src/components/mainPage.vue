<template>

  <el-container>
    <el-header class="t-center head-top">蔚蓝学习2.0</el-header>
    <el-main>
      <img src="../../build/logo.png" width="200" height="200">
      <el-row>
        <p class="welcome" v-on:click="changeUser">Welcome!</p>
        <p class="welcome">{{store.state.word}}</p>

      </el-row>
    </el-main>
    <el-footer class="foot-guide">

      <el-col :span="12" class="grid-content foot-guide-item bg-border-lighter br"><router-link :to="{name:'trainee'}">我要上课</router-link></el-col>
      <el-col :span="12" class="grid-content foot-guide-item"><router-link :to="{name:'trainer'}">我要开班</router-link></el-col>

    </el-footer>
  </el-container>

</template>

<script>
  import store from '../vuex/store'
  export default{
    data(){
      return{
        store
      }
    },
    methods:{
      changeUser(){
         store.state.word='has changed!';
         console.log(store.state.userData);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foot-guide{
    background:#fff;
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    display:flex;
    border-top:1px solid rgba(0,0,0,0.4);
  }


  .t-center{
    text-align:center;
  }
  .head-top{
    background:#3190e8;
    position:fixed;
    z-index:100;
    top:0;
    left:0;
    width:100%;
    color:#fff;
    line-height:60px;
  }
  .foot-guide-item{
    width:50%;
    height:60px;
    line-height:60px;
  }

</style>
