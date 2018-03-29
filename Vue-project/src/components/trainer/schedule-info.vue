<template>
  <el-container>
    <el-header class="t-center head-top">日程管理</el-header>
    <el-main>
      <el-row>
        培训名培训名
      </el-row>
      <el-row>
        <el-collapse v-model="activeNames">
          <el-collapse-item v-for="(item) in scheduleData"  v-bind:title="item.title" v-bind:name="item.index">
            <div v-for="(val) in item.contents">
              <el-row>
                <el-col :span="4">{{val.time}}</el-col>
                <el-col :span="4">{{val.name}}</el-col>
                <el-col :span="16">
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

        <el-button class="foot-guide-item"><router-link to="/trainer/train-data">返回</router-link></el-button>
      <el-button type="primary" class="foot-guide-item"><router-link to="/train-data/schedule-add">新增日程</router-link></el-button>

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
