<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer/train-data"><i class="el-icon-arrow-left icon-back"></i></router-link>
      日程管理</el-header>
    <el-main>
      <el-row class="mt1">
        培训名培训名
      </el-row>
      <el-row class="mt1">
        <el-collapse v-model="activeNames">
          <el-collapse-item v-for="(item) in scheduleData"  v-bind:title="item.title" v-bind:name="item.index">
            <div v-for="(val) in item.contents">
              <el-row class="mt1" type="flex" align="middle">
                <el-col :span="8" class="t-left">{{val.time}}</el-col>
                <el-col :span="4">{{val.name}}</el-col>
                <el-col :span="12" class="t-right">
                  <el-button icon="el-icon-edit" plain></el-button>
                <el-button type="warning" icon="el-icon-delete" plain></el-button>
                </el-col>
              </el-row>
            </div>

          </el-collapse-item>

        </el-collapse>


      </el-row>
    </el-main>
    <el-footer class="foot-guide">



      <el-col :span="12" class="grid-content foot-guide-item bg-border-lighter br">
        <router-link class="foot-guide-item" to="/trainer/train-data">返回</router-link>
      </el-col>
      <el-col :span="12" class="grid-content foot-guide-item">
        <router-link class="foot-guide-item" to="/train-data/schedule-add">新增日程</router-link>
      </el-col>

    </el-footer>
  </el-container>
</template>
<script>
  import ElFooter from "../../../node_modules/element-ui/packages/footer/src/main.vue";

  export default {
    components: {ElFooter},
    data(){
      return {
          activeNames: ['1'],
          scheduleData:[
            {
              title:'公司财务知识讲座',
              acName:'',
              index:'1',
              contents:[
                {
                  name:'财务基础',
                  time:'8:00-10:00'
                },
                {
                  name:'案例分析',
                  time:'14:00-16:00'
                },
                {
                  name:'实战演练',
                  time:'18:00-20:00'
                }
              ]
            },{
              title:'公司安全知识讲座',
              acName:'',
              index:'2',
              contents:[
                {
                  name:'财务基础',
                  time:'8:00-10:00'
                },
                {
                  name:'案例分析',
                  time:'14:00-16:00'
                },
                {
                  name:'实战演练',
                  time:'18:00-20:00'
                }
              ]
            }
          ]
      }
    }
  }
</script>
<style>
  .t-right{
    text-align:right;
  }
  .t-left{
    text-align:left;
  }
  .foot-guide-item{
    width:50%;
    height:60px;
    line-height:60px;
  }
</style>
