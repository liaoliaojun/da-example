import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "vue";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AssetsInfoDto = {
  __typename?: "AssetsInfoDto";
  /** 目录Id */
  directoryId?: Maybe<Scalars["ID"]>;
  /** 总下载次数 */
  downloadsCount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["ID"]>;
  /** 元数据Id */
  metadataId?: Maybe<Scalars["ID"]>;
  /** 资产名称 */
  name?: Maybe<Scalars["String"]>;
  /** 责任部门 */
  responseDept?: Maybe<Scalars["String"]>;
  /** 审核状态（草稿、审核中、拒绝、已通过） */
  reviewStatus?: Maybe<Scalars["String"]>;
  /** 资产类型（报表，接口） */
  type?: Maybe<Scalars["String"]>;
  /** 使用状态（停用、启用） */
  useStatus?: Maybe<Scalars["String"]>;
  /** 使用方 */
  userDept?: Maybe<Scalars["String"]>;
};

/** 挂载元数据对象 */
export type AssetsInput = {
  /** 目录Id */
  directoryId?: Maybe<Scalars["ID"]>;
  /** 总下载次数 */
  downloadsCount?: Maybe<Scalars["Int"]>;
  /** 元数据Id */
  metadataId?: Maybe<Scalars["ID"]>;
  /** 资产名称 */
  name?: Maybe<Scalars["String"]>;
  /** 责任部门 */
  responseDept?: Maybe<Scalars["String"]>;
  /** 资产类型（报表，接口） */
  type?: Maybe<Scalars["String"]>;
  /** 使用方 */
  userDept?: Maybe<Scalars["String"]>;
};

/** 分页查询资产列表参数 */
export type AssetsPageInput = {
  /** 目录Id */
  directoryId: Scalars["ID"];
  /** 条件查询关键字  资产名称/使用方/责任部门 */
  keywords?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** 审核状态 */
  reviewStatus?: Maybe<Scalars["String"]>;
  /** 使用状态 */
  useStatus?: Maybe<Scalars["String"]>;
};

export type AssetsPaginationResult = {
  __typename?: "AssetsPaginationResult";
  /** 数据列表 */
  data?: Maybe<Array<Maybe<AssetsInfoDto>>>;
  /** 页数量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  total?: Maybe<Scalars["Int"]>;
};

export type BasicAssetManagement = {
  __typename?: "BasicAssetManagement";
  /** 所属系统 */
  buzsys?: Maybe<Scalars["String"]>;
  /** 中文名 */
  chineseName?: Maybe<Scalars["String"]>;
  /** 数据库 */
  dataBaseName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  dbSourceType?: Maybe<DbTypeEnum>;
  /** 英文名 */
  englishName?: Maybe<Scalars["String"]>;
  /** 主键id */
  id?: Maybe<Scalars["ID"]>;
  /** 元数据id */
  mdsObjectId?: Maybe<Scalars["ID"]>;
  /** 元数据类型 */
  mdsType?: Maybe<MdsObjectTypeEnum>;
  /** 挂载节点id */
  menuId?: Maybe<Scalars["ID"]>;
  /** 主键 */
  primaryKey?: Maybe<Scalars["String"]>;
  /** 使用状态(停用,启用) */
  useStatus?: Maybe<Scalars["Boolean"]>;
};

/** 批量挂载基础资产入参 */
export type BasicAssetManagementMountingInput = {
  /** 元数据信息 */
  mdsData?: Maybe<Array<Maybe<MdsBasicAssetManagementData>>>;
  /** 挂载节点id */
  menuId?: Maybe<Scalars["ID"]>;
};

/** 分页查询基础资产入参 */
export type BasicAssetManagementPageInput = {
  /** 所属系统 */
  buzsys?: Maybe<Scalars["String"]>;
  /** 搜索关键字 */
  keyWord?: Maybe<Scalars["String"]>;
  /** 取数范围 */
  limit: Scalars["Int"];
  /** 目录id */
  menuId: Scalars["ID"];
  /** 取数偏移 */
  offset: Scalars["Int"];
  /** 排序规则 */
  sortBasicAsset?: Maybe<BasicAssetManagementSortEnum>;
  /** 排序字段, 0为英文名,1为中文名 */
  sortField?: Maybe<Scalars["Int"]>;
  /** 使用状态 */
  useStatus?: Maybe<Scalars["Boolean"]>;
};

/** 分页查询基础资产返回值 */
export type BasicAssetManagementPageVo = {
  __typename?: "BasicAssetManagementPageVo";
  /** 数据内容 */
  data?: Maybe<Array<Maybe<BasicAssetManagement>>>;
  /** 取数范围 */
  limit: Scalars["Int"];
  /** 取数偏移 */
  offset: Scalars["Int"];
  /** 数据总数 */
  total: Scalars["Int"];
};

export enum BasicAssetManagementSortEnum {
  Asc = "ASC",
  Desc = "DESC",
}

/** 元数据数据类型 */
export enum DbTypeEnum {
  Hive = "HIVE",
  Mysql = "MYSQL",
  None = "NONE",
  Oracle = "ORACLE",
  Postgresql = "POSTGRESQL",
  SqlServer = "SQLServer",
}

/** 接口元数据列表对象 */
export type InterfaceMetadataDto = {
  __typename?: "InterfaceMetadataDto";
  /** 类名 */
  apiClassName?: Maybe<Scalars["String"]>;
  /** 主键 */
  apiId?: Maybe<Scalars["ID"]>;
  /** 接口名称 */
  apiName?: Maybe<Scalars["String"]>;
  /** 业务负责方 */
  bizMngr?: Maybe<Scalars["String"]>;
  /** 输入参数中文 */
  inputCnParam?: Maybe<Scalars["String"]>;
  /** 输入参数英文 */
  inputEnParam?: Maybe<Scalars["String"]>;
  /** 技术负责方 */
  itMngr?: Maybe<Scalars["String"]>;
  /** 输出中文 */
  outputCnParam?: Maybe<Scalars["String"]>;
  /** 输出英文 */
  outputEnParam?: Maybe<Scalars["String"]>;
};

/** 分页查询接口元数据参数 */
export type InterfaceMetadataPageinput = {
  /** 技术负责人 */
  director?: Maybe<Scalars["String"]>;
  /** 目录Id */
  directoryId?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  /** 报文名称 */
  name?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
};

/** 接口元数据分页展示对象 */
export type InterfacePaginationResult = {
  __typename?: "InterfacePaginationResult";
  /** 数据列表 */
  data?: Maybe<Array<Maybe<InterfaceMetadataDto>>>;
  /** 页数量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  total?: Maybe<Scalars["Int"]>;
};

export type MdsBasicAssetManagementData = {
  /** 所属系统 */
  buzsys?: Maybe<Scalars["String"]>;
  /** 中文名 */
  chineseName?: Maybe<Scalars["String"]>;
  /** 数据库 */
  dataBaseName: Scalars["String"];
  /** 数据库类型 */
  dbSourceType: DbTypeEnum;
  /** 英文名 */
  englishName: Scalars["String"];
  /** 元数据id */
  mdsObjectId: Scalars["ID"];
  /** 元数据类型 */
  mdsType: MdsObjectTypeEnum;
  /** 主键 */
  primaryKey?: Maybe<Scalars["String"]>;
};

/**
 * 元数据字段
 *
 * Mds类型: 表/文件/接口
 */
export enum MdsObjectTypeEnum {
  File = "FILE",
  Interface = "INTERFACE",
  None = "NONE",
  Table = "TABLE",
  View = "VIEW",
}

export type MenuManagement = {
  __typename?: "MenuManagement";
  /** 主键id */
  id?: Maybe<Scalars["ID"]>;
  /** 菜单类型 文件/文件夹 默认为文件夹 */
  menuManagementType?: Maybe<MenuManagementTypeEnum>;
  /** 菜单名字 */
  menuName: Scalars["String"];
  /** 菜单类型 */
  menuType: MenuManagementEnum;
  /** 菜单上级id */
  parentId?: Maybe<Scalars["ID"]>;
};

/** 菜单类型-模块 */
export enum MenuManagementEnum {
  /** 基础资产 */
  Base = "BASE",
  /** 指标资产 */
  Norm = "NORM",
  /** 非结构化资产 */
  Unstructured = "UNSTRUCTURED",
}

/** 菜单入参 */
export type MenuManagementInput = {
  /** 主键id */
  id?: Maybe<Scalars["ID"]>;
  /** 菜单类型 文件/文件夹 */
  menuManagementType?: Maybe<MenuManagementTypeEnum>;
  /** 菜单名字 */
  menuName: Scalars["String"];
  /** 菜单类型 */
  menuType: MenuManagementEnum;
  /** 菜单上级id */
  parentId?: Maybe<Scalars["ID"]>;
};

/** 菜单类型-文件/目录 */
export enum MenuManagementTypeEnum {
  File = "FILE",
  Folder = "FOLDER",
}

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Int"]>;
  /** 批量启用/禁用资产 */
  controlAssets?: Maybe<Scalars["Boolean"]>;
  /** 批量删除基础资产信息 */
  daBatchDelBasicAssets?: Maybe<Scalars["Boolean"]>;
  /** 批量设置启用/停用 */
  daBatchSetUseStatus?: Maybe<Scalars["Boolean"]>;
  /** 删除菜单信息 */
  daDelMenu?: Maybe<Scalars["Boolean"]>;
  /** 挂载基础资产 */
  daMountingBasicAsset?: Maybe<Scalars["Boolean"]>;
  /** 保存/更新菜单信息 */
  daSaveOrUpdateMenu: Scalars["ID"];
  /** 批量删除挂载资产 */
  deleteAssets?: Maybe<Scalars["Boolean"]>;
};

export type MutationControlAssetsArgs = {
  ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  useStatus?: Maybe<Scalars["String"]>;
};

export type MutationDaBatchDelBasicAssetsArgs = {
  basicAssetIds: Array<Scalars["ID"]>;
  menuId: Scalars["ID"];
};

export type MutationDaBatchSetUseStatusArgs = {
  basicAssetIds: Array<Scalars["ID"]>;
  useStatus?: Maybe<Scalars["Boolean"]>;
};

export type MutationDaDelMenuArgs = {
  menuIds: Array<Scalars["ID"]>;
  menuType: MenuManagementEnum;
};

export type MutationDaMountingBasicAssetArgs = {
  input?: Maybe<BasicAssetManagementMountingInput>;
};

export type MutationDaSaveOrUpdateMenuArgs = {
  input?: Maybe<MenuManagementInput>;
};

export type MutationDeleteAssetsArgs = {
  buzType?: Maybe<Scalars["String"]>;
  directoryId?: Maybe<Scalars["ID"]>;
  ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Int"]>;
  /** 分页查询基础资产信息 */
  daPageQueryBasicAsset?: Maybe<BasicAssetManagementPageVo>;
  /** 查询菜单列表 */
  daQueryMenuList: Array<Maybe<MenuManagement>>;
  /** 分页获取资产列表 */
  listAssets?: Maybe<AssetsPaginationResult>;
  /** 分页获取接口元数据列表 */
  listInterfaceMetadatas?: Maybe<InterfacePaginationResult>;
  /** 分页获取报表元数据列表 */
  listReportMetadatas?: Maybe<ReportPaginationResult>;
  /** 批量挂载元数据 */
  mountMetadata?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDaPageQueryBasicAssetArgs = {
  input?: Maybe<BasicAssetManagementPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDaQueryMenuListArgs = {
  menuType: MenuManagementEnum;
  parentId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListAssetsArgs = {
  input?: Maybe<AssetsPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListInterfaceMetadatasArgs = {
  input?: Maybe<InterfaceMetadataPageinput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListReportMetadatasArgs = {
  input?: Maybe<ReportMetadataPageinput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMountMetadataArgs = {
  assetsInputs?: Maybe<Array<Maybe<AssetsInput>>>;
  buzType?: Maybe<Scalars["String"]>;
  directoryId: Scalars["ID"];
};

/** 分页获取报表元数据参数 */
export type ReportMetadataPageinput = {
  /** 报表周期 */
  cycle?: Maybe<Scalars["String"]>;
  /** 目录Id */
  directoryId?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  /** 资产报表名称 */
  name?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** 报表类型 */
  type?: Maybe<Scalars["String"]>;
};

/** 报表元数据分页展示对象 */
export type ReportPaginationResult = {
  __typename?: "ReportPaginationResult";
  /** 页数量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  total?: Maybe<Scalars["Int"]>;
};

export type DaBatchDelBasicAssetsMutationVariables = Exact<{
  basicAssetIds: Array<Scalars["ID"]> | Scalars["ID"];
  menuId: Scalars["ID"];
}>;

export type DaBatchDelBasicAssetsMutation = {
  __typename?: "Mutation";
  result?: boolean | null | undefined;
};

export type DaMountingBasicAssetMutationVariables = Exact<{
  input?: Maybe<BasicAssetManagementMountingInput>;
}>;

export type DaMountingBasicAssetMutation = {
  __typename?: "Mutation";
  result?: boolean | null | undefined;
};

export type DaPageQueryBasicAssetQueryVariables = Exact<{
  input?: Maybe<BasicAssetManagementPageInput>;
}>;

export type DaPageQueryBasicAssetQuery = {
  __typename?: "Query";
  result?:
    | {
        __typename?: "BasicAssetManagementPageVo";
        total: number;
        offset: number;
        limit: number;
        data?:
          | Array<
              | {
                  __typename?: "BasicAssetManagement";
                  id?: string | null | undefined;
                  mdsObjectId?: string | null | undefined;
                  buzsys?: string | null | undefined;
                  dataBaseName?: string | null | undefined;
                  englishName?: string | null | undefined;
                  chineseName?: string | null | undefined;
                  mdsType?: MdsObjectTypeEnum | null | undefined;
                  useStatus?: boolean | null | undefined;
                  menuId?: string | null | undefined;
                  dbSourceType?: DbTypeEnum | null | undefined;
                  primaryKey?: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type DaBatchSetUseStatusMutationVariables = Exact<{
  basicAssetIds: Array<Scalars["ID"]> | Scalars["ID"];
  useStatus?: Maybe<Scalars["Boolean"]>;
}>;

export type DaBatchSetUseStatusMutation = {
  __typename?: "Mutation";
  result?: boolean | null | undefined;
};

export type DaDelMenuMutationVariables = Exact<{
  menuIds: Array<Scalars["ID"]> | Scalars["ID"];
  menuType: MenuManagementEnum;
}>;

export type DaDelMenuMutation = {
  __typename?: "Mutation";
  result?: boolean | null | undefined;
};

export type DaQueryMenuListQueryVariables = Exact<{
  menuType: MenuManagementEnum;
  parentId?: Maybe<Scalars["ID"]>;
}>;

export type DaQueryMenuListQuery = {
  __typename?: "Query";
  result: Array<
    | {
        __typename?: "MenuManagement";
        id?: string | null | undefined;
        menuName: string;
        parentId?: string | null | undefined;
        menuType: MenuManagementEnum;
        menuManagementType?: MenuManagementTypeEnum | null | undefined;
      }
    | null
    | undefined
  >;
};

export type ControlAssetsMutationVariables = Exact<{
  ids?: Maybe<Array<Maybe<Scalars["ID"]>> | Maybe<Scalars["ID"]>>;
  useStatus?: Maybe<Scalars["String"]>;
}>;

export type ControlAssetsMutation = {
  __typename?: "Mutation";
  result?: boolean | null | undefined;
};

export type DeleteAssetsMutationVariables = Exact<{
  ids?: Maybe<Array<Maybe<Scalars["ID"]>> | Maybe<Scalars["ID"]>>;
  directoryId?: Maybe<Scalars["ID"]>;
  buzType?: Maybe<Scalars["String"]>;
}>;

export type DeleteAssetsMutation = {
  __typename?: "Mutation";
  result?: boolean | null | undefined;
};

export type ListAssetsQueryVariables = Exact<{
  input?: Maybe<AssetsPageInput>;
}>;

export type ListAssetsQuery = {
  __typename?: "Query";
  result?:
    | {
        __typename?: "AssetsPaginationResult";
        total?: number | null | undefined;
        offset?: number | null | undefined;
        limit?: number | null | undefined;
        data?:
          | Array<
              | {
                  __typename?: "AssetsInfoDto";
                  id?: string | null | undefined;
                  directoryId?: string | null | undefined;
                  metadataId?: string | null | undefined;
                  name?: string | null | undefined;
                  type?: string | null | undefined;
                  downloadsCount?: number | null | undefined;
                  userDept?: string | null | undefined;
                  responseDept?: string | null | undefined;
                  reviewStatus?: string | null | undefined;
                  useStatus?: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ListInterfaceMetadatasQueryVariables = Exact<{
  input?: Maybe<InterfaceMetadataPageinput>;
}>;

export type ListInterfaceMetadatasQuery = {
  __typename?: "Query";
  result?:
    | {
        __typename?: "InterfacePaginationResult";
        total?: number | null | undefined;
        offset?: number | null | undefined;
        limit?: number | null | undefined;
        data?:
          | Array<
              | {
                  __typename?: "InterfaceMetadataDto";
                  apiId?: string | null | undefined;
                  apiName?: string | null | undefined;
                  apiClassName?: string | null | undefined;
                  itMngr?: string | null | undefined;
                  bizMngr?: string | null | undefined;
                  inputEnParam?: string | null | undefined;
                  inputCnParam?: string | null | undefined;
                  outputEnParam?: string | null | undefined;
                  outputCnParam?: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ListReportMetadatasQueryVariables = Exact<{
  input?: Maybe<InterfaceMetadataPageinput>;
}>;

export type ListReportMetadatasQuery = {
  __typename?: "Query";
  result?:
    | {
        __typename?: "InterfacePaginationResult";
        total?: number | null | undefined;
        offset?: number | null | undefined;
        limit?: number | null | undefined;
      }
    | null
    | undefined;
};

export type MountMetadataQueryVariables = Exact<{
  assetsInputs?: Maybe<Array<Maybe<AssetsInput>> | Maybe<AssetsInput>>;
  directoryId: Scalars["ID"];
  buzType?: Maybe<Scalars["String"]>;
}>;

export type MountMetadataQuery = {
  __typename?: "Query";
  result?: Array<string | null | undefined> | null | undefined;
};

export type DaSaveOrUpdateMenuMutationVariables = Exact<{
  input?: Maybe<MenuManagementInput>;
}>;

export type DaSaveOrUpdateMenuMutation = {
  __typename?: "Mutation";
  result: string;
};

export const DaBatchDelBasicAssetsDocument = gql`
  mutation daBatchDelBasicAssets($basicAssetIds: [ID!]!, $menuId: ID!) {
    result: daBatchDelBasicAssets(
      basicAssetIds: $basicAssetIds
      menuId: $menuId
    )
  }
`;

/**
 * __useDaBatchDelBasicAssetsMutation__
 *
 * To run a mutation, you first call `useDaBatchDelBasicAssetsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDaBatchDelBasicAssetsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDaBatchDelBasicAssetsMutation({
 *   variables: {
 *     basicAssetIds: // value for 'basicAssetIds'
 *     menuId: // value for 'menuId'
 *   },
 * });
 */
export function useDaBatchDelBasicAssetsMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DaBatchDelBasicAssetsMutation,
        DaBatchDelBasicAssetsMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DaBatchDelBasicAssetsMutation,
          DaBatchDelBasicAssetsMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DaBatchDelBasicAssetsMutation,
    DaBatchDelBasicAssetsMutationVariables
  >(DaBatchDelBasicAssetsDocument, options);
}
export type DaBatchDelBasicAssetsMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DaBatchDelBasicAssetsMutation,
    DaBatchDelBasicAssetsMutationVariables
  >;
export const DaMountingBasicAssetDocument = gql`
  mutation daMountingBasicAsset($input: BasicAssetManagementMountingInput) {
    result: daMountingBasicAsset(input: $input)
  }
`;

/**
 * __useDaMountingBasicAssetMutation__
 *
 * To run a mutation, you first call `useDaMountingBasicAssetMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDaMountingBasicAssetMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDaMountingBasicAssetMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useDaMountingBasicAssetMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DaMountingBasicAssetMutation,
        DaMountingBasicAssetMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DaMountingBasicAssetMutation,
          DaMountingBasicAssetMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    DaMountingBasicAssetMutation,
    DaMountingBasicAssetMutationVariables
  >(DaMountingBasicAssetDocument, options);
}
export type DaMountingBasicAssetMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DaMountingBasicAssetMutation,
    DaMountingBasicAssetMutationVariables
  >;
export const DaPageQueryBasicAssetDocument = gql`
  query daPageQueryBasicAsset($input: BasicAssetManagementPageInput) {
    result: daPageQueryBasicAsset(input: $input) {
      total
      offset
      limit
      data {
        id
        mdsObjectId
        buzsys
        dataBaseName
        englishName
        chineseName
        mdsType
        useStatus
        menuId
        dbSourceType
        primaryKey
      }
    }
  }
`;

/**
 * __useDaPageQueryBasicAssetQuery__
 *
 * To run a query within a Vue component, call `useDaPageQueryBasicAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useDaPageQueryBasicAssetQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDaPageQueryBasicAssetQuery({
 *   input: // value for 'input'
 * });
 */
export function useDaPageQueryBasicAssetQuery(
  variables:
    | DaPageQueryBasicAssetQueryVariables
    | VueCompositionApi.Ref<DaPageQueryBasicAssetQueryVariables>
    | ReactiveFunction<DaPageQueryBasicAssetQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        DaPageQueryBasicAssetQuery,
        DaPageQueryBasicAssetQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          DaPageQueryBasicAssetQuery,
          DaPageQueryBasicAssetQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          DaPageQueryBasicAssetQuery,
          DaPageQueryBasicAssetQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    DaPageQueryBasicAssetQuery,
    DaPageQueryBasicAssetQueryVariables
  >(DaPageQueryBasicAssetDocument, variables, options);
}
export type DaPageQueryBasicAssetQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    DaPageQueryBasicAssetQuery,
    DaPageQueryBasicAssetQueryVariables
  >;
export const DaBatchSetUseStatusDocument = gql`
  mutation daBatchSetUseStatus($basicAssetIds: [ID!]!, $useStatus: Boolean) {
    result: daBatchSetUseStatus(
      basicAssetIds: $basicAssetIds
      useStatus: $useStatus
    )
  }
`;

/**
 * __useDaBatchSetUseStatusMutation__
 *
 * To run a mutation, you first call `useDaBatchSetUseStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDaBatchSetUseStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDaBatchSetUseStatusMutation({
 *   variables: {
 *     basicAssetIds: // value for 'basicAssetIds'
 *     useStatus: // value for 'useStatus'
 *   },
 * });
 */
export function useDaBatchSetUseStatusMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DaBatchSetUseStatusMutation,
        DaBatchSetUseStatusMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DaBatchSetUseStatusMutation,
          DaBatchSetUseStatusMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DaBatchSetUseStatusMutation,
    DaBatchSetUseStatusMutationVariables
  >(DaBatchSetUseStatusDocument, options);
}
export type DaBatchSetUseStatusMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DaBatchSetUseStatusMutation,
    DaBatchSetUseStatusMutationVariables
  >;
export const DaDelMenuDocument = gql`
  mutation daDelMenu($menuIds: [ID!]!, $menuType: MenuManagementEnum!) {
    result: daDelMenu(menuIds: $menuIds, menuType: $menuType)
  }
`;

/**
 * __useDaDelMenuMutation__
 *
 * To run a mutation, you first call `useDaDelMenuMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDaDelMenuMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDaDelMenuMutation({
 *   variables: {
 *     menuIds: // value for 'menuIds'
 *     menuType: // value for 'menuType'
 *   },
 * });
 */
export function useDaDelMenuMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DaDelMenuMutation,
        DaDelMenuMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DaDelMenuMutation,
          DaDelMenuMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DaDelMenuMutation,
    DaDelMenuMutationVariables
  >(DaDelMenuDocument, options);
}
export type DaDelMenuMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DaDelMenuMutation,
    DaDelMenuMutationVariables
  >;
export const DaQueryMenuListDocument = gql`
  query daQueryMenuList($menuType: MenuManagementEnum!, $parentId: ID) {
    result: daQueryMenuList(menuType: $menuType, parentId: $parentId) {
      id
      menuName
      parentId
      menuType
      menuManagementType
    }
  }
`;

/**
 * __useDaQueryMenuListQuery__
 *
 * To run a query within a Vue component, call `useDaQueryMenuListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDaQueryMenuListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDaQueryMenuListQuery({
 *   menuType: // value for 'menuType'
 *   parentId: // value for 'parentId'
 * });
 */
export function useDaQueryMenuListQuery(
  variables:
    | DaQueryMenuListQueryVariables
    | VueCompositionApi.Ref<DaQueryMenuListQueryVariables>
    | ReactiveFunction<DaQueryMenuListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        DaQueryMenuListQuery,
        DaQueryMenuListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          DaQueryMenuListQuery,
          DaQueryMenuListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          DaQueryMenuListQuery,
          DaQueryMenuListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    DaQueryMenuListQuery,
    DaQueryMenuListQueryVariables
  >(DaQueryMenuListDocument, variables, options);
}
export type DaQueryMenuListQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    DaQueryMenuListQuery,
    DaQueryMenuListQueryVariables
  >;
export const ControlAssetsDocument = gql`
  mutation controlAssets($ids: [ID], $useStatus: String) {
    result: controlAssets(ids: $ids, useStatus: $useStatus)
  }
`;

/**
 * __useControlAssetsMutation__
 *
 * To run a mutation, you first call `useControlAssetsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useControlAssetsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useControlAssetsMutation({
 *   variables: {
 *     ids: // value for 'ids'
 *     useStatus: // value for 'useStatus'
 *   },
 * });
 */
export function useControlAssetsMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ControlAssetsMutation,
        ControlAssetsMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ControlAssetsMutation,
          ControlAssetsMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    ControlAssetsMutation,
    ControlAssetsMutationVariables
  >(ControlAssetsDocument, options);
}
export type ControlAssetsMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ControlAssetsMutation,
    ControlAssetsMutationVariables
  >;
export const DeleteAssetsDocument = gql`
  mutation deleteAssets($ids: [ID], $directoryId: ID, $buzType: String) {
    result: deleteAssets(
      ids: $ids
      directoryId: $directoryId
      buzType: $buzType
    )
  }
`;

/**
 * __useDeleteAssetsMutation__
 *
 * To run a mutation, you first call `useDeleteAssetsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssetsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteAssetsMutation({
 *   variables: {
 *     ids: // value for 'ids'
 *     directoryId: // value for 'directoryId'
 *     buzType: // value for 'buzType'
 *   },
 * });
 */
export function useDeleteAssetsMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteAssetsMutation,
        DeleteAssetsMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteAssetsMutation,
          DeleteAssetsMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    DeleteAssetsMutation,
    DeleteAssetsMutationVariables
  >(DeleteAssetsDocument, options);
}
export type DeleteAssetsMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteAssetsMutation,
    DeleteAssetsMutationVariables
  >;
export const ListAssetsDocument = gql`
  query listAssets($input: AssetsPageInput) {
    result: listAssets(input: $input) {
      total
      offset
      limit
      data {
        id
        directoryId
        metadataId
        name
        type
        downloadsCount
        userDept
        responseDept
        reviewStatus
        useStatus
      }
    }
  }
`;

/**
 * __useListAssetsQuery__
 *
 * To run a query within a Vue component, call `useListAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAssetsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListAssetsQuery({
 *   input: // value for 'input'
 * });
 */
export function useListAssetsQuery(
  variables:
    | ListAssetsQueryVariables
    | VueCompositionApi.Ref<ListAssetsQueryVariables>
    | ReactiveFunction<ListAssetsQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAssetsQuery,
        ListAssetsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAssetsQuery,
          ListAssetsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAssetsQuery,
          ListAssetsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListAssetsQuery,
    ListAssetsQueryVariables
  >(ListAssetsDocument, variables, options);
}
export type ListAssetsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<ListAssetsQuery, ListAssetsQueryVariables>;
export const ListInterfaceMetadatasDocument = gql`
  query listInterfaceMetadatas($input: InterfaceMetadataPageinput) {
    result: listInterfaceMetadatas(input: $input) {
      total
      offset
      limit
      data {
        apiId
        apiName
        apiClassName
        itMngr
        bizMngr
        inputEnParam
        inputCnParam
        outputEnParam
        outputCnParam
      }
    }
  }
`;

/**
 * __useListInterfaceMetadatasQuery__
 *
 * To run a query within a Vue component, call `useListInterfaceMetadatasQuery` and pass it any options that fit your needs.
 * When your component renders, `useListInterfaceMetadatasQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListInterfaceMetadatasQuery({
 *   input: // value for 'input'
 * });
 */
export function useListInterfaceMetadatasQuery(
  variables:
    | ListInterfaceMetadatasQueryVariables
    | VueCompositionApi.Ref<ListInterfaceMetadatasQueryVariables>
    | ReactiveFunction<ListInterfaceMetadatasQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        ListInterfaceMetadatasQuery,
        ListInterfaceMetadatasQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListInterfaceMetadatasQuery,
          ListInterfaceMetadatasQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListInterfaceMetadatasQuery,
          ListInterfaceMetadatasQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListInterfaceMetadatasQuery,
    ListInterfaceMetadatasQueryVariables
  >(ListInterfaceMetadatasDocument, variables, options);
}
export type ListInterfaceMetadatasQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListInterfaceMetadatasQuery,
    ListInterfaceMetadatasQueryVariables
  >;
export const ListReportMetadatasDocument = gql`
  query listReportMetadatas($input: InterfaceMetadataPageinput) {
    result: listInterfaceMetadatas(input: $input) {
      total
      offset
      limit
    }
  }
`;

/**
 * __useListReportMetadatasQuery__
 *
 * To run a query within a Vue component, call `useListReportMetadatasQuery` and pass it any options that fit your needs.
 * When your component renders, `useListReportMetadatasQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListReportMetadatasQuery({
 *   input: // value for 'input'
 * });
 */
export function useListReportMetadatasQuery(
  variables:
    | ListReportMetadatasQueryVariables
    | VueCompositionApi.Ref<ListReportMetadatasQueryVariables>
    | ReactiveFunction<ListReportMetadatasQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        ListReportMetadatasQuery,
        ListReportMetadatasQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListReportMetadatasQuery,
          ListReportMetadatasQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListReportMetadatasQuery,
          ListReportMetadatasQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListReportMetadatasQuery,
    ListReportMetadatasQueryVariables
  >(ListReportMetadatasDocument, variables, options);
}
export type ListReportMetadatasQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListReportMetadatasQuery,
    ListReportMetadatasQueryVariables
  >;
export const MountMetadataDocument = gql`
  query mountMetadata(
    $assetsInputs: [AssetsInput]
    $directoryId: ID!
    $buzType: String
  ) {
    result: mountMetadata(
      assetsInputs: $assetsInputs
      directoryId: $directoryId
      buzType: $buzType
    )
  }
`;

/**
 * __useMountMetadataQuery__
 *
 * To run a query within a Vue component, call `useMountMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useMountMetadataQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMountMetadataQuery({
 *   assetsInputs: // value for 'assetsInputs'
 *   directoryId: // value for 'directoryId'
 *   buzType: // value for 'buzType'
 * });
 */
export function useMountMetadataQuery(
  variables:
    | MountMetadataQueryVariables
    | VueCompositionApi.Ref<MountMetadataQueryVariables>
    | ReactiveFunction<MountMetadataQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MountMetadataQuery,
        MountMetadataQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MountMetadataQuery,
          MountMetadataQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MountMetadataQuery,
          MountMetadataQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    MountMetadataQuery,
    MountMetadataQueryVariables
  >(MountMetadataDocument, variables, options);
}
export type MountMetadataQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    MountMetadataQuery,
    MountMetadataQueryVariables
  >;
export const DaSaveOrUpdateMenuDocument = gql`
  mutation daSaveOrUpdateMenu($input: MenuManagementInput) {
    result: daSaveOrUpdateMenu(input: $input)
  }
`;

/**
 * __useDaSaveOrUpdateMenuMutation__
 *
 * To run a mutation, you first call `useDaSaveOrUpdateMenuMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDaSaveOrUpdateMenuMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDaSaveOrUpdateMenuMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useDaSaveOrUpdateMenuMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DaSaveOrUpdateMenuMutation,
        DaSaveOrUpdateMenuMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DaSaveOrUpdateMenuMutation,
          DaSaveOrUpdateMenuMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    DaSaveOrUpdateMenuMutation,
    DaSaveOrUpdateMenuMutationVariables
  >(DaSaveOrUpdateMenuDocument, options);
}
export type DaSaveOrUpdateMenuMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DaSaveOrUpdateMenuMutation,
    DaSaveOrUpdateMenuMutationVariables
  >;
