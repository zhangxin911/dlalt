<template>
  <el-container>
    <el-header class="t-center head-top">签到</el-header>
    <el-main>
      <el-row>
        <img src="../../../build/logo.png">
      </el-row>
      <el-row>
        <el-col :span="4">签到主题</el-col>
        <el-col :span="20">元旦活动签到</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">主办单位</el-col>
        <el-col :span="20">中海油北京人力</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">签到地址</el-col>
        <el-col :span="20">中海油北京人力</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">签到时间</el-col>
        <el-col :span="20">
          <el-col :span="24">2018/1/20 10：00</el-col>
          <el-col :span="24">2018/1/20 10：00</el-col>
        </el-col>
      </el-row>
      <el-row>
        <div v-if="registerState">
          <el-button v-show="!overtime" v-bind:disabled="registerState">已签到</el-button>
          <p v-show="!overtime" >报名时间2018/1/25 20:00</p>
          <el-button disabled v-show="overtime" >签到</el-button>
        </div>
        <div v-else>
          <el-button type="success">签到</el-button>
        </div>
      </el-row>
    </el-main>
  </el-container>

</template>
<script>

  export default{
    data(){
      return{
        registerState:false,
        overtime:false,
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
