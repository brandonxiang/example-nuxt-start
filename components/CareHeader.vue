<template>
  <div class="bg-white">
    <div class="title">
      <img class="inline icon" src="../assets/head-icon.jpg">
      <div class="inline">
        <h2>{{head}}</h2>
      </div>
    </div>
    <div class="user">
    <img class="inline icon" src="../assets/user-icon.jpg">
    <span class="inline">{{user}}</span>
    <a class="inline exit" href="#">退出</a>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: '腾爱医生后台管理平台',
      user: '张强医疗集团',
    };
  },
};
</script>

<style>
.inline {
  display: inline-block;
  vertical-align: middle;
}

.title{
  float:left;
  padding-left: 10rem;
}

.icon{
  padding:10px;
}

.user{
  float: right;
  padding-right: 10rem;
}

.bg-white{
  background-color: white;
  overflow: hidden;
}

.exit{
  padding-left:2rem;
}

</style>
