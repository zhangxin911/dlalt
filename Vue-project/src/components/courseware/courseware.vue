<template>
  <el-container>
    <el-header class="t-center head-top">课件</el-header>
    <el-main>
      <el-row>
          <p>课件主题</p>
      </el-row>
      <el-row>
        课件说明：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
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
