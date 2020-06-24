<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import tab from './pages/tab.vue';
  export default {
    name: 'App',
    components: {
      tab,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
