<template>
  <div class="flex flex-1">
    <div class="w-1/6">
      <ej-search-input v-model="keyword" width="100%" size="small" clearable suffix-icon-style="icon" />
      <ej-tree
        lazy
        :load="loadNode"
        :contextmenu="contextMenu"
        :default-expanded-ids="defaultExpandedIds"
        @node-click="onNodeClick"
        @more-click="onMoreClick"
        @command="onCommand"
      >
        <template #default="{data}">
          <div class="node-label">
            {{ data.label }}<div class="node-label__subLabel inline-block ml-2 text-sm text-gray" v-if="data.subLabel">({{ data.subLabel }})</div>
          </div>
        </template>
      </ej-tree>
    </div>
    <div class="flex-auto ml-5">
      <el-collapse-transition>
        <div v-show="advanced && searchComVisible">
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
            <ej-texts v-model="state.name" :options="options.name" prop="name" label="机构名称" />
            <ej-layer label="过滤分类" :related="[options.format, options.share, options.status]">
              <ej-select v-model="state.format" :options="options.format" prop="format" label="格式" />
              <ej-select v-model="state.share" :options="options.share" prop="share" label="共享条件" multiple placeholder="提示信息-多选" />
              <ej-select v-model="state.status" :options="options.status" prop="status" label="状态" placeholder="提示信息-可清空" clearable />
            </ej-layer>
            <ej-texts v-model="state.multipleName" :options="options.name" prop="multipleName" label="名称多选" />
            <ej-cascader v-model="state.base" :options="options.base" prop="base" label="级联基础" />
          </ej-search>
        </div>
      </el-collapse-transition>
      <ej-search-bar
        v-model:models="state"
        v-model:search-com-visible="searchComVisible"
        :advanced="advanced"
        :cm-props="{searchId: 'daWebapp'}"
      />
      
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {ElTable, ElTableColumn, ElCollapseTransition} from 'element-plus'
  import {
    EjLayer, EjTexts,
    EjSelect, EjCascader,
    EjSearchBar, EjSearch,
    EjTree, EjSearchInput,
  } from '@ej/ui'

  const mockData = [
    {
      id: '0',
      label: '北京市',
      subLabel: '首都',
      icon: 'folder',
      children: [
        {
          id: '00001',
          label: '北京市',
          subLabel: '直辖市',
          icon: 'folder',
          children: [
            {id: '000010001', label: '朝阳区', subLabel: '主城区', icon: 'file'},
            {id: '000010002', label: '海淀区', disabled: true, icon: 'file'},
            {id: '000010003', label: '东城区', icon: 'file'},
          ],
        },
      ],
    },
    {
      id: '1',
      label: '天津市',
      type: 'c-government',
      icon: 'folder',
      children: [
        {
          id: '000002',
          label: '天津市-二级',
          subLabel: '直辖市',
          icon: 'folder',
          children: [
            {id: '0000200001', label: '河东区', subLabel: '主城区', icon: 'file'},
            {id: '0000200002', label: '河西区', disabled: true, icon: 'file'},
          ],
        },
      ],
    },
    {
      id: '2',
      label: '这是一条很长很长很长的数据，这是一条很长很长很长的数据，这是一条很长很长很长的数据，这是一条很长很长很长的数据',
      icon: 'folder',
      children: [
        {id: '2000100001', label: '这是一条很长很长很长的数据，这是一条很长很长很长的数据，这是一条很长很长很长的数据，这是一条很长很长很长的数据', icon: 'file'},
      ],
    },
  ]
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

  const keyword = ref('')

  const contextMenu = ref([
    {command: 'check', label: '查看'},
    {command: 'remove', label: '删除', disabled: true},
  ])
  const defaultExpandedIds = ref(['000010001'])

  const state = ref({
    name: '3',
    multipleName: ['2', '4', '8'],
    format: null,
    share: [],
    status: null,
    base: [],
  })
  const keyword2 = ref('keyword')

  // 基础资源参数
  const genBaseOptions = function () {
    return [
      {
        value: '01',
        label: '人口基础信息',
        children: [
          {value: '001', label: '基本信息'},
          {value: '002', label: '社情民意'},
          {value: '003', label: '行政执法与司法'},
          {value: '004', label: '资产'},
          {value: '005', label: '教育就业'},
          {value: '006', label: '社会保障'},
          {value: '007', label: '婚姻家庭'},
          {value: '008', label: '健康档案'},
          {value: '009', label: '纳税与缴费'},
          {value: '010', label: '信用评价'},
        ],
      },
      {
        value: '02',
        label: '法人单位基础信息',
        children: [
          {value: '001', label: '基本信息'},
          {value: '002', label: '报表'},
          {value: '003', label: '资产'},
          {value: '004', label: '资质许可荣誉'},
          {value: '005', label: '纳税参保缴费'},
          {value: '006', label: '生产经营'},
          {value: '007', label: '行政执法'},
          {value: '008', label: '司法信息'},
          {value: '009', label: '信用评价'},
        ],
      },
      {
        value: '03',
        label: '资源和空间地理基础信息',
        children: [
          {value: '001', label: '空间地理'},
          {value: '002', label: '资源'},
        ],
      },
      {
        value: '04',
        label: '宏观经济基础信息',
        children: [
          {value: '001', label: '综合'},
          {value: '002', label: '国民经济核算'},
          {value: '003', label: '人口'},
          {value: '004', label: '就业人员和工资'},
          {value: '005', label: '资产投资'},
          {value: '006', label: '对外经济贸易'},
          {value: '007', label: '资源和环境'},
          {value: '008', label: '能源'},
          {value: '009', label: '财政'},
          {value: '010', label: '价格指数'},
          {value: '011', label: '人民生活'},
          {value: '012', label: '城市概况'},
          {value: '013', label: '农业'},
          {value: '014', label: '工业'},
          {value: '015', label: '建筑业'},
          {value: '016', label: '运输和邮电'},
          {value: '017', label: '批发和零售业'},
          {value: '018', label: '住宿餐饮旅游业'},
          {value: '019', label: '金融业'},
          {value: '020', label: '教育和科技'},
          {value: '021', label: '卫生和社会服务'},
          {value: '022', label: '文化和体育'},
          {value: '023', label: '保险福利'},
          {value: '024', label: '计量质监'},
          {value: '025', label: '周期指标'},
        ],
      },
      {
        value: '05',
        label: '电子证照基础信息',
        children: [
          {value: '001', label: '许可批文'},
          {value: '002', label: '证件'},
          {value: '003', label: '执（牌）照'},
          {value: '004', label: '鉴定报告'},
          {value: '005', label: '证明材料'},
        ],
      },
    ]
  }

  // 主题资源参数
  const genThemeOptions = function () {
    return [
      {value: '01', label: '全民健康保障信息'},
      {value: '02', label: '全民住房保障信息'},
      {value: '03', label: '公共事务基础信息'},
      {value: '04', label: '药品安全监督信息'},
      {value: '05', label: '食品安全监管信息'},
      {value: '06', label: '安全生产监督信息'},
      {value: '07', label: '市场价格监管信息'},
      {value: '08', label: '能源安全保障信息'},
      {value: '09', label: '信用体系建设信息'},
      {value: '10', label: '生态环境保护'},
      {value: '11', label: '应急维稳保障信息'},
      {value: '12', label: '行政执法监督'},
      {value: '13', label: '投资审批（招商引资）'},
      {value: '14', label: '金融监管'},
      {value: '15', label: '城市运行全景图'},
      {value: '16', label: '事件分析'},
      {value: '17', label: '教育专题'},
      {value: '18', label: '运行体征'},
      {value: '19', label: '全民社会保障信息'},
    ]
  }
  const options = {
    name: [
      {value: '1', label: '市发展改革委', num: 20},
      {value: '2', label: '市教委', num: 50},
      {value: '3', label: '市科委'},
      {value: '4', label: '市经济信息化委'},
      {value: '5', label: '市民委'},
      {value: '6', label: '市公安局'},
      {value: '7', label: '市民政局'},
      {value: '8', label: '市司法局'},
      {value: '9', label: '市财政局'},
      {value: '10', label: '市人力社保局'},
    ],
    base: genBaseOptions(),
    theme: genThemeOptions(),
    format: [
      {value: 'file', label: '电子文件'},
      {value: 'table', label: '电子表格'},
      {value: 'database', label: '数据库'},
      {value: 'image', label: '图形图像'},
      {value: 'stream', label: '流媒体'},
      {value: 'other', label: '自描述格式'},
    ],
    share: [
      {value: 'condition', label: '有条件共享'},
      {value: 'uncondition', label: '无条件共享'},
      {value: 'reject', label: '不共享'},
    ],
    status: [
      {value: 1, label: '未审核'},
      {value: 2, label: '部门审核通过'},
      {value: 3, label: '审核未通过'},
      {value: 4, label: '已停用'},
      {value: 5, label: '联审通过'},
      {value: 6, label: '已发布'},
    ],
  }

  const searchComVisible = ref(false)
  const advanced = ref(true)

  const handlerSearch = (params: any, type: any) => {
    console.log(params, type)
  }

  const onNodeClick = ({data, _node}: any) => {
    console.log(`当前点击的节点为${data.label}`)
  }

  const onMoreClick = ({data, node}: any) => {
    console.log(`${data.label}的更多操作列表`, node)
  }
  const onCommand = ({commands, data}: any) => {
    console.log(`${data.label}的当前操作是： ${commands}`)
  }

  const findTreeChildren = (tree: any, id: string | number) => {
    let findNodes = []
    let queue = [...tree]
    // 广度遍历
    while (queue.length && !findNodes.length) {
      const node = queue.shift()
      if (Array.isArray(node.children) && node.children.length) {
        if (node.id === id) {
          findNodes = node.children
        }
        queue.push(...node.children)
      }
    }
    return findNodes
  }

  const loadNode = (node: any, resolve: any) => {
    if (node.level === 0) {
      return resolve(mockData.map((item: any) => {
        const obj: any = {}
        // 只加载第一级别
        Object.keys(item).forEach(key => {
          if (key !== 'children') {
            obj[key] = item[key]
          }
        })
        return obj
      }))
    } else if (node.data.id) {
      setTimeout(() => {
        const nodes = findTreeChildren(mockData, node.data.id).map((item: any) => {
          return {
            ...item,
            leaf: !Boolean(item.children && item.children.length),
          }
        })
        resolve(nodes)
      }, 1000)
    } else {
      resolve([])
    }
  }
</script>
