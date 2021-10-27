<template>
  <div class="da-base-view flex flex-1">
    <ej-split split="250px" :min="180" mode="horizonta" class="w-full">
      <template #left>
        <div class="pr-2">
          <base-tree :type="MenuManagementEnum.Base" />
        </div>
      </template>
      <template #right>
        <router-view />
      </template>
    </ej-split>
  </div>
</template>

<script setup lang="ts">
  import BaseTree from '~/components/base/tree.vue'
  import {MenuManagementEnum} from '~~/codegen/index'
</script>
