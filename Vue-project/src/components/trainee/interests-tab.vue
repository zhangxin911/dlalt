<template>
  <el-container>
    <el-header class="t-center head-top">
      <router-link to="/trainee-info"><i class="el-icon-arrow-left icon-back"></i></router-link>标签选择
    </el-header>
    <el-main>
      <el-row>
      <el-row class="page-header">职业</el-row>
        <el-row v-model="career">
          <el-checkbox v-for="(item) in career" v-bind:v-model="item.status" label="职业" border class="mt1">
            {{item.name}}
          </el-checkbox>
        </el-row>

      </el-row>
      <el-row>
        <el-row class="page-header">学习</el-row>
        <el-row v-model="study">
          <el-checkbox v-for="(item) in study" v-bind:v-model="item.status" label="学习" border class="mt1">
            {{item.name}}
          </el-checkbox>
        </el-row>

      </el-row>
      <el-row class="mt1 explain">
        注：最多选择三个标签
      </el-row>
      <el-row class="mt1">
        <el-button><router-link to="/trainee-info">取消</router-link></el-button>
        <el-button type="primary" v-on:click="changeInterest"><router-link to="/trainee-info" >确定选择</router-link></el-button>
      </el-row>

    </el-main>
  </el-container>
</template>
<script>

  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import ElRow from "element-ui/packages/row/src/row";
  import store from '../../vuex/store'
  export default{
    components: {
      ElRow,
      ElButton
    },
    data(){
      return{
         career:[
           {
             name:'办公效率',
             status:true
           },
           {
             name:'求职应聘',
             status:true
           },
           {
             name:'人际沟通',
             status:true
           },{
             name:'职业考证',
             status:false
           },{
             name:'创业能力',
             status:false
           },{
             name:'人力资源',
             status:false
           },{
             name:'项目管理',
             status:false
           },{
             name:'市场营销',
             status:false
           }
         ],
         study:[
           {
             name:'大学',
             status:true
           },
           {
             name:'小学',
             status:true
           },{
             name:'初中',
             status:true
           },{
             name:'高中',
             status:true
           }
         ]
      }
    },
    methods:{
      changeInterest(){
        let labels=Array.from(document.querySelectorAll('.is-checked .el-checkbox__label'));
        let newLabels=new Set();
         labels.map(function(item){
           newLabels.add(item.innerText);
         });
         store.commit('changeUserInterest',newLabels);
      }
    }
  }

</script>

<style scoped>

  .page-header{
    border-bottom:1px solid rgba(0,0,0,0.1);
    text-align:left;
    text-indent:1.6em;
    padding:10px 0px;
    color:rgba(0,0,0,0.3);
  }
  .explain{
    font-size:0.4em;
    color:rgba(0,0,0,0.4);
  }
</style>
