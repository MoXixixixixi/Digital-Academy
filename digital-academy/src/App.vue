<template>
  <div id="app">
    <v-header></v-header>
    <entireUnity />
  </div>
</template>

<script>
import entireUnity from './components/entireUnity.vue'
import header from './components/header.vue'

export default {
  name: 'App',
  components: {
    'v-header': header,
    entireUnity,
  }
}
</script>

<style>
#app {
  background-color: #f3f5f4 ;
}
</style>
