<template>
  <div class="flex-auto ml-5">
    <!-- <ej-search 
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
    > -->
    <ej-search 
      v-model:models="state"
      :immediate-search="true"
      :cm-props="{
        searchId: 'searchDemo',
      }"
      :hide-com-list="true"
      :hide-expand-button="true"
      :show-com-pop="true"
      :advanced="advanced"
      label-suffix="："
      @search="handlerSearch"
    >
      <template #input>
        <ej-search-input v-model="keyword" clearable width="300" placeholder="请输入内容" maxlength="128" class="mr-1" />
        <el-button size="small" type="primary" @click="resetSearch">重置</el-button>
      </template>
      <ej-radio v-model="state.useStatus" :options="options.useStatus" prop="useStatus" label="使用状态" />
      <ej-texts v-model="state.reviewStatus" :options="options.reviewStatus" prop="reviewStatus" label="审核状态" />
    </ej-search>
    <div class="flex flex-row-reverse mb-4">
      <el-button size="small" style="margin-left: 10px;" @click="handlerDisable">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>停用</span>
      </el-button>
      <el-button size="small" @click="handlerEnable">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>启用</span>
      </el-button>
      <el-button size="small" @click="handlerDelete">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>删除</span>
      </el-button>
      <el-button size="small" @click="handlerMount">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>挂载</span>
      </el-button>
    </div>

    <el-table border stripe highlight-current-row :data="tableData" @selection-change="handlerSelectionChange">
      <el-table-column type="selection" width="40" prop="select" />
      <el-table-column prop="name" label="资产名称" />
      <el-table-column prop="date" label="资产类型" />
      <el-table-column prop="name" label="使用方/责任部门" />
      <el-table-column prop="name" label="下载/调用次数" />
      <el-table-column prop="name" label="审核状态" />
      <el-table-column prop="name" label="使用状态" />
      <el-table-column prop="name" label="最后下载时间" />
      <el-table-column prop="manager" label="操作">
        <template #default="{}">
          <div class="flex flex-nowrap">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">删除</el-button>
          </div>
        </template>
        </el-table-column>
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
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useRoute, useRouter} from 'vue-router'
  import {useResult} from '@vue/apollo-composable'
  import {ElMessage, ElMessageBox} from 'element-plus'
  import {useListAssetsQuery, useDeleteAssetsMutation, useControlAssetsMutation} from '~~/codegen/index'

  const route = useRoute()
  const router = useRouter()
  const state = ref({
    useStatus: '',
    reviewStatus: '',
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
      keywords: keyword.value,
      // 使用状态
      useStatus: state.value.useStatus,
      // 审核状态
      reviewStatus: state.value.reviewStatus,
      // 目录id
      directoryId: route.query?.id?.toString() ?? '',
    }
  }

  const {result, onResult, refetch} = useListAssetsQuery({
    input: getSearchInput(),
  })

  onResult((res) => {
    total.value = res.data.result?.total ?? 0
  })
  const tableData: any = useResult(result, [], (res) =>{
    return res.result.data.map(item => {
      return {...item, useStatus: item.useStatus ? '启用' : '停用'}
    })
  })

  const options = {
    useStatus: [
      {value: '1', label: '启用'},
      {value: '2', label: '停用'},
    ],
    reviewStatus: [
      {value: '1', label: '草稿'},
      {value: '2', label: '审核中'},
      {value: '3', label: '未通过'},
      {value: '4', label: '通过'},
    ],
  }

  const advanced = ref(true)

  const handlerSearch = () => {
    refetch({input: getSearchInput()})
  }
  const resetSearch = () => {
    state.value.useStatus = ''
    state.value.reviewStatus = ''
  }
  
  const handlerMount = () => {
    console.log(router)
    router.push({name: 'ReportMount'})
  }
  const selection = ref([])
  const handlerSelectionChange = (val: any) => {
    selection.value = val
  }
  const {mutate: deleteAssets} = useDeleteAssetsMutation()
  const handlerDelete = () => {
    if(!selection.value.length) {
      ElMessage.error('未选择数据')
      return
    }
    ElMessageBox.confirm(
      '确认删除数据',
      'Warning',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      },
    ).then(() => {
      deleteAssets({
        ids: selection.value.map((item: any) => item.id),
        directoryId: route.query?.id?.toString() ?? '',
        buzType: '2',
      })
    })
  }
  const {mutate: controlAssets} = useControlAssetsMutation()
  const handlerDisable = () => {
    if(!selection.value.length) {
      ElMessage.error('未选择数据')
      return
    }
    controlAssets({
      ids: selection.value.map((item: any) => item.id),
      useStatus: '1',
    })
  }
  const handlerEnable = () => {
    if(!selection.value.length) {
      ElMessage.error('未选择数据')
      return
    }
    controlAssets({
      ids: selection.value.map((item: any) => item.id),
      useStatus: '0',
    })
  }
</script>
