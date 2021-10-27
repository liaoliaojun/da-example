<template>
  <div class="flex-auto ml-5">
    loading: {{loading}}
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
        <ej-search-input v-model="keyword" clearable width="300" placeholder="请输入内容2" maxlength="128" class="mr-1" @search="inputSearch()" />
        <el-button size="small" type="primary">重置</el-button>
      </template>
      <ej-radio v-model="state.useStatus" :options="[{label: '启用', value: true}, {label: '停用', value: false}]" prop="useStatus" label="使用状态" label-suffix="：" />
      <ej-texts v-model="state.buzsys" :options="options.buzsys" prop="buzsys" label="所属系统" label-suffix="：" />
    </ej-search>
    <div class="flex flex-row-reverse mb-4">
      <el-button size="small" style="margin-left: 10px;">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">停用</span>
      </el-button>
      <el-button size="small">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">启用</span>
      </el-button>
      <el-button size="small">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">删除</span>
      </el-button>
      <el-button size="small" @click="handlerMount">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">挂载</span>
      </el-button>
    </div>

    <div class="text-right">
      <el-table border stripe checkbox highlight-current-row :data="tableData">
        <el-table-column type="selection" align="center" />
        <el-table-column prop="tableData" label="所属系统" />
        <el-table-column prop="dataBaseName" label="数据库" />
        <el-table-column prop="englishName" label="英文名" />
        <el-table-column prop="chineseName" label="中文名" />
        <el-table-column prop="mdsType" label="数据类型" />
        <el-table-column prop="useStatus" label="使用状态" />
        <el-table-column prop="name" label="操作" />
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
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'
  import {useResult} from '@vue/apollo-composable'
  import {BasicAssetManagementSortEnum, useDaPageQueryBasicAssetQuery} from '~~/codegen/index'

  const router = useRouter()
  const state = ref({
    useStatus: null,
    buzsys: '',
  })
  const keyword = ref('')
  const currentPage = ref(3)
  const limit = ref(30)
  const total = ref(100)
  const changePage = (val: number) => {
    console.log(val)
  }

  const getSearchInput = () => {
    return {
      // 取数偏移
      offset: 0,
      // 取数范围
      limit: 30,
      // 搜索关键字
      keyWord: keyword.value,
      // 使用状态
      useStatus: state.value.useStatus,
      // 所属系统
      buzsys: state.value.buzsys ?? null,
      // 目录id
      menuId: '',
      // 排序字段, 0为英文名, 1为中文名
      sortField: 1,
      // 排序规则
      sortBasicAsset: BasicAssetManagementSortEnum.Asc,
    }
  }

  const {loading, result} = useDaPageQueryBasicAssetQuery({
    input: getSearchInput(),
  })

  // why any? @TODO: https://github.com/vuejs/vue-apollo/discussions/1261
  const tableData: any = useResult(result, [], (res) =>{
    return res.result.data.map(item => {
      return {...item, useStatus: item.useStatus ? '启用' : '停用'}
    })
  })

  const options = {
    buzsys: [
      {value: 'mds', label: '元数据'},
      {value: 'dqs', label: '数据质量'},
      {value: 'ds', label: '数据标准'},
      {value: 'seamodel', label: '模型'},
    ],
  }

  const advanced = ref(true)

  const handlerSearch = (params: any, type: any) => {
    console.log(params, type)
  }
  const handlerMount = () => {
    router.push({name: 'BaseMount'})
  }
  const inputSearch = () => {
    handlerSearch({}, 'btn')
  }
</script>

<style lang="postcss">
  /* .da-base-view {
    .ej-split-right {
    }
  } */
</style>
