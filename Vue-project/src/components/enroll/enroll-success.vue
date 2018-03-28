<template>
  <el-container>
    <el-header class="t-center head-top">报名</el-header>
    <el-main>
      <el-row>
        成功
      </el-row>
    </el-main>
  </el-container>

</template>
<script>

  export default{
    data(){
      return{
        enrollState:true,
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
