<template>
  <ej-search-input v-model="keyword" width="100%" size="small" clearable suffix-icon-style="icon" />
  <ej-tree
    ref="treeRef"
    lazy
    node-key="id"
    :load="loadNode"
    :contextmenu="contextMenu"
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
  <el-dialog
    append-to-body
    v-model="addState.visible"
    :title="`${addState.isEdit ? '修改' : '创建'}目录/文件夹`"
    :close-on-click-modal="false"
  >
    <el-form ref="formRef" :model="form" size="small" label-width="150px">
      <el-form-item label="目录/文件夹名称：" prop="name" :rules="[
        {required: true, message: '请输入目录/文件夹名称', trigger: 'blur'},
        {pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9_-]{1,16}$/, message: '请输入1到16位汉字、字母、数字、下划线'},
      ]">
        <!-- inputPattern: /^[\u4e00-\u9fa5_a-zA-Z0-9_-]{1,16}$/, -->
        <el-input v-model="form.name" maxlength="16" />
      </el-form-item>
      <el-form-item v-if="!addState.isEdit" label="类型：" prop="type" :rules="[{required: true, message: '请选择类型', trigger: 'blur'}]">
        <el-radio-group v-model="form.type">
          <el-radio :label="MenuManagementTypeEnum['File']">文件</el-radio>
          <el-radio :label="MenuManagementTypeEnum['Folder']">目录</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
  export default {
    name: 'BaseTree',
  }
</script>

<script setup lang="ts">
  import {ref, PropType, reactive, nextTick} from 'vue'
  import {useRouter, useRoute} from 'vue-router'
  import {ElMessage} from 'element-plus'
  import 'element-plus/theme-chalk/src/overlay.scss'
  import 'element-plus/theme-chalk/src/message-box.scss'
  import useApolloClient from '~/utils/apollo-client'
  import QUERY_MENU from '~/graphql/da/query_menu.gql'
  // import type {MenuManagementEnum} from '~~/codegen/index'
  import {MenuManagementEnum, useDaDelMenuMutation, DaQueryMenuListQuery, useDaSaveOrUpdateMenuMutation, MenuManagementTypeEnum} from '~~/codegen/index'
  import type {ElForm} from 'element-plus'

  const route = useRoute()
  const router = useRouter()
  const treeRef = ref()
  const keyword = ref('')
  const addState = reactive<any>({
    // 添加弹出隐藏/显示
    visible: false,
    // 新增/修改
    isEdit: false,
    // 当前节点
    node: null,
    // 当前节点数据
    nodeData: null,
  })
  const form = ref({
    // 目录/文件
    type: MenuManagementTypeEnum['File'],
    // 值
    name: '',
  })
  const formRef = ref<typeof ElForm>()
  const contextMenu = ref([
    {command: 'addDir', label: '添加'},
    {command: 'remove', label: '删除'},
    {command: 'rename', label: '重命名'},
  ])
  // 更新
  const {mutate: updateFolder} = useDaSaveOrUpdateMenuMutation({})
  // 删除
  const {mutate: delFolder} = useDaDelMenuMutation({})
  const props = defineProps({
    type: {
      type: String as PropType<MenuManagementEnum>,
      required: true,
    },
  })
  // 添加
  const addTree = (data: any, node: any) => {
    addState.visible = true
    addState.isEdit = false
    addState.node = node
    addState.nodeData = data
  }
  // 编辑
  const updateTree = (data: any, node: any) => {
    addState.visible = true
    addState.isEdit = true
    addState.node = node
    addState.nodeData = data
    form.value.name = data.label
  }
  //删除
  const deleteTree = (data: any, node: any) => {
    if (node?.childNodes?.length) {
      ElMessage.error('请先删除子文件')
      return
    }
    delFolder({
      menuIds: [data.id],
      menuType: props.type,
    }).then((res) => {
      if (res?.data?.result) {
        ElMessage.success('删除文件夹/节点成功')
        node.remove()
      }
    })
  }

  const onSubmit = () => {
    formRef.value?.validate((valid: boolean) => {
      if (valid) {
        const value = form.value.name
        if (addState.isEdit) {
          updateFolder({
            input: {
              id: addState.nodeData.id,
              menuName: value,
              menuType: props.type,
            },
          }).then((res) => {
            if (res?.data?.result) {
              ElMessage.success('目录/文件重命名成功')
              addState.nodeData.label = value
              addState.node.data.label = addState.node.data.name = value
              onCancel()
            }
          })
        } else {
          updateFolder({
            input: {
              parentId: addState.nodeData.id,
              menuName: value,
              menuType: props.type,
              menuManagementType: form.value.type,
            },
          }).then((res) => {
            if (res?.data?.result) {
              const isFile = form.value.type === MenuManagementTypeEnum['File']
              const newChild = {
                id: res.data.result,
                label: value,
                icon: isFile ? 'file' : 'folder',
                isLeaf: isFile,
              }
              addState.nodeData.isLeaf = isFile
              if (addState.nodeData?.children?.length) {
                addState.nodeData.children.push(newChild)
              } else {
                addState.nodeData.children = [newChild]
              }
              ElMessage.success('添加目录/文件成功')
              onCancel()
            }
          })
        }
      } else {
        // ElMessage.error('')
        return false
      }
    })
  }
  const onCancel = () => {
    formRef.value?.resetFields()
    addState.visible = false
  }

  const onNodeClick = ({data, _node}: any) => {
    router.replace({query: {treeId: data.id, treeType: data.type}})
  }
  const onMoreClick = ({data, node}: any) => {
    if (node.level === 1) {
      contextMenu.value = [
        {command: 'addDir', label: '添加'},
        {command: 'rename', label: '重命名'},
      ]
      return
    }

    if (data.isLeaf) {
      contextMenu.value = [
        //{command: 'addDir', label: '添加'},
        {command: 'remove', label: '删除'},
        {command: 'rename', label: '重命名'},
      ]
    } else {
      contextMenu.value = [
        {command: 'addDir', label: '添加'},
        {command: 'remove', label: '删除'},
        {command: 'rename', label: '重命名'},
      ]
    }
  }
  const onCommand = ({commands, data, node}: any) => {
    if (commands?.[0] === 'addDir') {
      addTree(data, node)
    } else if (commands?.[0] === 'rename') {
      updateTree(data, node)
    } else if (commands?.[0] === 'remove') {
      deleteTree(data, node)
    }
  }

  const loadNode = async (node: any, resolve: any) => {
    if (node.level === 0) {
      const data = await queryTree('-1').catch(() => resolve([]))
      nextTick(() => {
        if (!node.childNodes?.[0]) return
        node.childNodes[0].expanded = true
        node.childNodes[0].loadData()

        // 选中url参数
        if (route.query.treeId && data.map((item: any) => item.id).includes(route.query.treeId)) {
          treeRef.value.setCurrentKey(route.query.treeId)
        }
      })
      return resolve(data)
    } else {
      const data = await queryTree(node.data.id).catch(() => resolve([]))

      // 选中url参数
      nextTick(() => {
        if (route.query.treeId && data.map((item: any) => item.id).includes(route.query.treeId)) {
          treeRef.value.setCurrentKey(route.query.treeId)
        }
      })
      return resolve(data)
    }
  }

  const queryTree = (pid: string) => {
    return useApolloClient('da').query({
      query: QUERY_MENU,
      variables: {
        menuType: props.type,
        parentId: pid || null,
      },
    }).then((res: {data: DaQueryMenuListQuery}) => {
      const result = res?.data?.result ?? []

      return result.map((item) => {
        const isFile = item?.menuManagementType === MenuManagementTypeEnum['File']
        return {
          id: item?.id ?? '',
          pid: item?.parentId ?? '',
          label: item?.menuName ?? '',
          icon: isFile ? 'file' : 'folder',
          isLeaf: isFile,
          type: item?.menuManagementType,
          children: isFile ? null: [],
        }
      }).filter((item) => Boolean(item.id))
    })
  }
</script>
