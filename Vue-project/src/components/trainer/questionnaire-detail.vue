<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/train-data/questionnaire"><i class="el-icon-arrow-left icon-back"></i></router-link>调研结果</el-header>
    <el-main>
       <el-row v-model="questionnaireItem">
         <el-row class="main-title mt1">
           <el-col>{{questionnaireItem.title}}</el-col>
         </el-row>
         <el-row class="sub-title mt1">
           <el-col :span="6">调研简介：</el-col>
           <el-col :span="18">{{questionnaireItem.introduce}}</el-col>
         </el-row>
         <el-row class="sub-title mt1">
          <el-col :span="6">主办单位：</el-col>
           <el-col :span="18">{{questionnaireItem.institude}}</el-col>
         </el-row>
         <el-row class="main-title mt1">
          <el-col>{{questionnaireItem.type}}</el-col>
         </el-row>
           <el-row class="mt1 sub-title t-left" v-for="(item) in questionnaireItem.question">
             <el-row>
               <el-col :span="6">{{item.name}}</el-col>
             </el-row>
           <el-row>
              <el-col class="mt1 t-left sub-title"  :span="24"  v-for="(val) in item.answer">
               {{val.content}}{{val.count}}
             </el-col>
           </el-row>
           </el-row>

       </el-row>
       <el-row>
         <el-button type="primary"><router-link to="/train-data/questionnaire">返回</router-link></el-button>
       </el-row>
    </el-main>
  </el-container>

</template>
<script>
  export default {
    data(){
      return{
        questionnaireItem:{
          title:'调研主题调研主题',
          introduce:'Lorem ipsum dolor sit amet,' +
          ' consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et',
          institude:'中海油北京人力',
          type:'培训讲师',
          question:[
            {
              name:'题目题目1',
              answer:[
                {
                  count:15,
                  content:'A.选项1'
                },{
                  count:10,
                  content:'B.选项2'
                },{

                  count:5,
                  content:'C.选项3'

                },{
                  count:1,
                  content:'D.选项4'
                }
              ]
            },{
              name:'题目题目2',
              answer:[
                {
                  count:15,
                  content:'A.选项1'
                },{
                  count:10,
                  content:'B.选项2'
                },{

                  count:5,
                  content:'C.选项3'

                },{
                  count:1,
                  content:'D.选项4'
                }
              ]
            }
          ]

        }
      }
    }
  }
</script>
<style>
  .main-title{
    font-size:1.2em;
    color:#606266;
  }
  .sub-title{
    font-size:0.8em;
    text-align: left;
    color:#909399;
  }
  .t-left{
    text-align:left;
  }
</style>
