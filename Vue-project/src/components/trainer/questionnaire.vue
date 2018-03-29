<template>
  <el-container>
    <el-header class="t-center head-top">问卷管理</el-header>
    <el-main>
       <el-row v-for="(item) in questionnaire">
           <el-col :span="12">{{item.name}}</el-col>
           <el-col :span="12"><router-link v-bind:to="item.url"><i class="el-icon-arrow-right"></i></router-link></el-col>
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
         url:'#'
       },{
           name:'阶段问卷2',
           url:'#'
       }]
    }
  }
}
</script>
