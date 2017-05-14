<template lang="html">
  <draggable class="drag-area small-font" v-model="labels" :options="{group:'drag'}" :move="()=>underLimit">
    <div class="label-btn" v-for="label in labels" :key="label.id">
      <span>{{label.name}}</span>
      <el-button class="control-btn" type="primary" icon="plus" @click="addProblem(label)"></el-button>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'problemCount',
      'getLimit',
      'underLimit',
    ]),
    labels: {
      get() {
        return this.$store.state.labels;
      },
      set(value) {
        this.$store.commit('updateLabels', value);
      },
    },
  },
  components: {
    draggable,
  },
  methods: {
    ...mapMutations([
      'addProblem',
    ]),
  },
};
</script>

<style lang="css">

.label-btn{
  display: inline-block;
  width:40%;
  margin: 0.3rem;
  padding: 0.5rem;
  border-radius: 2rem;
  background-color: #ffffff;
  cursor:pointer;
  position: relative;
}

.el-button+.el-button{
  margin: 0px;
}

.label-btn .control-btn:hover{
  background-color: #a1c6f7;
}

</style>
