<template>
  <el-container>
    <el-header class="t-center head-top">我要开课</el-header>
    <el-main>
      <el-row>
        <img src="../../../build/logo.png">
        <p>点击图片可更换海报</p>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content bg-purple">
            会议标题
        </div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div></el-col>

      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content bg-purple">
          时间跨度
        </div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple">
          <el-col :span="10"><el-input v-model="input" placeholder="开始时间"></el-input></el-col>
          <el-col :span="4">至</el-col>
          <el-col :span="10"> <el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
        </div>
        </el-col>

      </el-row>
      <el-row>
        添加日程+
      </el-row>
     <el-row>
       <el-tag>中海油北京人力xx大楼xx教室1</el-tag>
       <el-tag type="success">中海油北京人力xx大楼xx教室2</el-tag>
       <el-tag type="info">中海油北京人力xx大楼xx教室3</el-tag>
       <el-tag type="warning">中海油北京人力xx大楼xx教室4</el-tag>
       <el-tag type="danger">中海油北京人力xx大楼xx教室5</el-tag>
     </el-row>
      <el-row>
        添加参与人员+
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row>
        <el-button type="primary" v-on:click="open2">快捷开班</el-button>
      </el-row>

    </el-main>
  </el-container>

</template>
<script>
  export default {
    data(){
      return{
        input:'',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      open2() {
        this.$confirm('是否快捷开班, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url=window.location.href;
          let loc = url.substring(url.lastIndexOf('/')+1, url.length);
          let newUrl=url.replace(loc,'start-success');
          window.location.href=newUrl;
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
