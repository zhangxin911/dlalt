<template>
  <el-container>
    <el-header class="t-center head-top">培训/会议详情</el-header>
    <el-main>
      <div>1-15 财务基础</div>
      <el-row :gutter="20">
        <el-col :span="8"> <span class="demonstration">培训/会议设置</span></el-col>
        <el-col :span="16">  <el-rate v-model="value1" score-template="{value}"></el-rate></el-col>
      </el-row>
      <el-row>
        <el-input   placeholder="请留下意见"></el-input>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"> <span class="demonstration">讲师授课</span></el-col>
        <el-col :span="16">  <el-rate v-model="value1" score-template="{value}"></el-rate></el-col>
      </el-row>
      <el-row>
        <el-input   placeholder="请留下意见"></el-input>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"> <span class="demonstration">综合服务</span></el-col>
        <el-col :span="16">  <el-rate v-model="value1" score-template="{value}"></el-rate></el-col>
      </el-row>
      <el-row>
        <el-input   placeholder="请留下意见"></el-input>
      </el-row>
      <el-row>
        <el-col :span="12"> <el-button type="primary"><router-link to="/offline-meeting">返回</router-link></el-button></el-col>
        <el-col :span="12"> <el-button type="primary"><router-link to="/offline-meeting">提交</router-link> </el-button></el-col>
      </el-row>
      <el-row>
        <el-col :span="3"> 阶段问卷</el-col>
      </el-row>
      <el-row v-for="(item) in questionnaire">
        <el-col :span="4">{{item.name}}</el-col>
        <el-col :span="20">{{item.state}}</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  export default{
    data(){
      return{
        value1:null,
        value2:null,
        questionnaire:[
        {
          name:'问卷1名称问卷1名称',
          state:'未完成'
        },{
            name:'问卷2名称问卷2名称',
            state:'完成'
        },{
            name:'问卷3名称问卷3名称',
            state:'未完成'
        }]
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
