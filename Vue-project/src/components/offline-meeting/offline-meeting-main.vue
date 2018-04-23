<template>

  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainee"><i class="el-icon-arrow-left icon-back"></i></router-link>培训/会议详情
    </el-header>
    <el-main>

      <el-row>培训标题</el-row>

      <el-row><img src="../../../build/logo.png"></el-row>
      <el-row class="meetTime mt1">
        <el-col :span="6">培训时间：</el-col><el-col :span="18" v-model="meetTime">{{meetTime}}</el-col>
      </el-row>
      <el-row class="meetPlace mt1">
        <el-col :span="6">培训地点：</el-col><el-col :span="18" v-model="meetPlace">{{meetPlace}}</el-col>
      </el-row>
      <el-row class="view-more">
        <p v-on:click="showed=!showed">展开更多+</p>
      </el-row>
      <el-row v-show="showed">
         <el-row class="tab-title">
            <div class="training-date" v-on:click="trainingStatus=true">培训日程</div>
            <div class="training-data" v-on:click="trainingStatus=false">培训资料</div>
         </el-row>
        <el-row class="training-date-tab" v-if="trainingStatus===true">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(item) in trainShedule"  v-model="trainShedule" v-bind:title="item.date" v-bind:name="item.index">
              <el-row v-for="(val) in item.details">
                 <el-row class="mt1" >
                 <el-col :span="8" class="trainShedule-title">{{val.name}}</el-col>
                 <el-col :span="8" class="trainShedule-title">{{val.teacher}}</el-col>
                 <el-col :span="8" class="trainShedule-title">{{val.state}}</el-col>
                 </el-row>
                <el-row >
                <el-col  :span="8" class="trainShedule-content">{{val.time}}</el-col>
                <el-col  :span="8" class="trainShedule-content">{{val.place}}</el-col>

               </el-row>
              </el-row>
            </el-collapse-item>

          </el-collapse>
          <el-row class="mt1">
            <el-button type="primary"><router-link :to="{name:'enrollInfo'}">报名</router-link></el-button>
          </el-row>
        </el-row>

        <el-row class="training-data-tab" v-else="trainingStatus===false">

           <el-row class="mt1">
             <el-col :span="14" class="trainingList-title">培训介绍</el-col>
           </el-row>
           <el-row class="mt1">
             <el-col :span="24" class="trainingList-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin elit. Aenean euismod bibendum laoreet. Proin</el-col>
           </el-row>
           <el-row class="mt1">
             <el-col :span="14" class="trainingList-title">培训须知和安排</el-col>
           </el-row>
          <el-row class="mt1">
            <el-col :span="24" class="trainingList-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin elit. Aenean euismod bibendum laoreet. Proin
            </el-col>
           </el-row>

           <el-row class="mt1">
             <el-button type="primary">请假</el-button>
             <el-button type="primary"><router-link to="/offline-meeting-rate">评价</router-link></el-button>
           </el-row>
        </el-row>
      </el-row>
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
         meetTime:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
         meetPlace:'nj',
         showed:true,
         trainingStatus:true,
         activeName: '1',
         trainShedule:[
           {
             date:'1-15',
             index:'1',
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
             index:'2',
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
  .meetTime,.meetPlace{
    font-size:0.8em;
  }
 .trainingList-title{
   font-size:0.8em;
   text-align: left;
   color:#606266;
 }
 .trainingList-content{
   font-size:0.6em;
   text-align: left;
   color:#606266;
 }
  .trainShedule-title{
    font-size:1em;
    color:#606266;
  }
  .trainShedule-content{
    font-size:0.8em;
    color:#909399;
  }
</style>
