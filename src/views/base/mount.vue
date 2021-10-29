<template>
  <div class="flex-auto ml-5">
    <ej-search 
      v-model:models="state"
      v-model:keyword="keyword"
      :keyword-props="{placeholder: '请输入内容'}"
      :immediate-search="true"
      :cm-props="{
        searchId: 'searchDemo',
      }"
      :hide-com-list="true"
      :hide-expand-button="true"
      :show-com-pop="true"
      :advanced="advanced"
      @search="handlerSearch"
    >
      <ej-texts v-model="state.cycle" :options="options.cycle" prop="cycle" label="数据层次" />
      <ej-texts v-model="state.type" :options="options.type" prop="type" label="业务主题" />
      <ej-texts v-model="state.type" :options="options.type" prop="type" label="业务系统" />
    </ej-search>

    <el-table border stripe highlight-current-row :data="tableData">
      <el-table-column type="selection" width="40" prop="select" />
      <el-table-column prop="name" label="所属系统" />
      <el-table-column prop="dataBaseName" label="数据库" />
      <el-table-column prop="name" label="英文名" />
      <el-table-column prop="name" label="中文名" />
      <el-table-column prop="mdsObjectTypeEnum" label="类型" />
      <el-table-column prop="primaryKey" label="主键" />
      <el-table-column prop="dbSourceType" label="数据库类型" />
      <el-table-column prop="createTm" label="创建时间" />
    </el-table>

    <div>
      <el-button size="small" @click="handlerConfirm">确定</el-button>
      <el-button size="small" @click="handlerCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useResult} from '@vue/apollo-composable'
  import {useRouter} from 'vue-router'
  import {useFindAllNotMountQuery} from '~~/codegen/mds'

  const router = useRouter()

  const keyword = ref('')
  const currentPage = ref(1)
  const limit = ref(30)
  const total = ref(0)
  const state = ref({
    cycle: '',
    type: '',
  })
  const getSearchInput = () => {
    return {
      nodeId: '',
      buzType: '',
      tenantId: '',
      datalevel: '',
      buztopic: '',
      buzsys: '',
      // 取数偏移
      offset: (currentPage.value - 1) * limit.value,
      // 取数范围
      limit: limit.value,
      // 搜索关键字
      keyWord: keyword.value,
    }
  }
  const {result, onResult} = useFindAllNotMountQuery({param: getSearchInput()}, {clientId: 'mdsClient'})

  const tableData: any = useResult(result, [], (res) => {
    return res.result.data.data
  })
  onResult((res) => {
    total.value = Number(res.data?.result?.data?.total ?? 0)
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

  const advanced = ref(true)

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
