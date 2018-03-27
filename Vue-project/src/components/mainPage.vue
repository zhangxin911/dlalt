<template>
<div id="box">
  <el-container>
    <el-header class="t-center head-top">蔚蓝学习2.0</el-header>
    <el-main></el-main>
    <el-footer class="foot-guide">

      <el-row>
      <el-col :span="12" class="grid-content foot-guide-item"><l-btn v-on:click="goLearn">我要上课</l-btn></el-col>
      <el-col :span="12" class="grid-content foot-guide-item"><r-btn v-on:click="goTeach">我要开班</r-btn></el-col>
      </el-row>

    </el-footer>
  </el-container>
</div>
</template>

<script>
import Vue from 'vue'
(function(){

  let leftButton={
    template:'<button>我要上课</button>'
  },rightButton={
    template:'<button>我要开班</button>'
  }

  new Vue({
    el:'#box',
    components:{
      'l-btn':leftButton,
      'r-btn':rightButton
    },
    method:{
      goLearn:function(){
        console.log('learn');
      },
      goTeach:function(){
        console.log('teach');
      }
    }
  })


})();

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
    flex:2;
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

</style>
