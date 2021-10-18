<template>
  <h1 class="text-red-300">home2</h1>
  <ej-split split="300px" mode="horizonta">
    <template #left>
      left
    </template>
    <template #right>
      right
    </template>
  </ej-split>
</template>

<script setup lang="ts">
  import {useRoute} from 'vue-router'
  import {EjSplit} from '@ej/ui'

  // console.log(EjSplit)

  const route = useRoute()
  console.log(route.name)
</script>
