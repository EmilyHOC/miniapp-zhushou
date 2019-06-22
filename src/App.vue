<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view :width= "width" :height= "height"></router-view>
  </div>
</template>

<script>
import Tab from "./components/tab/tab";
import MHeader from "./components/m-header/m-header";

export default {
  name: 'app',
  data() {
    return {
      width: {
        type: Number,
        default: 375
      },
      height: {
        type: Number,
        default: 667
      }
    }
  },
  created() {
    let myWidth = document.body.scrollWidth
    let myHeight = document.documentElement.clientHeight - 70
    this.width = myWidth
    this.height = myHeight
    console.log(myWidth,myHeight)
  },
  components: {
    MHeader,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;

}
</style>
