<template>
  <div class="bg-white setting p-5">
    <ej-split split="300px" mode="horizontal">
      <template #left>
        <!-- <left-tree ref="leftTree"  @tree-click="treeClick" /> -->
      </template>
      <template #right>
        <div class="ml-2">
          <breadcrumb v-if="$route.name != 'setting-tech-catalog'" :breadData="breadData" />
          <router-view class="flex-1"/>
        </div>
      </template>
    </ej-split>
  </div>
</template>
<script setup lang="ts">
  import {defineComponent, ref} from 'vue'
  import {ElTabs, ElTabPane, ElTag, ElInput} from 'element-plus'
  import {Split as EjSplit,Loading as EjLoading,
  // @ts-ignore
  } from '@ej/ui'
  import LeftTree from '~/components/setting/tech-catalog/tree.vue'
  import Breadcrumb from '~/components/setting/tech-catalog/breadcrumb.vue'

  export default defineComponent({
    directives: {
      EjLoading,
    },
    components:{
      ElTabs,
      ElTabPane,
      ElTag,
      ElInput,
      EjSplit,
      LeftTree,
      Breadcrumb,
    },
    setup(_, {root}: any) {
      const breadData: object = ref([{
        id:0,
        name: '技术类目',
        url: '/setting/tech-catalog',
      }])

      const treeClick = (data: any) => {
        console.log(data)
        if(data.type === 'FOLDER')
          root.$router.push({name: 'setting-tech-catalog', query: {folderId: data.id,name: data.label}})
        else{
          root.$router.push({name: 'setting-tech-catalog-detail', query: {id: data.id, type: 'detail'}})
        }
      }

      return {
        breadData,
        treeClick,
      }
    },
  })
</script>
<style>
.setting {
  height: 100vh;
  flex: 1 1 0%;
  min-width: 1100px;
}
</style>