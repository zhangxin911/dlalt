<template>
  <el-container>
    <el-header class="t-center head-top">报名</el-header>
    <el-main>
        <el-row>
          <img src="../../../build/logo.png">
        </el-row>
      <el-row>
        <el-col :span="4">报名主题</el-col>
        <el-col :span="20">知识培训报名</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">主办单位</el-col>
        <el-col :span="20">中海油北京人力</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">报名时间</el-col>
        <el-col :span="20">
          <el-col :span="24">2018/1/20 10：00</el-col>
          <el-col :span="24">2018/1/20 10：00</el-col>
        </el-col>
      </el-row>
      <el-row>
        <div v-if="enrollState">
        <el-button  v-bind:disabled="enrollState">已报名</el-button>
        <p>报名时间2018/1/25 20:00</p>
        <el-button type="success">取消报名</el-button>
        </div>
        <div v-else>
        <el-button type="success"><router-link to="/enroll/enroll-success">报名</router-link></el-button>
        </div>
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
  .page-header{
    border-bottom:1px solid rgba(0,0,0,0.1);
    text-align:left;
    text-indent:1.6em;
    padding:10px 0px;
    color:rgba(0,0,0,0.3);
  }
</style>
