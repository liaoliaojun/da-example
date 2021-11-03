<template>
  <div v-loading="loading" class="flex flex-col ml-5 h-full pb-12 relative">
    <ej-search 
      v-model:models="state"
      v-model:keyword="keyword"
      :keyword-props="{placeholder: '请输入内容'}"
      :immediate-search="true"
      :hide-com-list="true"
      :default-expand-list="false"
      label-suffix="："
      @search="handlerSearch"
    >
      <ej-texts v-model="state.cycle" :options="options.cycle" prop="cycle" label="周期" />
      <ej-texts v-model="state.type" :options="options.type" prop="type" label="类型" />
    </ej-search>

    <div class="flex-1">
      <el-table border stripe highlight-current-row :data="tableData" height="100%">
        <el-table-column type="selection" width="40" prop="select" />
        <el-table-column prop="name" label="报表名称" />
        <el-table-column prop="date" label="周期" />
        <el-table-column prop="name" label="类型" />
        <el-table-column prop="name" label="年度下载次数" />
        <el-table-column prop="name" label="备注" />
        <el-table-column prop="name" label="使用方" />
      </el-table>
      <div class="flex justify-end mt-2">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :total="total"
          :page-size="limit"
          v-model:current-page="currentPage"
          @current-change="changePage"
        />
      </div>

      <div class="text-center w-full absolute bottom-0">
        <el-button type="primary" @click="handlerConfirm">确定</el-button>
        <el-button type="primary" plain @click="handlerCancel">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useRoute, useRouter} from 'vue-router'
  import {useResult} from '@vue/apollo-composable'
  import {useListReportMetadatasQuery} from '~~/codegen/index'
  const route = useRoute()
  const router = useRouter()
  const state = ref({
    cycle: '',
    type: '',
  })
  const keyword = ref('')
  const currentPage = ref(1)
  const limit = ref(30)
  const total = ref(0)
  const changePage = () => {
    refetch({input: getSearchInput()})
  }
  const getSearchInput = () => {
    return {
      // 取数偏移
      offset: (currentPage.value - 1) * limit.value,
      // 取数范围
      limit: limit.value,
      // 搜索关键字
      name: keyword.value,
      // 使用状态
      cycle: state.value.cycle,
      // 审核状态
      type: state.value.type,
      // 目录id
      directoryId: route.query?.id?.toString() ?? '',
    }
  }

  const {loading, result, onResult, refetch} = useListReportMetadatasQuery({
    input: getSearchInput(),
  })

  onResult((res) => {
    total.value = res.data.result?.total ?? 0
  })
  const tableData: any = useResult(result, [], () =>{
    return []
  })

  const options = {
    cycle: [
      {value: '1', label: '每日'},
      {value: '2', label: '每月'},
      {value: '3', label: '每季'},
      {value: '4', label: '每半年'},
      {value: '5', label: '每年'},
    ],
    type: [
      {value: '1', label: 'POS'},
      {value: '2', label: 'ACCOUNT'},
      {value: '3', label: 'DEVELEP'},
      {value: '4', label: 'FINANCE'},
    ],
  }

  // const {query: controlAssets} = useMountMetadataQuery()
  const handlerSearch = (params: any, type: any) => {
    console.log(params, type)
  }
  const handlerConfirm = () => {
    router.back()
  }
  const handlerCancel = () => {
    router.back()
  }
</script>
