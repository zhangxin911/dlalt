<template>
  <el-container>
    <el-header class="t-center head-top">日程管理</el-header>
    <el-main>
      <el-row>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="日期">
            <el-col>
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="时间">
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date3" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="地点">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button><router-link to="/train-data/schedule-info">取消</router-link></el-button>
            <el-button type="primary" >立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-main>

  </el-container>
</template>
<script>
  import ElFooter from "../../../node_modules/element-ui/packages/footer/src/main.vue";

  export default {
    components: {ElFooter},
    data(){
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          date3:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    }
  }
</script>
