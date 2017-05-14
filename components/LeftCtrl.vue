<template lang="html">
  <div class="bg-gray">
  <img src="../assets/tel-head.jpg" width="100%">
  <div class="tel-header">
    <i class="el-icon-arrow-left back-icon"></i>
    <span>团队主页</span>
  </div>
  <div class="tel-title">
    <el-button class="edit-icon" type="text" icon="edit">编辑</el-button>
    <img src="../assets/tel-icon.png">
    <h4>怡禾健康</h4>
    <p class="small-font left-text">中山大学孙逸仙纪念医院由广东中山大学属医院林峰谢汝石第六医胃肠道肿瘤的深医院林峰。</p>
  </div>
  <a href="javascript:void(0);" class="button center active" @click="openIdle">
    <span v-if="res.length===0"><i class="el-icon-plus plus-icon"></i>添加常见问题</span>
    <div class="res-problem small-font" v-else>
      <div class="res-title">常见问题</div>
      <div class="res-tap">
        <div v-for="problem in res">{{problem.name}}</div>
      </div>
    </div>
  </a>
  <a href="javascript:void(0);" class="button center">
    <span><i class="el-icon-plus plus-icon"></i>添加医生</span>
  </a>
  <a href="javascript:void(0);" class="button center">
    <span><i class="el-icon-plus plus-icon"></i>添加文章</span>
  </a>
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  props: ['res'],
  // data(){
  //   return {
  //     problems:[],
  //   }
  // },
  methods: {
    ...mapMutations([
      'openIdle',
    ]),
  },
  computed: {
    ...mapGetters([
      'getIdle',
      'getProblems',
      'problemCount',
    ]),
  },
  mounted() {
    // this.getNewProblem();
  },
};
</script>

<style lang="css">
.tel-header{
  background-color: #282b32;
  color:white;
  padding: 5px;
  margin-top: -6px;
}

.tel-title{
  background-color:#2371db;
  color:white;
  padding:1rem;
  position: relative;
}

.button{
  height:5.8rem;
  color: #2371db;
  text-decoration: none;
  position: relative;
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button:hover, .active{
  background-color: white;
  border: 0.2rem solid;
}

.back-icon{
  position: absolute;
  left: 1.5rem;
}

.plus-icon{
  margin:0.5rem;
}

.edit-icon{
  position: absolute;
  top:0.2rem;
  right: 0.8rem;
  color:white;
  font-size: 0.3rem;
}

.res-problem{
  text-align: left;
  color: #000000;
  width: 100%;
  height: 100%;
}

.res-title{
  padding: 4px 10px;
}

.res-tap div{
  display: inline-block;
  border:1px solid #eeeeee;
  border-radius:1rem;
  padding:0.1rem 0.8rem;
  margin:3px;
}
</style>
