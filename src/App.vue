<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Tab from './pages/tab';
  import MHeader from './pages/m-header/index';

  export default {
    name: 'App',
    components: {
      Tab,
      MHeader
    }
  }
</script>

<style lang="less" scoped>
  @import "common/less/variable";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
