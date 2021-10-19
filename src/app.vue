<template>
  <ul class="flex ml-5 mt-3">
    <router-link to="/" tag="li" class="mr-4">首页</router-link>
    <router-link to="/base" tag="li" class="mr-4">基础资产</router-link>
    <router-link to="/test" tag="li" class="mr-4">指标资产</router-link>
    <router-link to="/test" tag="li" class="mr-4">非结构化资产</router-link>
    <router-link to="/test" tag="li" class="mr-4">资产查询</router-link>
  </ul>
  <div class="p-4 flex flex-col flex-1">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
  #app {
    @apply min-h-full flex flex-col;
  }
</style>
