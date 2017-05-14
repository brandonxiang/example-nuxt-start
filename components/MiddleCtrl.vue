<template lang="html">
<div class="bg-gray">
  <div class="ctrl-head">
    <span>主页显示常见问题</span>
    <span> &#183; </span>
    <span>{{problemCount}}/{{getLimit}}</span>
  </div>
  <div v-if="getIdle" class="center tips">
    <img src="../assets/panel.png">
    <p class="small-font left-text">{{tips}}</p>
  </div>
  <store-problem v-else></store-problem>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import StoreProblem from './StoreProblem';


export default {
  data() {
    return {
      tips: '从右侧点选或拖动您需要在主页呈现的常见问题，该标签内的医生会自动匹配。（最多可添加8个）',
    };
  },
  computed: {
    ...mapGetters([
      'getIdle',
      'problemCount',
      'getLimit',
    ]),
  },
  components: {
    StoreProblem,
  },
};
</script>

<style lang="css">
.tips{
  padding: 5rem 2rem;
}
</style>
