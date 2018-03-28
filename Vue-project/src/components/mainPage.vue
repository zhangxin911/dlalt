<template>

  <el-container>
    <el-header class="t-center head-top">蔚蓝学习2.0</el-header>
    <el-main></el-main>
    <el-footer class="foot-guide">

      <el-row>
      <el-col :span="12" class="grid-content foot-guide-item"><router-link to="/trainee">我要上课</router-link></el-col>
      <el-col :span="12" class="grid-content foot-guide-item"><router-link to="#">我要开班</router-link></el-col>
      </el-row>

    </el-footer>
  </el-container>

</template>

<script>

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
  }
  .el-row{
    width:100%;
    height:60px;
    line-height:60px;

  }
</style>
