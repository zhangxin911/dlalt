<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainee"><i class="el-icon-arrow-left icon-back"></i></router-link>个人信息</el-header>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <img src="../../../build/logo.png">
          <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <div>
          <el-form ref="form" v-model="userInfo" label-width="80px">
            <el-form-item label="姓名">
              {{userInfo.username}}
            </el-form-item>
            <el-form-item label="手机">
              {{userInfo.mobile}}
              {{userInfo.mobile}}
            </el-form-item>
            <el-form-item label="邮箱">
              {{userInfo.email}}
            </el-form-item>
            <el-form-item label="所属机构">
              {{userInfo.organization}}
            </el-form-item>
            <el-form-item label="部门/职务">
              {{userInfo.duties}}
            </el-form-item>
            <el-form-item label="用户身份">
              {{userInfo.status}}
            </el-form-item>
            <el-form-item label="兴趣标签" >
              <el-tag style="margin:0px 2px" size="medium" v-for="(item) in userInfo.interest">{{item}}</el-tag>
            </el-form-item>

            <el-row>
              <router-link to="trainee/interests-tab" class="interests-choose">标签选择</router-link>
            </el-row>

          </el-form>
        </div>


      </el-card>
      <div class="mt1">
        <el-button type="primary"><router-link to="/trainee">返回主页</router-link></el-button>
      </div>
    </el-main>
  </el-container>

</template>
<script>
  import store from '../../vuex/store'
  export default {
    data(){
      return{
         userInfo:{
           username:'张大锤',
           mobile:'138138138138',
           email:'adc@163.com',
           organization:'机构',
           duties:'主管',
           status:'学员',
          // interest:['办公效率','人力资源','人际沟通']
           interest:store.state.userInterest
         }
      }
    }
  }

</script>
<style scoped="">
.interests-choose{
  font-size:0.6em;
  color:#67C23A;
  text-decoration: underline;
}

</style>
