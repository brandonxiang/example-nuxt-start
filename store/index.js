import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  limit: 8,
  idle: true,
  labels: [{
    name: '感冒',
    id: 1,
  }, {
    name: '腹泻',
    id: 2,
  }, {
    name: '睡眠',
    id: 3,
  }, {
    name: '妇科',
    id: 4,
  }, {
    name: '高热惊觉',
    id: 5,
  }, {
    name: '鼻炎',
    id: 6,
  }, {
    name: '新生儿疾病',
    id: 7,
  }, {
    name: '儿童科',
    id: 8,
  }, {
    name: '慢性',
    id: 9,
  }, {
    name: '急性',
    id: 10,
  }],
  problems: [],
};

const mutations = {
  openIdle(stat) {
    stat.idle = false;
  },
  closeIdle(stat) {
    stat.idle = true;
  },
  updateLabels(stat, value) {
    stat.labels = value;
  },
  updateProblems(stat, value) {
    stat.problems = value;
  },
  addProblem(stat, item) {
    const i = stat.labels.indexOf(item);
    stat.labels.splice(i, 1);
    stat.problems.push(item);
  },
  removeProblem(stat, item) {
    const i = stat.problems.indexOf(item);
    stat.problems.splice(i, 1);
    stat.labels.push(item);
  },
};

const getters = {
  getLimit: stat => stat.limit,
  getIdle: stat => stat.idle,
  getProblems: stat => stat.problems,
  labelCount: stat => stat.labels.length,
  problemCount: stat => stat.problems.length,
  totalCount: stat => stat.labels.length + stat.problems.length,
  underLimit: stat => stat.problems.length < stat.limit,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});
