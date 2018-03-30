<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer"><i class="el-icon-arrow-left icon-back"></i></router-link>
      签到工具</el-header>
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
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>


      <el-row>
        <el-row :gutter="10">
          <el-col :span="8"><div class="grid-content bg-purple">主办单位</div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
        </el-row>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content bg-purple">
          签到时间
        </div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple">
          <el-col :span="10"><el-input v-model="input" placeholder="开始时间"></el-input></el-col>
          <el-col :span="4">至</el-col>
          <el-col :span="10"> <el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        </div>
        </el-col>

      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content bg-purple">
          签到地点
        </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple"></div>

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
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";

  export default {
    components: {ElFormItem},
    data() {
      return {
        input: '',

      }
    }
  }
</script>
