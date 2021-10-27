<template>
  <div class="">
    <ej-split split="300px" mode="horizonta">
      <template #left>
        <div class="mr-5">
          <base-tree :type="MenuManagementEnum.Unstructured" />
        </div>
      </template>
      <template #right>
        <!-- <list /> -->
        <router-view />
      </template>
    </ej-split>
  </div>
</template>

<script setup lang="ts">
  // import {ref} from 'vue'
  import {EjSplit} from '@ej/ui'
  import BaseTree from '~/components/base/tree.vue'
  import {MenuManagementEnum} from '~~/codegen/index'
  // import list from './list.vue'
  // import useApolloClient from '~/utils/apollo-client'
  // import QUERY_MENU from '~/graphql/query_menu.gql'

  // useApolloClient('da').query({
  //   query: QUERY_MENU,
  //   variables: {
  //     menuType: 'BASE',
  //   },
  // }).then((res: any) => {
  //   console.log(res)
  // })
</script>
