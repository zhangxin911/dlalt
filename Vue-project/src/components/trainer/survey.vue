<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer"><i class="el-icon-arrow-left icon-back"></i></router-link>调研工具</el-header>
    <el-main>
      <el-form label-width="80px">
        <el-form-item label="调研主题">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="调研简介">
          <el-input type="textarea" ></el-input>
        </el-form-item>
      </el-form>

      <el-row :gutter="10">
        <el-button><router-link to="/trainer">取消发布</router-link></el-button>
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

      }
    }
  }
</script>
