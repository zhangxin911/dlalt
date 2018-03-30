<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer"><i class="el-icon-arrow-left icon-back"></i></router-link>
      问卷管理</el-header>
    <el-main>
      <el-row>
        培训/会议数据查看
      </el-row>
      <el-row>
        <el-col :span="12" class="tab-title">培训/会议数据</el-col>
      </el-row>
      <el-row class="mt1">
        <el-tag>浏览1000</el-tag>
        <el-tag type="success">转发1000</el-tag>
        <el-tag type="info">报名1000</el-tag>
        <el-tag type="warning">评价1000</el-tag>
      </el-row>

      <el-row class="mt1">
        <el-col :span="12" class="tab-title">培训/会议信息</el-col>
      </el-row>
      <el-row class="mt1" :gutter="10">
        <el-col :span="8" class="middle-tab tab-item"><router-link to="/train-data/enroll-info">报名信息</router-link></el-col>
        <el-col :span="8" class="middle-tab tab-item">签到管理</el-col>
        <el-col :span="8" class="middle-tab tab-item"><router-link to="/train-data/rate-info">评价信息</router-link></el-col>
      </el-row>
      <el-row class="mt1" :gutter="10">
        <el-col :span="8" class="middle-tab tab-item"><router-link to="/train-data/schedule-info">日程管理</router-link></el-col>
        <el-col :span="8" class="middle-tab tab-item"><router-link to="/train-data/questionnaire">问卷管理</router-link></el-col>
        <el-col :span="8" class="middle-tab tab-item">二维码</el-col>
      </el-row>

    </el-main>
  </el-container>

</template>
<script>

</script>
<style>
   .tab-item{
     background:#E6A23C;
   }
  .tab-title{
    font-size:1em;
    color:#606266;
    text-align: left;
  }
</style>
