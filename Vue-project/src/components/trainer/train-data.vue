<template>
  <el-container>
    <el-header class="t-center head-top">问卷管理</el-header>
    <el-main>
      <el-row>
        <p>培训/会议数据查看</p>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple">培训/会议数据</div></el-col>
      </el-row>
      <el-row>
        <el-tag>浏览1000</el-tag>
        <el-tag type="success">转发1000</el-tag>
        <el-tag type="info">报名1000</el-tag>
        <el-tag type="warning">评价1000</el-tag>
      </el-row>

      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple">培训/会议信息</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><router-link to="/train-data/enroll-info">报名信息</router-link></el-col>
        <el-col :span="8">签到管理</el-col>
        <el-col :span="8"><router-link to="/train-data/rate-info">评价信息</router-link></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><router-link to="/train-data/schedule-info">日程管理</router-link></el-col>
        <el-col :span="8"><router-link to="/train-data/questionnaire">问卷管理</router-link></el-col>
        <el-col :span="8">二维码</el-col>
      </el-row>

    </el-main>
  </el-container>

</template>
<script>

</script>
