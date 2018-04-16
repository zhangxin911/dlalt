<template>

    <el-container>
      <el-header class="t-center head-top">
        <router-link to="/"><i class="el-icon-arrow-left icon-back"></i></router-link>日程表
      </el-header>
      <el-main>


        <div>
          <el-row :gutter="10" type="flex" align="middle">
            <el-col :span="4">
              <div>
                 <img src="../../../build/logo.png" width="50" height="50">
              </div>
            </el-col>
            <el-col :span="18">
              <div v-model="userInfo">
                <el-row v-for="(item,index) in userInfo">
                  <el-col class="el-col-12 list-item">{{item}}</el-col>

                </el-row>
              </div>
            </el-col>
            <el-col :span="2">

             <router-link :to="{name:'traineeInfo'}"><i class="el-icon-arrow-right "></i></router-link>
            </el-col>

          </el-row>
        </div>
        <div>
            一周日期
        </div>
        <!--有课程-->
        <div  v-show="isCoursed" v-model="meetInfo">
            <el-row class="meetinfo-box bb p10" :gutter="20"  v-for="(item,index) in meetInfo"  type="flex" align="middle">
                 <el-col :span="4" style="vertical-align: middle" >
                     <img src="../../../build/logo.png" width="50" height="50" >
                 </el-col>
                   <el-col :span="14">
                     <el-row>
                       <el-col class="meetList-item" v-for="(val) in item">{{val}}</el-col>
                     </el-row>
                   </el-col>
                 <el-col :span="6">
                   <router-link v-bind:to="item.url" class="meetList-view">查看详情</router-link>
                 </el-col>


            </el-row>
        </div>
        <!--无课程-->
        <div v-show="!isCoursed" >
          <div>
            今日无安排
          </div>
        <div>如果你是学霸</div>
        <div class="meetinfo-box  bb p10" :gutter="20"  v-for="(item,index) in recommend">

          <el-row>
            <el-col :span="8">
            <img src="../../../build/logo.png" width="50" height="50">
            </el-col>

            <el-col :span="16">
              <el-row>
                <el-col class="meetList-item" v-for="(val) in item">{{val}}</el-col>
              </el-row>
            </el-col>

          </el-row>


        </div>
      </div>


      </el-main>

    </el-container>

</template>
<script>
   import Vue from 'vue'
   export default {
     data(){
       return{
         isCoursed:true,
         userInfo:{
           userName:'学员姓名',
           userApart:'学员部门',
           userPhone:'学员号码'
         },
         meetInfo:{
           1:{
             meetName:'财务会议',
             time:'10:00',
             state:'已结束',
             url:'/offline-meeting'
           },
           2:{
             meetName:'安全会议',
             time:'14:00',
             state:'进行中',
             url:'/offline-meeting'
           },
           3:{
             meetName:'技能培训',
             time:'16:00',
             state:'未开始',
             url:'/offline-meeting'
           }
         },
         recommend:{
           1:{
             title:'培训标题培训标题',
             type:'培训类型',
             time:'培训时间'
           },
           2:{
             title:'会议标题会议标题',
             type:'会议类型',
             time:'会议时间'
           }
         }

       }
     }
   }

</script>

<style scoped>


  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }

  .meetinfo-box{
    display:flex;
    flex-flow: row;
    border:1px solid #DCDFE6;
    border-radius:4px;
    margin:10px 0px;
  }
  .list-item{
    height:30px;
    line-height:30px;
    text-align:left;
    /*padding:10px 0px;*/
    font-size:0.8em;
    text-indent:0.8em;
  }
  .meetList-item{
    padding:6px 0px;
    font-size:0.8em;
    text-align: left;
  }
  .meetList-view{
    color:#409EFF;
    font-size:0.6em;
  }
</style>
