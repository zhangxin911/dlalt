<template>
  <el-container>
    <el-header class="t-center head-top">标签选择</el-header>
    <el-main>
      <div>
      <div class="page-header">职业</div>
        <div>
          <el-checkbox v-for="(item) in career" v-bind:v-model="item.status" label="备选项1" border>
            {{item.name}}
          </el-checkbox>
        </div>

      </div>
      <div>
        <div class="page-header">学习</div>
        <div>
          <el-checkbox v-for="(item) in study" v-bind:v-model="item.status" label="备选项1" border>
            {{item.name}}
          </el-checkbox>
        </div>

      </div>
      <div>
        <p>注：最多选择三个标签</p>
      </div>
      <div>
        <el-button><router-link to="/trainee-info">取消</router-link></el-button><el-button>确定选择</el-button>
      </div>

    </el-main>
  </el-container>
</template>
<script>

  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

  export default{
    components: {ElButton},
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
  .page-header{
    border-bottom:1px solid rgba(0,0,0,0.1);
    text-align:left;
    text-indent:1.6em;
    padding:10px 0px;
    color:rgba(0,0,0,0.3);
  }
</style>
