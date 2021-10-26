<template>
  <div class="flex-auto ml-5">
    <ej-search 
      v-model:models="state"
      v-model:keyword="keyword2"
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
      <ej-texts v-model="state.useStatus" :options="options.useStatus" prop="useStatus" label="使用状态" />
      <ej-texts v-model="state.checkStatus" :options="options.checkStatus" prop="checkStatus" label="审核状态" />
    </ej-search>
    <div class="flex flex-row-reverse">
      <el-button size="small" style="margin-left: 10px;">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>停用</span>
      </el-button>
      <el-button size="small">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>启用</span>
      </el-button>
      <el-button size="small">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>删除</span>
      </el-button>
      <el-button size="small" @click="handlerMount">
        <ej-icon style="width: 14px; height: 14px;" icon="checkin" class="inline-block" />
        <span>挂载</span>
      </el-button>
    </div>

    <el-table border stripe highlight-current-row :data="tableData">
      <el-table-column type="selection" width="40" prop="select" />
      <el-table-column prop="name" label="资产名称" />
      <el-table-column prop="date" label="资产类型" />
      <el-table-column prop="name" label="使用方/责任部门" />
      <el-table-column prop="name" label="下载/调用次数" />
      <el-table-column prop="name" label="审核状态" />
      <el-table-column prop="name" label="使用状态" />
      <el-table-column prop="name" label="最后下载时间" />
      <el-table-column prop="manager" label="操作">
        <template #default="{row}">
          <div class="flex flex-nowrap">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">删除</el-button>
          </div>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  const state = ref({
    useStatus: null,
    checkStatus: null,
  })
  const keyword2 = ref('keyword')

  const options = {
    useStatus: [
      {value: true, label: '启用'},
      {value: false, label: '停用'},
    ],
    checkStatus: [
      {value: 1, label: '草稿'},
      {value: 2, label: '审核中'},
      {value: 3, label: '未通过'},
      {value: 4, label: '通过'},
    ],
  }

  const advanced = ref(true)

  const handlerSearch = (params: any, type: any) => {
    console.log(params, type)
  }
  const router = useRouter()
  const handlerMount = () => {
    console.log(router)
    router.push({name: 'mount'})
  }
</script>
