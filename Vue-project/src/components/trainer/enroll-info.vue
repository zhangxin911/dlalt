<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer/train-data"><i class="el-icon-arrow-left icon-back"></i></router-link>
      学员信息</el-header>
    <el-main>
      <el-row class="mt1">
        <el-col :span="16"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="8"> <el-button type="primary">搜索</el-button></el-col>
      </el-row>
      <el-row v-for="(item) in userinfo"  class="mt1">
        <el-col :span="4" class="sub-title"><img v-bind:src="item.img" width="40" height="40"></el-col>
        <el-col :span="4" class="sub-title">{{item.name}}</el-col>
      </el-row>
      <el-row class="mt1">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      </el-row>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="100%"
        :before-close="handleClose">
        <el-row class="mt1">
        <el-col :span="24" class="t-left">用户姓名</el-col>
        </el-row>
        <el-row  class="mt1">
          <el-input placeholder="12342"></el-input>
        </el-row>
        <el-row  class="mt1">
          <el-col :span="24" class="t-left">用户所在单位</el-col>
        </el-row>
        <el-row  class="mt1">
          <el-input placeholder="12342"></el-input>
        </el-row>
        <el-row  class="mt1">
          <el-col :span="24" class="t-left">用户手机号码</el-col>
        </el-row>
        <el-row  class="mt1">
          <el-input placeholder="12342"></el-input>
        </el-row>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data(){
      return {
        input: '',
        dialogVisible: false,
        userinfo:[
          {
            img:'../build/logo.png',
            name:'用户名'
          },{
            img:'../../../build/logo.png',
            name:'用户名'
          },{
            img:'../../../build/logo.png',
            name:'用户名'
          }
        ]
      }
    },
   methods: {
     handleClose(done) {
       this.$confirm('确认关闭？')
         .then(_ => {
           done();
         })
         .catch(_ => {});
     }
   }
  }
</script>
<style>
  .sub-title{
    font-size:0.8em;
    text-align: left;
    color:#909399;
  }
  .t-left{
    text-align:left;
  }
</style>
