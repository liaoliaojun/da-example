<template>
  <div class="da-base-list h-full ml-5">
    <ej-search
      v-model:models="state"
      :immediate-search="true"
      :hide-com-list="true"
      :hide-expand-button="false"
      label-suffix="："
      label-position="right"
      @search="handlerSearch"
    >
      <template #input>
        <ej-search-input v-model="keyword" clearable width="300" placeholder="请输入关键词" maxlength="128" class="mr-1" @search="inputSearch()" />
        <el-button size="small" type="primary">重置</el-button>
      </template>
      <ej-radio v-model="state.useStatus" :options="[{label: '启用', value: true}, {label: '停用', value: false}]" prop="useStatus" label="使用状态" />
      <ej-texts v-model="state.buzsys" :options="options.buzsys" prop="buzsys" label="数据类型" />
      <ej-layer label="所属系统：" >
        <ej-input v-model="state.buzsys" size="mini" height="24" width="100" clearable />
        <div class="flex ml-5">
          <span class="title">数据库：</span>
          <ej-input v-model="state.buzsys" size="mini" height="24" width="100" clearable />
        </div>
      </ej-layer>
    </ej-search>
    <div class="flex flex-row-reverse mb-2">
      <el-button :disabled="!multipleSelectionIds.length" size="small" style="margin-left: 10px;" @click="handlerStop">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">停用</span>
      </el-button>
      <el-button :disabled="!multipleSelectionIds.length" size="small" @click="handlerStart">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">启用</span>
      </el-button>
      <el-button :disabled="!multipleSelectionIds.length" size="small" @click="handlerDelete()">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">删除</span>
      </el-button>
      <el-button :disabled="menuType !== MenuManagementTypeEnum['File']" size="small" @click="handlerMount">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span class="ml-1">挂载</span>
      </el-button>
    </div>

    <el-skeleton animated :loading="loading" :rows="5">
      <div class="text-right">
        <el-table border small stripe checkbox highlight-current-row :data="tableData" @selection-change="handleSelectionChange">
          <el-table-column show-overflow-tooltip type="selection" align="center" />
          <el-table-column show-overflow-tooltip prop="tableData" label="所属系统" />
          <el-table-column show-overflow-tooltip prop="dataBaseName" label="数据库" />
          <el-table-column show-overflow-tooltip prop="englishName" label="英文名" />
          <el-table-column show-overflow-tooltip prop="chineseName" label="中文名" />
          <el-table-column show-overflow-tooltip prop="mdsType" label="数据类型" />
          <el-table-column show-overflow-tooltip prop="useStatusCn" label="使用状态" />
          <el-table-column label="操作" width="100">
            <template #default="scope">
              <el-button type="text">详情</el-button>
              <el-button type="text" @click="handlerDelete(scope.row.id)">删除</el-button>
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
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
  import {ref, watch, computed} from 'vue'
  import {ElMessage} from 'element-plus'
  import {useRoute, useRouter} from 'vue-router'
  import {useResult} from '@vue/apollo-composable'
  import useBreadcrumb from '~/hooks/breadcrumb'
  import {BasicAssetManagement, BasicAssetManagementSortEnum, MenuManagementTypeEnum, useDaPageQueryBasicAssetQuery, useDaBatchDelBasicAssetsMutation, useDaBatchSetUseStatusMutation} from '~~/codegen/index'

  const route = useRoute()
  const router = useRouter()
  const state = ref({
    useStatus: null,
    buzsys: '',
  })
  const keyword = ref('')
  const currentPage = ref(1)
  const limit = ref(30)
  const total = ref(0)
  const multipleSelection = ref<BasicAssetManagement[]>([])
  const multipleSelectionIds = computed(() => {
    return multipleSelection.value?.map(i => i.id ?? '') ?? []
  })
  const changePage = () => {
    refetch({input: getSearchInput()})
  }
  const menuType = computed(() => route.query.treeType)

  const {setBreadcrumbList} = useBreadcrumb()
  setBreadcrumbList([
    {path: '/', label: '首页'},
    {label: '基础资产管理'},
  ])
  const handleSelectionChange = (val: BasicAssetManagement[]) => {
    multipleSelection.value = val
  }

  const getSearchInput = () => {
    return {
      // 取数偏移
      offset: (currentPage.value - 1) * limit.value,
      // 取数范围
      limit: limit.value,
      // 搜索关键字
      keyWord: keyword.value,
      // 使用状态
      useStatus: state.value.useStatus,
      // 所属系统
      buzsys: state.value.buzsys,
      // 目录id
      menuId: route.query?.treeId?.toString() ?? '',
      // 排序字段, 0为英文名, 1为中文名
      sortField: 1,
      // 排序规则
      sortBasicAsset: BasicAssetManagementSortEnum.Asc,
    }
  }

  const {loading, result, onResult, refetch} = useDaPageQueryBasicAssetQuery({
    input: getSearchInput(),
  })
  const {mutate: delMutate} = useDaBatchDelBasicAssetsMutation({})
  const {mutate: setMutate} = useDaBatchSetUseStatusMutation({})

  onResult((res) => {
    total.value = res.data.result?.total ?? 0
  })

  const handlerStop = () => {
    if (!multipleSelectionIds.value.length) {
      ElMessage.error('请选择要停用的列表')
      return
    }
    // 是否
    if (multipleSelection.value.some(item => item.useStatus === false)) {
      ElMessage.error('选中列表中，有已经停用的资产')
      return
    }
    setMutate({
      basicAssetIds: multipleSelectionIds.value,
      useStatus: false,
    }).then((res: any) => {
      if (res.data.result) {
        ElMessage.success('停用成功')
        refetch({input: getSearchInput()})
      }
    })
  }
  const handlerStart = () => {
    if (!multipleSelectionIds.value.length) {
      ElMessage.error('请选择要启用的列表')
      return
    }
    // 是否
    if (multipleSelection.value.some(item => item.useStatus === true)) {
      ElMessage.error('选中列表中，有已经启用的资产')
      return
    }
    setMutate({
      basicAssetIds: multipleSelectionIds.value,
      useStatus: true,
    }).then((res: any) => {
      if (res.data.result) {
        ElMessage.success('启用成功')
        refetch({input: getSearchInput()})
      }
    })
  }
  const handlerDelete = (id?: string) => {
    if (!id) {
      if (!multipleSelectionIds.value.length) {
        ElMessage.error('请选择要删除的列表')
        return
      }
    }
    delMutate({
      basicAssetIds: id ? [id] : multipleSelectionIds.value,
      menuId: route.query?.treeId?.toString() ?? '',
    }).then((res: any) => {
      if (res.data.result) {
        ElMessage.success('删除成功')
        refetch({input: getSearchInput()})
      }
    })
  }

  // why any? @TODO: https://github.com/vuejs/vue-apollo/discussions/1261
  const tableData: any = useResult(result, [], (res) => {
    return res.result.data.map(item => {
      return {...item, useStatusCn: item.useStatus ? '启用' : '停用'}
    })
  })

  const options = {
    buzsys: [
      {value: 'TABLE', label: '表'},
      {value: 'VIEW', label: '视图'},
    ],
  }

  const handlerSearch = (_params: any, _type: any) => {
    refetch({input: getSearchInput()})
  }
  const handlerMount = () => {
    if (menuType.value !== MenuManagementTypeEnum['File']) {
      ElMessage.error('仅能挂载在文件类型的节点上')
      return
    }
    router.push({name: 'BaseMount', query: {...route.query}})
  }
  const inputSearch = () => {
    handlerSearch({}, 'btn')
  }

  watch(() => route.query, () => {
    refetch({input: getSearchInput()})
  }, {deep: false})
</script>

<style lang="postcss">
  /* .da-base-list {
    .custom-layer {
      .ej-search-layer__content {
        padding-right: 25px;
      }
      .ej-search-expand {
        @apply hidden;
      }
    }
  } */
</style>
