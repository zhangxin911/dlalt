<template>

    <el-container>
      <el-header class="t-center head-top">日程表</el-header>
      <el-main>


        <div style="overflow:hidden">
          <el-row :gutter="10">
            <el-col :xs="16" :sm="12" :md="8" :lg="6" :xl="2">
              <div class="grid-content bg-purple">
                 <img src="../../../build/logo.png">
              </div>
            </el-col>
            <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="22">
              <div class="grid-content bg-purple-light">
                <el-row v-for="(item,index) in userinfo">
                  <!--<div v-for="o in data" :key="o" class="text item">-->
                    <!---->
                  <!--</div>-->
                  <el-col class="el-col-12">{{item}}</el-col>

                </el-row>
              </div>
            </el-col>

          </el-row>
        </div>
        <div>
            一周日期
        </div>
        <!--有课程-->
        <div  v-show="isCoursed">
        <div class="meetinfo-box"   v-for="(item,index) in meetinfo">
                 <div>
                     <img src="../../../build/logo.png">
                 </div>
                   <div>
                     <dl>
                       <li v-for="(liItem) in item">{{liItem}}</li>
                     </dl>
                   </div>
                 <div>
                   <router-link v-bind:to="item.url">查看详情</router-link>
                 </div>


            </div>
        </div>
        <!--无课程-->
        <div v-show="!isCoursed" >
          <div>
            今日无安排
          </div>
        <div>如果你是学霸</div>
        <div class="meetinfo-box"  v-for="(item,index) in recommend">

          <div>
            <img src="../../../build/logo.png">
          </div>

          <div>
            <dl>
              <li v-for="(liItem) in item">{{liItem}}</li>
            </dl>

          </div>
          <div>
            <router-link v-bind:to="item.url">查看详情</router-link>
          </div>


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
         isCoursed:false,
         userinfo:{
           username:'学员姓名',
           userapart:'学员部门',
           userphone:'学员号码'
         },
         meetinfo:{
           1:{
             meetname:'财务会议',
             time:'10:00',
             state:'已结束',
             url:'#'
           },
           2:{
             meetname:'安全会议',
             time:'14:00',
             state:'进行中',
             url:'#'
           },
           3:{
             meetname:'技能培训',
             time:'16:00',
             state:'未开始',
             url:'#'
           }
         },
         recommend:{
           1:{
             title:'培训标题',
             type:'培训类型',
             time:'培训时间'
           },
           2:{
             title:'会议标题',
             type:'会议类型',
             time:'会议时间'
           }
         }

       }
     }
   }

</script>

<style scoped>
  .foot-guide{
    background:#fff;
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    display:flex;
    border-top:1px solid rgba(0,0,0,0.4);
  }


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
  .foot-guide-item{
    width:50%;
  }
  .el-row{
    width:100%;
    height:60px;
    line-height:60px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .meetinfo-box{
    display:flex;
    flex-flow: row;
  }
  .meetinfo-img{

  }
  ul,li{
    list-style-type: none;
  }
</style>
