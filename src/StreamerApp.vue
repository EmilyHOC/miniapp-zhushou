<template>
  <div id="streamerApp">
    <img alt="Vue logo" src="./assets/img/icon.png">
    <HelloWorld msg="Welcome to Your Vue.js Ext App"/>
    <h2>Streamer side</h2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'streamerApp',
  components: {
    HelloWorld
  }
}
</script>

<style>
#streamerApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
