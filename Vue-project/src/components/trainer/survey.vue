<template>
  <el-container>
    <el-header class="t-center head-top">调研工具</el-header>
    <el-main>
      <el-row>
        <img src="../../../build/logo.png">
      </el-row>
      <el-row>
        <el-row :gutter="10">
          <el-col :span="8"><div class="grid-content bg-purple">调研主题</div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
        </el-row>
      </el-row>
      <el-row>
        <el-row :gutter="10">
          <el-col :span="8"><div class="grid-content bg-purple">主办单位</div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
        </el-row>
      </el-row>
      <!--<el-row :gutter="10">-->
        <!--<el-col :span="6"><div class="grid-content bg-purple">-->
          <!--签到时间-->
        <!--</div></el-col>-->
        <!--<el-col :span="18"><div class="grid-content bg-purple">-->
          <!--<el-col :span="10"><el-input v-model="input" placeholder="开始时间"></el-input></el-col>-->
          <!--<el-col :span="4">至</el-col>-->
          <!--<el-col :span="10"> <el-input v-model="input" placeholder="请输入内容"></el-input></el-col>-->
        <!--</div>-->
        <!--</el-col>-->

      <!--</el-row>-->
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content bg-purple">
          调研简介
        </div>
        </el-col>
        <el-col :span="16">
          <el-input type="textarea" ></el-input>
        </el-col>

      </el-row>

      <el-row :gutter="10">
        <el-button><router-link to="/trainer">取消发布</router-link></el-button>
        <el-button type="primary">确认发布</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data(){
      return {
        input: '',

      }
    }
  }
</script>
