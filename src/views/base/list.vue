  <template>
    <div class="flex-auto ml-5">
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
          <ej-search-input v-model="keyword2" clearable width="300" placeholder="请输入内容2" maxlength="128" class="mr-1" @search="inputSearch()" />
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

      <div>
        <el-table border stripe checkbox highlight-current-row :data="tableData">
          <el-table-column type="selection" align="center" />
          <el-table-column prop="date" label="所属系统" />
          <el-table-column prop="name" label="数据库" />
          <el-table-column prop="address" label="英文名" />
          <el-table-column prop="name" label="中文名" />
          <el-table-column prop="name" label="数据类型" />
          <el-table-column prop="name" label="使用状态" />
          <el-table-column prop="name" label="操作" />
        </el-table>
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
    useStatus: null,
    buzsys: [],
  })
  const keyword2 = ref('keyword')

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
    console.log(router)
    router.push({name: 'ReportMount'})
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
