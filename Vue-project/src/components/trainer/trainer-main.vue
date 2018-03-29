<template>

  <el-container>
    <el-header class="t-center head-top">我要开课</el-header>
    <el-main>
       <el-row>
         <el-col :span="12"><div class="grid-content bg-purple"><router-link to="/trainer/start-class">快速开班</router-link></div></el-col>
         <el-col :span="12"><div class="grid-content bg-purple-light"><router-link to="/trainer/start-class">快速开会</router-link></div></el-col>
       </el-row>
       <el-row>
         <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/trainer/register">签到</router-link></div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple-light"><router-link to="/trainer/enroll">报名</router-link></div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple"><router-link to="/trainer/courseware">课件</router-link></div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple-light"><router-link to="/trainer/survey">调研</router-link></div></el-col>
       </el-row>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
          <span slot="label"><i class="el-icon-date"></i> 已开课程</span>
          <el-row v-for="(item) in courses">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <router-link to="/trainer/train-data"><img src="../../../build/logo.png" width="40" height="40">{{item.img}}</router-link>

              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
              <p>{{item.name}}</p>
              <p>{{item.type}}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                 {{item.qrCode}}
              </div>
            </el-col>
          </el-row>
          <el-row>
               <router-link to="#">查看更多</router-link>
          </el-row>

        </el-tab-pane>
        <el-tab-pane label="配置管理">
          <span slot="label"><i class="el-icon-date"></i> 已发布工具</span>
           <el-row v-for="(item) in tools">
             <el-col :span="16">
               <div class="grid-content bg-purple">
                 <p>{{item.title}}</p>
                 <p>{{item.type}}<span>{{item.time}}</span></p>
               </div>
             </el-col>

             <el-col :span="8">
               <div class="grid-content bg-purple">
                 {{item.img}}
               </div>
             </el-col>

           </el-row>
          <el-row>
            <router-link to="#">查看更多</router-link>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-row>
         <router-link to="././trainee-info">用户信息</router-link>
         <router-link to="#">数据</router-link>
      </el-row>
    </el-main>

  </el-container>

</template>
<script>
  import Vue from 'vue'
  export default {
    data(){
      return{
         courses:[
         {
           name:'培训1',
           type:'类型1',
           qrCode:'二维码1',
           img:'pic1'
         },{
             name:'培训2',
             type:'类型2',
             qrCode:'二维码2',
             img:'pic2'
         },{
             name:'培训3',
             type:'类型3',
             qrCode:'二维码3',
             img:'pic3'
         }
         ],
        tools:[
          {
            title:'主题1',
            type:'签到工具',
            time:new Date().getFullYear()+'-'+new Date().getMonth()+1+'-'+new Date().getDate(),
            img:'pic1'
          },
          {
            title:'主题2',
            type:'报名工具',
            time:new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
            img:'pic2'
          },
          {
            title:'主题3',
            type:'调研工具',
            time:new Date().getFullYear()+'-'+new Date().getMonth()+1+'-'+new Date().getDate(),
            img:'pic3'
          }
        ]

      }
    }
  }

</script>

<style scoped>

</style>
