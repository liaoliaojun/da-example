<template>
  <el-config-provider :locale="locale">
    <ul class="flex ml-5 theme-text text-xl whitespace-nowrap">
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
      <el-breadcrumb
        v-if="breadcrumbList.length"
        separator-class="el-icon-arrow-right"
        class="text-base"
        style="height: 36px; padding-top: 11px; min-height: 36px"
      >
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbList"
          :key="index"
        >
          <a v-if="index < breadcrumbList.length - 1" :href="item.path">{{
            item.label
          }}</a>
          <template v-else>{{ item.label }}</template>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <router-view />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  // import {ArrowRight} from '@element-plus/icons'
  import useBreadcrumb from '~/hooks/breadcrumb'

  let locale = zhCn
  const {breadcrumbList} = useBreadcrumb()
</script>

<style lang="postcss">
  #app {
    @apply flex flex-col min-h-screen;
  }
</style>
