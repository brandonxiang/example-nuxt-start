<template>
  <div>
    <div class="bg-white content" >
      <el-breadcrumb class="breadcrumb" separator=">">
        <el-breadcrumb-item :to="{ path: '>' }">腾爱医生</el-breadcrumb-item>
        <el-breadcrumb-item>团队主页</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row class="row">
        <el-col :span="8"><left-ctrl :res="result" class="control"></left-ctrl></el-col>
        <el-col :span="8"><middle-ctrl class="control"></middle-ctrl></el-col>
        <el-col :span="8"><right-ctrl class="control"></right-ctrl></el-col>
      </el-row>
      <div class="foot">
        <el-button class="btn-publish" type="primary">发布</el-button>
        <el-button class="btn-preview">预览</el-button>
        <el-button class="btn-save" @click="onSave">保存</el-button>
      </div>
      <div id="errormsg" class="center" v-show="!underLimit">展示标签已满{{getLimit}}个</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import LeftCtrl from './LeftCtrl';
import MiddleCtrl from './MiddleCtrl';
import RightCtrl from './RightCtrl';

export default{
  data() {
    return {
      result: [],
    };
  },
  components: {
    LeftCtrl,
    MiddleCtrl,
    RightCtrl,
  },
  computed: {
    ...mapGetters([
      'getLimit',
      'underLimit',
    ]),
  },
  methods: {
    ...mapMutations([
      'closeIdle',
    ]),
    onSave() {
      this.closeIdle();
      this.result = this.deepCopy(this.$store.state.problems);
    },
    deepCopy(source) {
      const result = [];

      Object.keys(source).forEach((key) => {
        result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key];
      });
      return result;
    },
  },
};
</script>

<style>
.content{
  margin: 1rem 8rem;
}

.breadcrumb{
  padding: 1rem 1rem 1rem 3rem;
}

.row{
  margin:0 2rem;
}

.control{
  margin:0 1rem;
  height: 35rem;
  position:relative;
}

.drag-area{
  position:absolute;
  top:3rem;
  bottom: 0;
  left:0;
  right: 0;
  margin:0.5rem;
}

.foot{
  float:left;
  padding: 1rem 1rem 1rem 4rem;
}

.ctrl-head{
  display: flex;
  height:3rem;
  align-items: center;
  justify-content: flex-start;
  padding-left:1rem;
}

.btn-publish,.btn-preview{
  padding: 10px 3rem;
  margin:5px 20px;
}

.btn-publish{
  background: #428bef;
}

.btn-save.el-button{
  padding:10px 2rem;
  margin:0 0 0 5rem!important;
  font-size:0.8rem;
}

#errormsg{
  position:absolute;
  left:50%;
  top:50%;
  margin-left: -7.5rem;
  margin-top: -1.8rem;
  height: 3.6rem;
  width: 15rem;
  background-color: #5f5f5f;
  color:white;
  border-radius: 0.3rem;
}

.center.invisible{
  display: none;
}

.control-btn{
  position: absolute;
  right:3px;
  top:3px;
  border-radius: 2rem;
  padding: 8px;
  background-color: #d1d1d1;
  border: 0;
}
</style>
