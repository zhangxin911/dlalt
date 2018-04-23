<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link :to="{name:'trainer'}"><i class="el-icon-arrow-left icon-back"></i></router-link>签到工具</el-header>
    <el-main>
      <el-row>
        <img src="../../../build/logo.png">
      </el-row>
      <el-form ref="form" label-width="80px">
        <el-form-item label="签到主题">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="签到时间">
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-time-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="报名简介">
          <el-input type="textarea" ></el-input>
        </el-form-item>
      </el-form>


      <el-row :gutter="10" class="mt1">
        <el-button><router-link v-bind:to="{name:'trainer'}">取消发布</router-link></el-button>
        <el-button type="primary">确认发布</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>

  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";

  export default {
    components: {ElFormItem},
    data(){
      return {
        input: '',
        form:{
          data1:'',
          data2:''
        }
      }
    }
  }
</script>
