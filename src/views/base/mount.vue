<template>
  <div class="flex flex-col ml-5 h-full pb-12 relative">
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

    <div class="flex-1">
      <el-table border stripe highlight-current-row :data="tableData" height="100%" @selection-change="handleSelectionChange">
        <el-table-column show-overflow-tooltip type="selection" width="40" prop="select" />
        <el-table-column show-overflow-tooltip prop="name" label="所属系统" />
        <el-table-column show-overflow-tooltip prop="dataBaseName" label="数据库" />
        <el-table-column show-overflow-tooltip prop="name" label="英文名" />
        <el-table-column show-overflow-tooltip prop="name" label="中文名" />
        <el-table-column show-overflow-tooltip prop="mdsObjectTypeEnumCn" label="类型" width="60" align="center" />
        <el-table-column show-overflow-tooltip prop="primaryKey" label="主键" />
        <el-table-column show-overflow-tooltip prop="dbSourceType" label="数据库类型" />
        <el-table-column show-overflow-tooltip prop="createTmCn" label="创建时间" />
      </el-table>
    </div>

    <div class="text-center w-full absolute bottom-0">
      <el-button type="primary" @click="handlerConfirm">确定</el-button>
      <el-button type="primary" plain @click="handlerCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ElMessage} from 'element-plus'
  import {ref, reactive, computed} from 'vue'
  import {useResult} from '@vue/apollo-composable'
  import {useRoute, useRouter} from 'vue-router'
  import {FindLabelByLabelTypesQuery, useFindAllNotMountQuery, MdsObjectApidto} from '~~/codegen/mds'
  import {useDaMountingBasicAssetMutation} from '~~/codegen/index'
  import useApolloClient from '~/utils/apollo-client'
  // @ts-ignore
  import {formatDate} from '~/utils/date'
  import MDS_QUERY_LABEL from '~/graphql/mds/query_label.gql'

  enum MdsMountLabels {
    数据层次 = 'DATALEVEL',
    业务主题 = 'BUZTOPIC',
    业务系统 = 'BUZSYS',
  }

  enum MdsObjectTypeCn {
    TABLE = '表',
    FILE = '文件',
    INTERFACE = '接口',
    NONE = '--',
    VIEW = '页面',
  }

  const route = useRoute()
  const router = useRouter()

  const keyword = ref('')
  const currentPage = ref(1)
  const multipleSelection = ref<MdsObjectApidto[]>([])
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
  const handleSelectionChange = (val: MdsObjectApidto[]) => {
    multipleSelection.value = val
  }
  const options = reactive<any>({
    datalevel: [],
    buztopic: [],
    buzsys: [],
  })
  const menuId = computed(() => route.query?.id?.toString())
  const getSearchInput = () => {
    return {
      nodeId: menuId.value ?? '-1',
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
  // 向资产挂载元数据
  const {mutate} = useDaMountingBasicAssetMutation({})

  const tableData: any = useResult(result, [], (res) => {
    return res.result.data.map(item => {
      return {...item, mdsObjectTypeEnumCn: MdsObjectTypeCn[item.mdsObjectTypeEnum], createTmCN: formatDate(item.createTm)}
    })
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
    console.log(menuId.value)
    if (!multipleSelection.value.length) {
      ElMessage.warning('请选择要挂载的元数据!')
      return
    }
    if (!menuId.value) {
      ElMessage.warning('请选择要挂载的菜单节点')
      return
    }
    mutate({
      input: multipleSelection.value.map(item => {
        return {
          id: item.id,
          // mdsObjectId: item.mdsObjectId,
          // buzsys: item.buzsys,
          dataBaseName: item.dataBaseName,
          englishName: item.name,
          chineseName: item.description,
          mdsType: item.mdsObjectTypeEnum,
          // useStatus: item.useStatus,
          menuId: menuId.value,
          // dbSourceType: item.dbSourceType,
          primaryKey: item.primaryKey,
        }
      }),
    }).then(res => {
      if (res?.data?.result) {
        ElMessage.success('挂载成功')
        setTimeout(() => {
          handlerCancel()
        }, 2000)
      } else {
        ElMessage.error('挂载失败，请重试!')
      }
    })
  }
  const handlerCancel = () => {
    router.back()
  }
</script>
