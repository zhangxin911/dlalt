<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/offline-meeting"><i class="el-icon-arrow-left icon-back"></i></router-link>
      报名</el-header>
    <el-main>
        <el-row>
          <img src="../../../build/logo.png">
        </el-row>
      <el-form ref="form"  label-width="80px">
        <el-form-item label="报名主题">知识培训报名</el-form-item>
        <el-form-item label="主办单位">中海油北京人力</el-form-item>
        <el-form-item label="报名时间">2018/1/20 10：00</el-form-item>
        <el-form-item label="">2018/1/20 10：00</el-form-item>

      </el-form>

      <el-row>
        <el-row v-if="enrollState">
        <el-button v-bind:disabled="enrollState">已报名</el-button>
        <el-row class="mt1 explain">报名时间2018/1/25 20:00</el-row>
        <el-button class="mt1" type="success" v-on:click="!enrollState">取消报名</el-button>
        </el-row>
        <el-row v-else>
        <el-button type="success"><router-link to="/enroll/enroll-success">报名</router-link></el-button>
        </el-row>
      </el-row>
    </el-main>
  </el-container>

</template>
<script>

export default{
  data(){
    return{
       enrollState:false,
    }
  }
}
</script>
<style>
  .explain{
    font-size:0.4em;
    color:rgba(0,0,0,0.4);
  }
</style>
