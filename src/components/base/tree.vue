<template>
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
</template>

<script setup lang="ts">
  import {ref} from 'vue'

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

  const keyword = ref('')
  const contextMenu = ref([
    {command: 'check', label: '查看'},
    {command: 'remove', label: '删除', disabled: true},
  ])
  const defaultExpandedIds = ref(['000010001'])

  

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
