<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer"><i class="el-icon-arrow-left icon-back"></i></router-link>
      调研</el-header>
    <el-main>
      <el-row>
        <p>课件主题</p>
      </el-row>
      <el-row>
        课件说明：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
      </el-row>
      <el-row>
        <el-col :span="4">主办单位:</el-col>
        <el-col :span="8">中海油北京人力</el-col>
      </el-row>
      <el-row>
        <p>1、您认为讲师的授课技巧如何？</p>
      </el-row>
      <el-row>
        <el-radio v-model="radio" label="1">非常满意</el-radio>
        <el-radio v-model="radio" label="2">满意</el-radio>
        <el-radio v-model="radio" label="3">一般</el-radio>
        <el-radio v-model="radio" label="4">不满意</el-radio>
      </el-row>
      <el-row>
        <p>2、您对讲师还有什么评价？</p>
      </el-row>
      <el-row>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea"  v-bind:disabled="isFinished">
        </el-input>
      </el-row>
      <el-row>
        <el-button v-show="!isFinished" type="primary">提交</el-button>
        <el-button v-show="isFinished" type="primary">返回</el-button>
      </el-row>
    </el-main>
  </el-container>

</template>
<script>

  export default{
    data(){
      return{
        radio: '1',
        textarea: '',
        isFinished:false
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
