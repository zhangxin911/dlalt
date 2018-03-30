<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer/train-data"><i class="el-icon-arrow-left icon-back"></i></router-link>
      问卷管理</el-header>
    <el-main>
       <el-row v-for="(item) in questionnaire" class="mt1" :gutter="20">
           <el-col :span="12" class="t-left">{{item.name}}</el-col>
           <el-col :span="12" class="t-right"><router-link v-bind:to="item.url"><i class="el-icon-arrow-right"></i></router-link></el-col>
       </el-row>
    </el-main>
  </el-container>

</template>
<script>
export default {
  data(){
    return{
       questionnaire:[
       {
         name:'阶段问卷1',
         url:'/train-data/questionnaire-detail'
       },{
           name:'阶段问卷2',
           url:'#'
       }]
    }
  }
}
</script>
<style>
  .t-left{
    text-align:left;
  }
  .t-right{
    text-right:right;
  }
</style>
