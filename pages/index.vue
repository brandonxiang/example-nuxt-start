<template>
  <div id="app">
    <care-header class="head"></care-header>
    <care-content class="main"></care-content>
  </div>
</template>

<script>
import CareHeader from '~components/CareHeader';
import CareContent from '~components/CareContent';

export default {
  components: {
    CareHeader,
    CareContent,
  },
};
</script>

<style>
html,body{
  margin:0;
  padding:0;
  background-color: #eeeeee;
}

.bg-gray{
  background-color: #eeeeee;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

.head{
  height:75px;
}

.main{
  position:absolute;
  top:75px;
  bottom:0;
  width: 100%;
}

.small-font{
  font-size:0.8rem;
}

.left-text{
  text-align: left;
}
</style>
