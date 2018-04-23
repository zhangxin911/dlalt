<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link :to="{name:'offlineMeetingMain'}"><i class="el-icon-arrow-left icon-back"></i></router-link>培训/会议详情</el-header>
    <el-main>
      <el-row class="h3vh">1-15 财务基础</el-row>
      <el-row :gutter="20" style="padding:2vh 0">
        <el-col :span="8"> <span class="demonstration">培训/会议设置</span></el-col>
        <el-col :span="16"> <el-rate v-model="value1" score-template="{value}"></el-rate></el-col>
      </el-row>
      <el-row >
        <el-input type="textarea"  :autosize="{ minRows: 4, maxRows: 4}" placeholder="请留下意见"></el-input>
      </el-row>
      <el-row :gutter="20" style="padding:2vh 0">
        <el-col :span="8"> <span class="demonstration">讲师授课</span></el-col>
        <el-col :span="16">  <el-rate v-model="value2" score-template="{value}"></el-rate></el-col>
      </el-row>
      <el-row>
        <el-input  type="textarea" :autosize="{ minRows: 4, maxRows:4}"  placeholder="请留下意见"></el-input>
      </el-row>
      <el-row :gutter="20" style="padding:2vh 0">
        <el-col :span="8"> <span class="demonstration">综合服务</span></el-col>
        <el-col :span="16">  <el-rate v-model="value3" score-template="{value}"></el-rate></el-col>
      </el-row>
      <el-row >
        <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}"  placeholder="请留下意见" ></el-input>
      </el-row>
      <el-row class="h6vh" style="padding:1rem 0">
        <el-col :span="12"> <el-button type="primary"><router-link to="/offline-meeting">返回</router-link></el-button></el-col>
        <el-col :span="12"> <el-button type="primary"><router-link to="/offline-meeting">提交</router-link> </el-button></el-col>
      </el-row>
      <el-row class="h6vh">
        <el-col :span="24"> 阶段问卷</el-col>
      </el-row>
      <el-row v-for="(item) in questionnaire" class="h6vh">
        <el-col :span="16">{{item.name}}</el-col>
        <el-col :span="8">{{item.state}}</el-col>
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
        value3:null,
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

  ul,li{
    list-style-type: none;
  }
  .h6vh{
    height:6vh;
    line-height:6vh;
  }
  .h3vh{
    height:3vh;
    line-height:3vh;
  }
</style>
