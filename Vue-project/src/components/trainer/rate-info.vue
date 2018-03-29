<template>
  <el-container>
    <el-header class="t-center head-top">评价信息</el-header>
    <el-main>
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="(item) in rateData"  v-bind:label="item.title" v-bind:name="item.acName">
             <el-row v-for="(val) in item.content">
               <el-col :span="4">{{val.user}}</el-col>
               <el-col :span="20"><el-rate
                 v-model="val.rate"
                 disabled
                 show-score
                 text-color="#ff9900"
                 v-bind:score-template="val.rate">
               </el-rate>
               </el-col>
               <el-col :span="24">{{val.comment}}</el-col>
               <el-col :span="24">{{val.time}}</el-col>
             </el-row>
        </el-tab-pane>
        <el-row>
          <el-button><router-link to="#">提醒评价</router-link></el-button>
          <el-button type="primary" ><router-link to="/trainer/train-data">返回</router-link></el-button>
        </el-row>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data(){
      return {
        input: '',
        dialogVisible: false,
        activeName:'first',
        rateData:[
          {
             title:'课程管理',
             acName:'first',
             content:[
               {
                 user:'用户1',
                 rate:'4',
                 comment:'13131232421hfqwi8frqw78rqwr8',
                 time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
               },
               {
                 user:'用户11',
                 rate:'4',
                 comment:'13131232421hfqwi8frqw78rqwr8',
                 time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
               },
               {
                 user:'用户111',
                 rate:'4',
                 comment:'13131232421hfqwi8frqw78rqwr8',
                 time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
               }
             ]
          },{
            title:'课程管理',
            acName:'second',
            content:[
              {
                user:'用户2',
                rate:'3',
                comment:'13131232421hfqwi8frqw78rqwr8',
                time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
              },
              {
                user:'用户22',
                rate:'4',
                comment:'13131232421hfqwi8frqw78rqwr8',
                time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
              },
              {
                user:'用户222',
                rate:'4',
                comment:'13131232421hfqwi8frqw78rqwr8',
                time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
              }
            ]
          },{
            title:'课程管理',
            acName:'third',
            content:[
              {
                user:'用户3',
                rate:'4',
                comment:'13131232421hfqwi8frqw78rqwr8',
                time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
              },
              {
                user:'用户33',
                rate:'4',
                comment:'13131232421hfqwi8frqw78rqwr8',
                time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
              },
              {
                user:'用户333',
                rate:'4',
                comment:'13131232421hfqwi8frqw78rqwr8',
                time:new Date().getFullYear()+new Date().getMonth()+new Date().getDate()
              }
            ]
          }
        ]
      }
    },

  }
</script>
