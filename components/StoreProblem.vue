<template lang="html">
  <draggable class="drag-area small-font" v-model="problems" :options="{group:'drag'}" >
      <div class="problem-btn" v-for="problem in problems" :key="problem.id">{{problem.name}}
        <el-button class="control-btn" type="primary" icon="minus" @click="removeProblem(problem)"></el-button>
      </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import { mapMutations } from 'vuex';

export default {
  computed: {
    problems: {
      get() {
        return this.$store.state.problems;
      },
      set(value) {
        this.$store.commit('updateProblems', value);
      },
    },
  },
  components: {
    draggable,
  },
  methods: {
    ...mapMutations([
      'removeProblem',
    ]),
  },
};
</script>

<style lang="css">
.box{
  display: flex;
  flex-wrap: wrap;
}

.label{
  width:50%;
}

.el-button+.el-button{
  margin: 0px;
}

.problem-btn{
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 2rem;
  background-color: #ffffff;
  cursor:pointer;
  position: relative;
}

.problem-btn .control-btn:hover{
  background-color: #f26d6b;
}

</style>
