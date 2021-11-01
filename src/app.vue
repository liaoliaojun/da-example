<template>
  <el-config-provider :locale="locale">
    <ul class="flex ml-5 mt-3 theme-text">
      <router-link to="/" tag="li" class="mr-4">首页</router-link>
      <router-link to="/base" tag="li" class="mr-4">基础资产管理</router-link>
      <router-link to="/report" tag="li" class="mr-4">报表资产管理</router-link>
      <router-link to="/test" tag="li" class="mr-4">接口资产管理</router-link>

      <router-link to="/test" tag="li" class="mr-4">基础资产查询</router-link>
      <router-link to="/test" tag="li" class="mr-4">指标资产查询</router-link>
      <router-link to="/test" tag="li" class="mr-4">报表资产查询</router-link>
      <router-link to="/test" tag="li" class="mr-4">接口资产查询</router-link>
    </ul>
    <div class="p-4 flex flex-col flex-1">
      <router-view />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'

  let locale = zhCn
</script>

<style lang="postcss">
  #app {
    @apply flex flex-col min-h-screen;
  }
</style>
