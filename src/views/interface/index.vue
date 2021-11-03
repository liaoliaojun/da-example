<template>
  <div class="da-interface-view flex flex-col flex-1">
    <ej-split split="220px" :min="160" mode="horizonta" class="w-full flex-1">
      <template #left>
        <div class="pr-2" :class="{'modal': routeName === 'BaseMount'}">
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
  import {computed} from 'vue'
  import {useRoute} from 'vue-router'
  import BaseTree from '~/components/base/tree.vue'
  import {MenuManagementEnum} from '~~/codegen/index'

  const route = useRoute()
  const routeName = computed(() => route.name)
</script>

<style lang="postcss">
  .da-interface-view .modal {
    @apply relative;
  
    &::after {
      content: '';
      @apply absolute w-full h-full cursor-not-allowed;
      top: 0;
      left: 0;
      background-color: transparent;
      z-index: 2;
    }
  }
</style>
