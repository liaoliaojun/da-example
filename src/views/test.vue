<template>
  <h1 class="text-red-300">home2</h1>
  <div style="height: 50vh;">
    <ej-split split="300px" mode="horizonta">
      <template #left>
        left
      </template>
      <template #right>
        right
      </template>
    </ej-split>
  </div>
</template>

<script setup lang="ts">
  import {useRoute} from 'vue-router'

  const route = useRoute()
  console.log(route.name)
</script>
