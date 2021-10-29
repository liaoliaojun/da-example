<template>
  <ej-search-input v-model="keyword" width="100%" size="small" clearable suffix-icon-style="icon" />
  <ej-tree
    lazy
    node-key="id"
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

<script lang="ts">
  export default {
    name: 'BaseTree',
  }
</script>

<script setup lang="ts">
  import {ref, PropType} from 'vue'
  import {useRouter} from 'vue-router'
  import {ElMessage, ElMessageBox} from 'element-plus'
  import 'element-plus/theme-chalk/src/overlay.scss'
  import 'element-plus/theme-chalk/src/message-box.scss'
  import useApolloClient from '~/utils/apollo-client'
  import QUERY_MENU from '~/graphql/da/query_menu.gql'
  // import type {MenuManagementEnum} from '~~/codegen/index'
  import {MenuManagementEnum, useDaDelMenuMutation, DaQueryMenuListQuery, useDaSaveOrUpdateMenuMutation} from '~~/codegen/index'

  const router = useRouter()
  const keyword = ref('')
  const contextMenu = ref([
    {command: 'addDir', label: '添加'},
    {command: 'remove', label: '删除'},
    {command: 'rename', label: '重命名'},
  ])
  // string类型的-1
  const defaultExpandedIds = ref(['-1'])
  // 更新
  const {mutate: updateFolder} = useDaSaveOrUpdateMenuMutation({})
  // 删除
  const {mutate: deleteFolder} = useDaDelMenuMutation({})
  const props = defineProps({
    type: {
      type: String as PropType<MenuManagementEnum>,
      required: true,
    },
  })

  // 添加
  const addDir = (data: any, node: any) => {
    ElMessageBox.prompt('请输入文件夹/节点名称', '', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /^[a-zA-Z0-9_-]{1,16}$/,
      inputErrorMessage: '允许1到16位字母，数字，下划线，减号',
    }).then(({value}) => {
      updateFolder({
        input: {
          parentId: data.id,
          menuName: value,
          menuType: props.type,
        },
      }).then((res) => {
        if (res?.data?.result) {
          ElMessage.success('添加文件夹/节点成功')
          data.isLeaf = false
          data.leaf = false
          const newChild = {
            id: res.data.result,
            label: value,
            icon: 'file',
            isLeaf: true,
            leaf: true,
          }
          if (data?.children?.length) {
            data.children.push(newChild)
          } else {
            data.children = [newChild]
          }
          // nextTick(() => {
          //   defaultExpandedIds.value.push(data.id)
          // })
          // if (node.data?.children?.length) {
          //   node.data.children.push(newChild)
          // } else {
          //   node.data.children = [newChild]
          // }
        }
      })
    })
  }
  // 编辑
  const updateDir = (data: any, node: any) => {
    ElMessageBox.prompt('请输入文件夹/节点名称', '', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputValue: data.label,
      inputPattern: /^[\u4e00-\u9fa5_a-zA-Z0-9_-]{1,16}$/,
      inputErrorMessage: '允许1到16位字母，数字，下划线，减号',
    }).then(({value}) => {
      updateFolder({
        input: {
          id: data.id,
          menuName: value,
          menuType: props.type,
        },
      }).then((res) => {
        if (res?.data?.result) {
          ElMessage.success('文件夹/节点重命名成功')

          data.label = value
          node.data.label = node.data.name = value
        }
      })
    })
  }

  const onNodeClick = ({data, _node}: any) => {
    router.replace({query: {id: data.id}})
  }
  const onMoreClick = ({data, node}: any) => {
    console.log(`${data}的更多操作列表`, node)
  }
  const onCommand = ({commands, data, node}: any) => {
    if (commands?.[0] === 'addDir') {
      addDir(data, node)
    } else if (commands?.[0] === 'rename') {
      updateDir(data, node)
    } else if (commands?.[0] === 'remove') {
      deleteFolder({
        menuIds: [data.id],
      }).then((res) => {
        if (res?.data?.result) {
          ElMessage.success('删除文件夹/节点成功')
          node.remove()
        }
      })
    }
  }

  // const findTreeChildren = (tree: any, id: string | number) => {
  //   let findNodes = []
  //   let queue = [...tree]
  //   // 广度遍历
  //   while (queue.length && !findNodes.length) {
  //     const node = queue.shift()
  //     if (Array.isArray(node.children) && node.children.length) {
  //       if (node.id === id) {
  //         findNodes = node.children
  //       }
  //       queue.push(...node.children)
  //     }
  //   }
  //   return findNodes
  // }

  const loadNode = async (node: any, resolve: any) => {
    if (node.level === 0) {
      return resolve([
        {
          id: '-1',
          label: '基础资产',
          icon: 'folder',
          isLeaf: false,
          children: [],
        },
      ])
    } else {
      const data = await queryRootTree(node.data.id).catch(() => resolve([]))
      return resolve(data)
    }

    // if (node.level === 0) {
    //   // await queryRootTree()
    //   const data = await queryRootTree()
    //   console.log(data)
    //   resolve(data)
    // } else if (node.data.id) {
    //   setTimeout(() => {
    //     const nodes = findTreeChildren(mockData, node.data.id).map((item: any) => {
    //       return {
    //         ...item,
    //         leaf: !Boolean(item.children && item.children.length),
    //       }
    //     })
    //     resolve(nodes)
    //   }, 1000)
    // } else {
    //   resolve([])
    // }
  }

  const queryRootTree = (pid: string) => {
    return useApolloClient('da').query({
      query: QUERY_MENU,
      variables: {
        menuType: props.type,
        parentId: pid || null,
      },
    }).then((res: {data: DaQueryMenuListQuery}) => {
      const result = res?.data?.result ?? []

      return result.map((item) => {
        return {
          id: item?.id ?? '',
          pid: item?.parentId ?? '',
          label: item?.menuName ?? '',
          icon: 'folder',
          isLeaf: false,
          children: [],
        }
      }).filter((item) => Boolean(item.id))
    })
  }
</script>
