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
      <ej-texts v-model="state.cycle" :options="options.cycle" prop="cycle" label="周期" />
      <ej-texts v-model="state.type" :options="options.type" prop="type" label="类型" />
    </ej-search>

    <el-table border stripe highlight-current-row :data="tableData">
      <el-table-column type="selection" width="40" prop="select" />
      <el-table-column prop="name" label="报表名称" />
      <el-table-column prop="date" label="周期" />
      <el-table-column prop="name" label="类型" />
      <el-table-column prop="name" label="年度下载次数" />
      <el-table-column prop="name" label="备注" />
      <el-table-column prop="name" label="使用方" />
    </el-table>

    <div>
      <el-button @click="handlerConfirm">确定</el-button>
      <el-button @click="handlerCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'
  const router = useRouter()
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
    cycle: '',
    type: '',
  })
  const keyword2 = ref('keyword')

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
