<template>
  <el-container>
    <el-header class="t-center head-top">调研结果</el-header>
    <el-main>
       <el-row v-model="questionnaireItem">
          <p>{{questionnaireItem.title}}</p>
          <p>调研简介：{{questionnaireItem.introduce}}</p>
          <p>主办单位：{{questionnaireItem.institude}}</p>
          <p>{{questionnaireItem.type}}</p>
           <el-row v-for="(item) in questionnaireItem.question">
               <p>{{item.name}}</p>
             <p v-for="(val) in item.answer">
                {{val.content}}{{val.count}}
             </p>
           </el-row>

       </el-row>
       <el-row>
         <el-button type="primary">返回</el-button>
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
