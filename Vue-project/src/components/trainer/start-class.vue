<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainer"><i class="el-icon-arrow-left icon-back"></i></router-link>
      快速开班</el-header>
    <el-main>
      <el-row>
        <img src="../../../build/logo.png">
        <p>点击图片可更换海报</p>
      </el-row>

      <el-form ref="form" label-width="80px">
         <el-form-item label="会议标题">
           <el-input placeholder="请输入内容"></el-input>
         </el-form-item>
        <el-form-item label="时间跨度">
          <el-col :span="11">
            <el-date-picker type="fixed-time" placeholder="选择时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>

      </el-form>
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
      <el-row class="mt1">
        <el-button type="primary" v-on:click="open2">快捷开班</el-button>
      </el-row>

    </el-main>
  </el-container>

</template>
<script>
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form.vue";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";

  export default {
    components: {
      ElFormItem,
      ElForm},
    data(){
      return{
        form:{
          date1: '',
          date2: ''
        },
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
