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

export type BasicAssetManagement = {
  __typename?: "BasicAssetManagement";
  /** 所属系统 */
  buzsys?: Maybe<Scalars["String"]>;
  /** 中文名 */
  chineseName?: Maybe<Scalars["String"]>;
  /** 数据库 */
  dataBaseName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  dbSourceType?: Maybe<DbSourceTypeEnum>;
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
  /** 所属系统 */
  buzsys?: Maybe<Scalars["String"]>;
  /** 中文名 */
  chineseName?: Maybe<Scalars["String"]>;
  /** 数据库 */
  dataBaseName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  dbSourceType?: Maybe<DbSourceTypeEnum>;
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

/** 元数据数据源类型 */
export enum DbSourceTypeEnum {
  Elasticsearch = "ELASTICSEARCH",
  Gbase_8A = "GBASE_8A",
  Hbase = "HBASE",
  Hive2MysqlMetastore = "HIVE2_MYSQL_METASTORE",
  MicrosoftSqlServer = "MICROSOFT_SQL_SERVER",
  /** only update by json */
  Mongodb = "MONGODB",
  Mpp = "MPP",
  Mysql = "MYSQL",
  Mysql51 = "MYSQL51",
  Mysql55 = "MYSQL55",
  Mysql56 = "MYSQL56",
  Mysql80 = "MYSQL80",
  OraClE = "ORAClE",
  OraClE11 = "ORAClE11",
  Postgresql = "POSTGRESQL",
}

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
  /** 菜单名字 */
  menuName: Scalars["String"];
  /** 菜单类型 */
  menuType: MenuManagementEnum;
  /** 菜单上级id */
  parentId?: Maybe<Scalars["ID"]>;
};

export enum MenuManagementEnum {
  /** 基础资产 */
  Base = "BASE",
  /** 指标资产 */
  Norm = "NORM",
  /** 非结构化资产 */
  Unstructured = "UNSTRUCTURED",
}

export type MenuManagementInput = {
  /** 主键id */
  id?: Maybe<Scalars["ID"]>;
  /** 菜单名字 */
  menuName: Scalars["String"];
  /** 菜单类型 */
  menuType: MenuManagementEnum;
  /** 菜单上级id */
  parentId?: Maybe<Scalars["ID"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Int"]>;
  /** 批量删除基础资产信息 */
  batchDelBasicAssets?: Maybe<Scalars["Boolean"]>;
  /** 批量设置启用/停用 */
  batchSetUseStatus?: Maybe<Scalars["Boolean"]>;
  /** 删除菜单信息 */
  daDelMenu?: Maybe<Scalars["Boolean"]>;
  /** 保存/更新菜单信息 */
  daSaveOrUpdateMenu: Scalars["ID"];
  /** 挂载基础资产 */
  mountingBasicAsset?: Maybe<Scalars["Boolean"]>;
};

export type MutationBatchDelBasicAssetsArgs = {
  basicAssetIds: Array<Scalars["ID"]>;
};

export type MutationBatchSetUseStatusArgs = {
  basicAssetIds: Array<Scalars["ID"]>;
  useStatus?: Maybe<Scalars["Boolean"]>;
};

export type MutationDaDelMenuArgs = {
  menuIds: Array<Scalars["ID"]>;
};

export type MutationDaSaveOrUpdateMenuArgs = {
  input?: Maybe<MenuManagementInput>;
};

export type MutationMountingBasicAssetArgs = {
  input?: Maybe<Array<Maybe<BasicAssetManagementMountingInput>>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Int"]>;
  /** 查询菜单列表 */
  daQueryMenuList: Array<Maybe<MenuManagement>>;
  /** 分页查询基础资产信息 */
  pageQueryBasicAsset?: Maybe<BasicAssetManagementPageVo>;
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
export type QueryPageQueryBasicAssetArgs = {
  input?: Maybe<BasicAssetManagementPageInput>;
};

export type DaDelMenuMutationVariables = Exact<{
  menuIds: Array<Scalars["ID"]> | Scalars["ID"];
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
      }
    | null
    | undefined
  >;
};

export type DaSaveOrUpdateMenuMutationVariables = Exact<{
  input?: Maybe<MenuManagementInput>;
}>;

export type DaSaveOrUpdateMenuMutation = {
  __typename?: "Mutation";
  result: string;
};

export const DaDelMenuDocument = gql`
  mutation daDelMenu($menuIds: [ID!]!) {
    result: daDelMenu(menuIds: $menuIds)
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
