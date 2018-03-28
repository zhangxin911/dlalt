<template>
  <el-container>
    <el-header class="t-center head-top">培训/会议详情</el-header>
    <el-main>
      <div>1-15 财务基础</div>

    </el-main>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped>

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
  .tab-title{
    display:flex;
    flex-direction:row;
  }
  .training-date,.training-data{
    width:50%;
  }

  ul,li{
    list-style-type: none;
  }
</style>
