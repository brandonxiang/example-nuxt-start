<template lang="html">
  <div class="bg-gray">
    <div class="ctrl-head">
      <span>标签页</span>
      <span>&#183;</span>
      <span>{{labelCount}}</span>
    </div>
    <div v-if="getIdle">
    </div>
    <store-label v-else></store-label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StoreLabel from './StoreLabel';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'getIdle',
      'labelCount',
    ]),
  },
  components: {
    StoreLabel,
  },
};
</script>

<style lang="css">
</style>
