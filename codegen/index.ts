import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "vue";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

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
  Unstructured = "UNSTRUCTURED"
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
  /** 删除菜单信息 */
  daDelMenu?: Maybe<Scalars["Boolean"]>;
  /** 保存/更新菜单信息 */
  daSaveOrUpdateMenu: Scalars["ID"];
};

export type MutationDaDelMenuArgs = {
  menuIds: Array<Scalars["ID"]>;
};

export type MutationDaSaveOrUpdateMenuArgs = {
  input?: Maybe<MenuManagementInput>;
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
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDaQueryMenuListArgs = {
  menuType: MenuManagementEnum;
};

export type DaQueryMenuListQueryVariables = Exact<{
  menuType: MenuManagementEnum;
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

export const DaQueryMenuListDocument = gql`
  query daQueryMenuList($menuType: MenuManagementEnum!) {
    result: daQueryMenuList(menuType: $menuType) {
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
export type DaQueryMenuListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  DaQueryMenuListQuery,
  DaQueryMenuListQueryVariables
>;
