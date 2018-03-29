<template>
  <el-container>
    <el-header class="t-center head-top">学员信息</el-header>
    <el-main>
      <el-row>
        <el-col :span="16"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        <el-col :span="8"> <el-button type="primary">搜索</el-button></el-col>
      </el-row>
      <el-row v-for="(item) in userinfo">
        <el-col :span="4"><img v-bind:src="item.img" width="40" height="40"></el-col>
        <el-col :span="4">{{item.name}}</el-col>
      </el-row>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>


      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-row>
        <el-col :span="4">用户姓名</el-col>
        </el-row>
        <el-row>
          <el-input placeholder="12342"></el-input>
        </el-row>
        <el-row>
          <el-col :span="4">用户所在单位</el-col>
        </el-row>
        <el-row>
          <el-input placeholder="12342"></el-input>
        </el-row>
        <el-row>
          <el-col :span="4">用户手机号码</el-col>
        </el-row>
        <el-row>
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
