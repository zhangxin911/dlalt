<template>

  <el-container>
    <el-header class="t-center head-top">培训/会议详情</el-header>
    <el-main>

      <div>
        <p>培训标题</p>
      </div>

      <div>
         <img src="../../../build/logo.png">
      </div>
      <div>
       <p>培训时间：{{meettime}}</p>
       <p>培训地点：{{meetplace}}</p>
      </div>

      <div>
        <p v-on:click="showed=!showed">+</p>
      </div>
      <div v-show="showed">
         <div class="tab-title">
            <div class="training-date" v-on:click="trainingStatus=true">培训日程</div>
            <div class="training-data" v-on:click="trainingStatus=false">培训资料</div>
         </div>
        <div class="training-date-tab" v-if="trainingStatus">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(item) in trainShedule"  v-bind:title="item.date" name="1">
              <div v-for="(ditem) in item.details">
              <div style="display:flex;flex-direction:row">
                 <div style="width:45%">{{ditem.name}}</div>
                 <div style="width:45%">{{ditem.teacher}}</div>
                 <div style="width:10%">{{ditem.state}}</div>
              </div>
              <div style="display:flex;flex-direction:row">
                <div style="width:45%">{{ditem.time}}</div>
                <div style="width:45%">{{ditem.place}}</div>
                <div style="width:10%"> </div>
              </div>
              </div>
            </el-collapse-item>

          </el-collapse>
          <div>
            <el-button type="primary">报名</el-button>
          </div>
        </div>
        <div class="training-data-tab" v-else="!trainingStatus">
2
        </div>
      </div>
    </el-main>

  </el-container>

</template>
<script>
  import Vue from 'vue'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  export default {
    components: {ElButton},
    data(){
      return{
         meettime:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
         meetplace:'nj',
         showed:true,
         trainingStatus:true,
         activeName: '1',
         trainShedule:[
           {
             date:'1-15',
             details:[{
               name: '财务基础',
               teacher:'某老师',
               time:'8:00-10:00',
               place:'第一教室',
               state:'已结束'
             },
               {
                 name: '案例分析',
                 teacher:'某老师',
                 time:'12:00-14:00',
                 place:'第一教室',
                 state:'进行中'
               },
               {
                 name: '实战演练',
                 teacher:'某老师',
                 time:'18:00-20:00',
                 place:'第一教室',
                 state:'未开始'
               }
             ]
           },
           {
             date:'1-16',
             details:[{
               name: '财务基础16',
               teacher:'某老师',
               time:'8:00-10:00',
               place:'第一教室',
               state:'已结束'
             },
               {
                 name: '案例分析16',
                 teacher:'某老师',
                 time:'12:00-14:00',
                 place:'第一教室',
                 state:'进行中'
               },
               {
                 name: '实战演练16',
                 teacher:'某老师',
                 time:'18:00-20:00',
                 place:'第一教室',
                 state:'未开始'
               }
             ]
           }

         ]
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
