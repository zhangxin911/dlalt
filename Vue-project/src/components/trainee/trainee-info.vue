<template>
  <el-container>
    <el-header class="t-center head-top">个人信息</el-header>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <img src="../../../build/logo.png">
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div>
          <ul>
            <li>姓名:{{userinfo.username}}</li>
            <li>手机:{{userinfo.mobile}}</li>
            <li>邮箱:{{userinfo.email}}</li>
            <li>所属机构:{{userinfo.organization}}</li>
            <li>部门/职务:{{userinfo.duties}}</li>
            <li>用户身份:{{userinfo.status}}</li>
            <li>兴趣标签<el-tag v-for="(item) in userinfo.interest">{{item}}</el-tag>
               <router-link to="trainee/interests-tab">标签选择</router-link>
            </li>
          </ul>
        </div>
      </el-card>
      <div>
        <el-button type="primary">返回主页</el-button>
      </div>
    </el-main>
  </el-container>

</template>
<script>

  export default {
    data(){
      return{
         userinfo:{
           username:'张大锤',
           mobile:'138138138138',
           email:'adc@163.com',
           organization:'机构',
           duties:'主管',
           status:'学员',
           interest:['办公效率','人力资源','人际沟通']
         }
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

</style>
