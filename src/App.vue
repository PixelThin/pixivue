<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p-section>I'n in the pix-section</p-section>
    <p-error></p-error>
    <p-split></p-split>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { PSection, PError, PSplitSection, PCountrySelect } from '@/lib'
export default {
  name: 'App',
  components: {
    HelloWorld,
    PSection, PError, PSplitSection, PCountrySelect
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
