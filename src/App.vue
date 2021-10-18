<template>
  {{count}}
  <img alt="Vue logo" src="./assets/logo.png" class="flex flex-1" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <router-view />
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  const count = ref(0)
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
