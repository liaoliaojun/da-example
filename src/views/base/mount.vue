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
      :show-com-pop="true"
      @search="handlerSearch"
    >
      <ej-texts v-model="state.datalevel" :options="options.datalevel" prop="datalevel" label="数据层次" />
      <ej-texts v-model="state.buztopic" :options="options.buztopic" prop="buztopic" label="业务主题" />
      <ej-texts v-model="state.buzsys" :options="options.buzsys" prop="buzsys" label="业务系统" />
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

    <div class="text-center mt-4">
      <el-button type="primary" @click="handlerConfirm">确定</el-button>
      <el-button type="primary" plain @click="handlerCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref, reactive, computed} from 'vue'
  import {useResult} from '@vue/apollo-composable'
  import {useRoute, useRouter} from 'vue-router'
  import {FindLabelByLabelTypesQuery, useFindAllNotMountQuery} from '~~/codegen/mds'
  import useApolloClient from '~/utils/apollo-client'
  import MDS_QUERY_LABEL from '~/graphql/mds/query_label.gql'

  enum MdsMountLabels {
    数据层次 = 'DATALEVEL',
    业务主题 = 'BUZTOPIC',
    业务系统 = 'BUZSYS',
  }

  const route = useRoute()
  const router = useRouter()

  const keyword = ref('')
  const currentPage = ref(1)
  const limit = ref(30)
  const total = ref(0)
  const state = ref({
    // 数据层次
    datalevel: null,
    // 业主主题
    buztopic: null,
    // 业务系统
    buzsys: null,
  })
  const options = reactive<any>({
    datalevel: [],
    buztopic: [],
    buzsys: [],
  })
  const menuId = computed(() => route.query?.id?.toString() ?? '-1')
  const getSearchInput = () => {
    return {
      nodeId: menuId.value,
      buzType: '0',
      datalevel: state.value.datalevel,
      buztopic: state.value.buztopic,
      buzsys: state.value.buzsys,
      // 取数偏移
      offset: (currentPage.value - 1) * limit.value,
      // 取数范围
      size: limit.value,
      // 搜索关键字
      keyword: keyword.value,
    }
  }
  const {result, refetch, onResult} = useFindAllNotMountQuery({input: getSearchInput()}, {clientId: 'mdsClient'})

  const tableData: any = useResult(result, [], (res) => {
    return res.result.data
  })
  onResult((res) => {
    total.value = Number(res.data?.result?.total ?? 0)
  })

  const queryMdsLabel = (labelTypes: MdsMountLabels[]) => {
    // 数据层次DATALEVEL  业务主题BUZTOPIC  业务系统BUZSYS 
    return useApolloClient('mds').query({
      query: MDS_QUERY_LABEL,
      variables: {
        labelTypes,
      },
    })
  }

  queryMdsLabel([MdsMountLabels['数据层次'], MdsMountLabels['业务主题'], MdsMountLabels['业务系统']]).then((res: {data: FindLabelByLabelTypesQuery}) => {
    const result = res.data?.result ?? []
    options.datalevel = result.filter((item) => {
      // @ts-ignore
      return (item.type as MdsMountLabels) === MdsMountLabels['数据层次']
    }).map(item => {
      return {label: item?.name ?? '', value: item?.id ?? ''}
    }) ?? []
    options.buztopic = result.filter((item) => {
      // @ts-ignore
      return (item.type as MdsMountLabels) === MdsMountLabels['业务主题']
    }).map(item => {
      return {label: item?.name ?? '', value: item?.id ?? ''}
    }) ?? []
    options.buzsys = result.filter((item) => {
      // @ts-ignore
      return (item.type as MdsMountLabels) === MdsMountLabels['业务系统']
    }).map(item => {
      return {label: item?.name ?? '', value: item?.id ?? ''}
    }) ?? []
  })

  const handlerSearch = (_params: any, _type: any) => {
    refetch({input: getSearchInput()})
  }
  const handlerConfirm = () => {
    router.back()
  }
  const handlerCancel = () => {
    router.back()
  }
</script>
