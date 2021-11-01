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
  JSON: any;
  LocalDateTime: any;
  /** Long type */
  Long: any;
};

/** 血缘解析任务类型枚举 */
export enum BloodRelationTaskTypeEnum {
  /** 通过解析上传到ambry服务的CSV文件添加血缘/影响关系 */
  CsvFid = "CSV_FID",
  /** 通过解析上传的CSV文件添加血缘/影响关系 */
  CsvUpload = "CSV_UPLOAD",
  /** 通过解析上传到ambry服务的SQL Zip FileId添加血缘/影响关系 */
  SqlZipFid = "SQL_ZIP_FID",
  /** 通过解析URL下载SQL Zip添加血缘/影响关系 */
  SqlZipUrl = "SQL_ZIP_URL",
}

/** 菜单业务类型: 文件夹 / 文件 */
export enum CategoryBusiTypeEnum {
  /** 文件下可以挂MdsObject对象 */
  File = "FILE",
  /** 业务类目文件夹 */
  Folder = "FOLDER",
  None = "NONE",
}

export type CategoryDto = {
  __typename?: "CategoryDTO";
  /** 菜单业务类型: 文件夹 / 文件 */
  busiLevelType?: Maybe<CategoryBusiTypeEnum>;
  id: Scalars["ID"];
  level: Scalars["Int"];
  /** 菜单中所有MdsObject的类型: 表 / 接口 / 文件 */
  mdsType?: Maybe<MdsObjectTypeEnum>;
  name?: Maybe<Scalars["String"]>;
  parentId: Scalars["ID"];
  /** 通配符 */
  pattern?: Maybe<Scalars["String"]>;
  /** Schema名字 */
  schema?: Maybe<Scalars["String"]>;
  /** 菜单状态 */
  status: CategoryStatusEnum;
  /** 菜单技术层级类型: 系统 / 应用/ 库 */
  techLevelType?: Maybe<CategoryTechLevelTypeEnum>;
  type: CategoryTypeEnum;
};

/** Mds菜单状态 */
export enum CategoryStatusEnum {
  /** 菜单可用 */
  Available = "AVAILABLE",
  /** 菜单不可用 */
  Disable = "DISABLE",
}

/** 菜单技术层级类型: 系统 / 应用　/ 库 */
export enum CategoryTechLevelTypeEnum {
  Application = "APPLICATION",
  Database = "DATABASE",
  None = "NONE",
  System = "SYSTEM",
}

/** 菜单类型：技术类目菜单　业务类目菜单 */
export enum CategoryTypeEnum {
  Business = "BUSINESS",
  Techonlogy = "TECHONLOGY",
}

/** 检查计划任务状态 */
export enum CheckTaskStateEnum {
  /** 错误 */
  Error = "ERROR",
  /** 正常 */
  Normal = "NORMAL",
  /** 预警 */
  Warning = "WARNING",
}

/** 业务技术分类枚举 */
export enum ClassifyEnum {
  /** 业务 */
  Business = "BUSINESS",
  /** 技术 */
  Techonlogy = "TECHONLOGY",
}

/** 元数据需要的几个字段vo */
export type D4aMdsObjectField = {
  __typename?: "D4aMdsObjectField";
  /** 数据安全-已设置安全级别的字段数量 */
  d4aFieldCount?: Maybe<Scalars["Int"]>;
  /** 元数据表权限设置状态 */
  d4aSfObjectSettingStatus?: Maybe<Scalars["String"]>;
  /** 数据安全-已拥有使用表权限的用户数量 */
  d4aUserCount?: Maybe<Scalars["Int"]>;
};

/** DDL 版本对象 */
export type DdlVersion = {
  __typename?: "DDLVersion";
  ddl?: Maybe<Scalars["String"]>;
  versionId: Scalars["ID"];
};

export type DsSearchMds = {
  __typename?: "DSSearchMds";
  columnId?: Maybe<Scalars["ID"]>;
  columnName?: Maybe<Scalars["String"]>;
  firstId?: Maybe<Scalars["ID"]>;
  firstName?: Maybe<Scalars["String"]>;
  mdsObjectId?: Maybe<Scalars["ID"]>;
  secondId?: Maybe<Scalars["ID"]>;
  secondName?: Maybe<Scalars["String"]>;
  similarValue?: Maybe<Scalars["Float"]>;
  tableName?: Maybe<Scalars["String"]>;
  techCategoryId?: Maybe<Scalars["ID"]>;
  techCategoryName?: Maybe<Scalars["String"]>;
};

export type DsSearchMdsResult = {
  __typename?: "DSSearchMdsResult";
  data?: Maybe<Array<Maybe<DsSearchMds>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** 检查间隔 */
export enum DateEnum {
  Day = "DAY",
  Month = "MONTH",
  Week = "WEEK",
}

export enum DayOfWeek {
  Friday = "FRIDAY",
  Monday = "MONDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
  Thursday = "THURSDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
}

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

export type DpfDataCost = {
  __typename?: "DpfDataCost";
  /** 产品工厂-计算成本 */
  dpfCalculateCost?: Maybe<Scalars["Float"]>;
  /** 产品工厂-数据成本总值 */
  dpfDataCostTotal?: Maybe<Scalars["Float"]>;
  /** 产品工厂-存储成本 */
  dpfStoreCost?: Maybe<Scalars["Float"]>;
};

export type DpfDataPrice = {
  __typename?: "DpfDataPrice";
  /** 产品工厂-空置率 */
  dpfNullRate?: Maybe<Scalars["Float"]>;
  /** 产品工厂-单价 */
  dpfPrice?: Maybe<Scalars["ID"]>;
  /** 产品工厂-记录数 */
  dpfRowConut?: Maybe<Scalars["ID"]>;
  /** 产品工厂-价值 */
  dpfTotalPrice?: Maybe<Scalars["ID"]>;
  /** 设置数 */
  settingColumnNumber?: Maybe<Scalars["Int"]>;
};

export enum DqsExecutionReturnCode {
  /** 错误 */
  Error = "ERROR",
  /** 严重错误 */
  Fatal = "FATAL",
  /** 一般 */
  Info = "INFO",
  /** 正常 */
  Normal = "NORMAL",
  /** 警告 */
  Warning = "WARNING",
}

/** 数据质量检查计划 */
export type DqsSchedule = {
  __typename?: "DqsSchedule";
  /** 业务负责人 */
  busiLinkman: User;
  /** 检查结果临时目标表 */
  checkResultTemporaryTable?: Maybe<Scalars["String"]>;
  /**
   * 检查任务状态
   * 状态 正常，错误 预警
   */
  checkTaskState?: Maybe<CheckTaskStateEnum>;
  /** 检查类型 */
  checkTypeId?: Maybe<Scalars["Int"]>;
  /** 描述 */
  desc?: Maybe<Scalars["String"]>;
  /** 错误级别配置å */
  errorLevels?: Maybe<Array<Maybe<ScheduleErrorVo>>>;
  /** 类型：0 占比 1 错误数 */
  errorType?: Maybe<Scalars["Int"]>;
  /** ETL 任务编号 */
  etlJobId?: Maybe<Scalars["String"]>;
  /** ETL 任务名称 */
  etlJobName?: Maybe<Scalars["String"]>;
  /** 执行阶段 */
  executeStageId?: Maybe<Scalars["Int"]>;
  /** 规则检查执行是否完成 */
  finished?: Maybe<Scalars["Boolean"]>;
  /** 规则是否可用 true:是 false:否 null:未知 */
  functional?: Maybe<Scalars["Boolean"]>;
  /** UUID */
  id: Scalars["ID"];
  /** 检查间隔 */
  interval?: Maybe<DateEnum>;
  /** 位置 */
  location?: Maybe<LocationEnum>;
  /** 更新时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 是否发送 email */
  noticeEmail?: Maybe<Scalars["Boolean"]>;
  /** 是否发送短信 */
  noticePhone?: Maybe<Scalars["Boolean"]>;
  /** 检查任务状态 */
  rc?: Maybe<DqsExecutionReturnCode>;
  /** 临时结果保留天数 */
  resultTemporaryDay?: Maybe<Scalars["Int"]>;
  /** 检查任务执行状态 */
  runningState?: Maybe<Scalars["Boolean"]>;
  /** 历史 */
  scheduleHistory?: Maybe<Array<Maybe<ScheduleHistory>>>;
  /** 自动工单配置 */
  scheduleWorkFlow?: Maybe<ScheduleWorkFlowVo>;
  /** 脚本模板参数值 */
  setting?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 是否被收藏 */
  starred?: Maybe<Scalars["Boolean"]>;
  /** 是否被订阅 */
  subscribed?: Maybe<Scalars["Boolean"]>;
  /** 标签 */
  tags?: Maybe<Array<Maybe<TagInfoResult>>>;
  /** 检查对象 */
  target?: Maybe<DqsTarget>;
  /** 检查计划最新执行时间 */
  taskRunTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 技术负责人 */
  techLinkman: User;
  /** 检查模板 */
  template?: Maybe<DqsTemplate>;
  /** 相关脚本模板 */
  templateId?: Maybe<Scalars["ID"]>;
  /** 检查执行时间变量 */
  variable?: Maybe<Scalars["Int"]>;
  /** 工单数量 */
  workFlowTotal?: Maybe<Scalars["Int"]>;
};

/** 数据质量检查对象（数据库表字段） */
export type DqsTarget = {
  __typename?: "DqsTarget";
  /** 所属应用 */
  applyId?: Maybe<Scalars["ID"]>;
  applyName?: Maybe<Scalars["String"]>;
  /** 字段 */
  columnIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  columns?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 数据库 */
  databaseId?: Maybe<Scalars["ID"]>;
  databaseName?: Maybe<Scalars["String"]>;
  /** 所属系统 */
  systemId?: Maybe<Scalars["ID"]>;
  systemName?: Maybe<Scalars["String"]>;
  /** 表 */
  tableId?: Maybe<Scalars["ID"]>;
  tableName?: Maybe<Scalars["String"]>;
};

/** 数据质量模板字段 */
export type DqsTemplate = {
  __typename?: "DqsTemplate";
  /** 描述 */
  checkTypeDesc: Scalars["String"];
  /** 业务技术分类 */
  classifyEnum: ClassifyEnum;
  /** 创建时间 */
  createTm: Scalars["LocalDateTime"];
  /** 创建者 */
  createdBy: User;
  /** * ds信息项ID */
  dsAttrId?: Maybe<Scalars["ID"]>;
  /** ds基础标准ID */
  dsSubId?: Maybe<Scalars["ID"]>;
  /** 错误明细表字段描述 */
  errColumnDesc?: Maybe<Array<Maybe<DqsTemplateParam>>>;
  /** UUID */
  id: Scalars["ID"];
  /** 名称 */
  name: Scalars["String"];
  /** 脚本参数定义 */
  params?: Maybe<Array<DqsTemplateParam>>;
  /** 质量问题分类 */
  qualityProblems: Scalars["ID"];
  /** 脚本结果字段定义 */
  resultFields: Array<DqsTemplateResultField>;
  /** 结果集多选单选 */
  resultSet: ResultSetEnum;
  /** 脚本内容 */
  script: Scalars["String"];
  /** 引用次数 */
  tasksNumber?: Maybe<Scalars["Int"]>;
};

/** 数据质量检查脚本参数 */
export type DqsTemplateParam = {
  __typename?: "DqsTemplateParam";
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  /** 参数名 */
  name: Scalars["String"];
};

/** 数据质量检查脚本结果字段 */
export type DqsTemplateResultField = {
  __typename?: "DqsTemplateResultField";
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  /** 字段名 */
  result: Scalars["String"];
  /** 类型 */
  type?: Maybe<Scalars["String"]>;
};

/** 审计状态 */
export enum DsAuditStatus {
  Auditing = "AUDITING",
  /** 驳回 */
  Passed = "PASSED",
  /** 草稿 （20191204更新注释） */
  Rejected = "REJECTED",
  /** 审核中 */
  Unaudited = "UNAUDITED",
}

/** mds 一期对接作废对象 */
export type DsBasicStandard = {
  __typename?: "DsBasicStandard";
  /** 路径 */
  description: Scalars["String"];
  /** 是否订阅 */
  dsbasicStandardValueInfos?: Maybe<Array<DsBasicStandardValue>>;
  id: Scalars["ID"];
  /** 描述 */
  isCollect: Scalars["Boolean"];
  /** 是否收藏 */
  isSubscribe: Scalars["Boolean"];
  /** 主键编号 */
  name: Scalars["String"];
  /** 名称 */
  nodePath: Scalars["String"];
};

/** mds 一期对接作废对象 */
export type DsBasicStandardValue = {
  __typename?: "DsBasicStandardValue";
  id?: Maybe<Scalars["ID"]>;
};

/** 公共代码 */
export type DsCommonCode = {
  __typename?: "DsCommonCode";
  /** 版本 */
  auditStatus?: Maybe<DsAuditStatus>;
  /** 主键 */
  cnName?: Maybe<Scalars["String"]>;
  /** 更新者 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 审核状态 */
  creator?: Maybe<User>;
  /** 状态 */
  description?: Maybe<Scalars["String"]>;
  /** 数据长度 */
  downloads?: Maybe<Scalars["Int"]>;
  /** 中文名称 */
  enName?: Maybe<Scalars["String"]>;
  /** 映射系统个数 */
  hot?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["ID"]>;
  /** 数据类型 */
  length?: Maybe<Scalars["Int"]>;
  /** 创建者 */
  modifier?: Maybe<User>;
  /** 创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 标准id */
  number?: Maybe<Scalars["String"]>;
  /** 编号 */
  rule?: Maybe<Scalars["String"]>;
  /** 英文名称 */
  standardId?: Maybe<Scalars["String"]>;
  /** 访问热度 */
  status?: Maybe<DsStandardStatus>;
  /** 下载次数 */
  systemCount?: Maybe<Scalars["Int"]>;
  /** 编码规则 */
  type?: Maybe<Scalars["String"]>;
  /** 业务含义 */
  version?: Maybe<Scalars["String"]>;
};

export type DsStand = {
  __typename?: "DsStand";
  /** 标准类型 */
  cnName?: Maybe<Scalars["String"]>;
  /** 英文名称 */
  description?: Maybe<Scalars["String"]>;
  /** 中文名称 */
  enName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  /** 主键 */
  type?: Maybe<DsStandardType>;
};

/** 标准状态 */
export enum DsStandardStatus {
  /** 启用 */
  Deactivate = "DEACTIVATE",
  Enable = "ENABLE",
}

/** 标准类型 */
export enum DsStandardType {
  /** 基础标准信息项 */
  Code = "CODE",
  /** 公共代码 */
  CodeValue = "CODE_VALUE",
  /** 公共代码编码 */
  Institutional = "INSTITUTIONAL",
  /** 业务术语信息项 */
  Name = "NAME",
  Standard = "STANDARD",
  /** 基础标准 */
  StandardAtt = "STANDARD_ATT",
  /** 机构清单 */
  Statistics = "STATISTICS",
  /** 统计标准 */
  StatisticsAtt = "STATISTICS_ATT",
  /** 统计标准信息项 */
  Term = "TERM",
  /** 业务术语 */
  TermAtt = "TERM_ATT",
}

export enum EmailTypeEnum {
  /** 提问 */
  Questions = "QUESTIONS",
  /** 站内信 */
  Station = "STATION",
}

/**
 *   Input
 *
 * 拓展字段输入,拓展字段用于MDS对象字段拓展,通过 ID_TenantID_Type区分
 */
export type ExpandFieldInput = {
  /** 被拓展的对象的ID如MdsObjectId, MdsColumnId */
  objId: Scalars["ID"];
  /** 拓展字段的值,如备注内容(200字符内存) */
  value: Scalars["String"];
};

/** 过滤条件Demo数据 */
export type FilterTermItem = {
  __typename?: "FilterTermItem";
  /** 过滤条件检索用的 id */
  id?: Maybe<Scalars["ID"]>;
  /** 过滤条件显示用的名字 */
  name?: Maybe<Scalars["String"]>;
};

/** 元数据浏览统计 */
export type HomeMdsBrowseTop10Vo = {
  __typename?: "HomeMdsBrowseTop10Vo";
  /** 统计时间 */
  createTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 元数据信息 */
  mdsObjects?: Maybe<Array<MdsObject>>;
};

/** 元数据分布占比信息 */
export type HomeMdsDistributionRateVo = {
  __typename?: "HomeMdsDistributionRateVo";
  /** 数量 */
  count?: Maybe<Scalars["ID"]>;
  /** 占比信息 */
  rate?: Maybe<Scalars["Float"]>;
  /** 总数 */
  total?: Maybe<Scalars["ID"]>;
  /** 分布类型 */
  typeName?: Maybe<Scalars["String"]>;
};

/** 元数据分布信息 */
export type HomeMdsDistributionVo = {
  __typename?: "HomeMdsDistributionVo";
  /** 统计时间 */
  createTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 占比信息 */
  rates?: Maybe<Array<HomeMdsDistributionRateVo>>;
};

/** 元数据分类统计类目信息 */
export type HomeMdsStatisticalBarChartItem = {
  __typename?: "HomeMdsStatisticalBarChartItem";
  /** 分类主键 */
  id?: Maybe<Scalars["ID"]>;
  /** 分类名称 */
  name?: Maybe<Scalars["String"]>;
  /** 节点信息 */
  nodes?: Maybe<Array<HomeMdsStatisticalBarChartNode>>;
};

/** 元数据分类统计类目下节点信息 */
export type HomeMdsStatisticalBarChartNode = {
  __typename?: "HomeMdsStatisticalBarChartNode";
  /** 数量 */
  count?: Maybe<Scalars["ID"]>;
  /** 分布类型 */
  typeName?: Maybe<Scalars["String"]>;
};

/** 元数据条形柱状图_分布数据信息 */
export type HomeMdsStatisticalBarChartVo = {
  __typename?: "HomeMdsStatisticalBarChartVo";
  /** 统计时间 */
  createTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 分布类目信息 */
  items?: Maybe<Array<HomeMdsStatisticalBarChartItem>>;
};

/** 元数据统计信息 */
export type HomeMdsStatisticalVo = {
  __typename?: "HomeMdsStatisticalVo";
  /** 今日新增元数据数量 */
  addMdsObjectCountByToday?: Maybe<Scalars["ID"]>;
  /** 统计时间 */
  createTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 累计技术元数据数量 */
  mdsObjectCount?: Maybe<Scalars["ID"]>;
  /** 系统总数 */
  systemCount?: Maybe<Scalars["ID"]>;
  /** 今日变更元数据数量 */
  updateMdsObjectCountByToday?: Maybe<Scalars["ID"]>;
};

export type ImportJobCondition = {
  beginDate?: Maybe<Scalars["LocalDateTime"]>;
  /** 目录类型：TECHONLOGY/BUSINESS */
  categoryType: Scalars["String"];
  dbSourceId?: Maybe<Scalars["ID"]>;
  endDate?: Maybe<Scalars["LocalDateTime"]>;
  keyword?: Maybe<Scalars["String"]>;
  offset: Scalars["Int"];
  size: Scalars["Int"];
  status?: Maybe<ImportJobStatusEnum>;
};

/** import job */
export type ImportJobDto = {
  __typename?: "ImportJobDTO";
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  status?: Maybe<ImportJobStatusEnum>;
};

export type ImportJobMonitorDto = {
  __typename?: "ImportJobMonitorDTO";
  categoryName?: Maybe<Scalars["String"]>;
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  dbSourceName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  status?: Maybe<ImportJobStatusEnum>;
};

export type ImportJobMonitorPageOutput = {
  __typename?: "ImportJobMonitorPageOutput";
  data?: Maybe<Array<Maybe<ImportJobMonitorDto>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

export type ImportJobPageOutput = {
  __typename?: "ImportJobPageOutput";
  data?: Maybe<Array<Maybe<ImportJobDto>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** 运行状态 */
export enum ImportJobStatusEnum {
  Applying = "APPLYING",
  Cancel = "CANCEL",
  Diff = "DIFF",
  Fail = "FAIL",
  Finished = "FINISHED",
  Init = "INIT",
  Running = "RUNNING",
  Transport = "TRANSPORT",
  TransportFinished = "TRANSPORT_FINISHED",
}

export type LabelApidto = {
  __typename?: "LabelAPIDTO";
  /** 简称 */
  code?: Maybe<Scalars["String"]>;
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 标签类型 */
  type?: Maybe<LabelType>;
};

export type LabelDto = {
  __typename?: "LabelDTO";
  /** 简称 */
  code?: Maybe<Scalars["String"]>;
  /** 记录创建时间，create_tm insert记录时必须添加 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建人，insert记录时必须添加 */
  creator?: Maybe<Scalars["ID"]>;
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  isDelete?: Maybe<Scalars["Boolean"]>;
  /** 记录修改人，update记录时必须更新 */
  modifier?: Maybe<Scalars["ID"]>;
  /** ** modify_tm记录修改时间，update记录时必须更新 *\/ */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 负责人Id */
  principal?: Maybe<Scalars["ID"]>;
  /** 租户id */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 标签类型 */
  type?: Maybe<LabelType>;
};

export enum LabelType {
  /** 业务系统 */
  Buzsys = "BUZSYS",
  /** 业务主题 */
  Buztopic = "BUZTOPIC",
  /** 数据层次 */
  Datalevel = "DATALEVEL",
}

/** 位置 */
export enum LocationEnum {
  /** 前置 */
  Pre = "PRE",
  /** 后置 */
  Rear = "REAR",
}

export type MdsAddCategoryInput = {
  /** 排序id列表, 新建位置id为-1 */
  ids: Array<Scalars["ID"]>;
  name: Scalars["String"];
  parentId: Scalars["ID"];
  parentLevel: Scalars["Int"];
  /** 业务类目类型 */
  type?: Maybe<CategoryBusiTypeEnum>;
};

export type MdsAddTechCategoryLevel1Level2Input = {
  /** 类目本身id 用于技术类目update */
  id?: Maybe<Scalars["ID"]>;
  /** 排序id列表, 新建位置id为-1 */
  ids: Array<Scalars["ID"]>;
  name: Scalars["String"];
  parentId: Scalars["ID"];
};

/**
 * Input && Response
 *
 * Mds分析接口输入参数
 */
export type MdsAnalysisQueryInput = {
  /** 右边分析(下游分析)深度参数. 例: 向右分析两层传`2`, 如不需要向右分析请填`0` */
  downDepth: Scalars["Int"];
  /** 需要分析的`ID` */
  id: Scalars["ID"];
  /** 是否精细解析 */
  isFineAnalysis?: Maybe<Scalars["Boolean"]>;
  /** 左边分析(上游分析)深度参数. 例: 向左分析两层传`-2`, 如不需要向左分析请填`0` */
  upDepth: Scalars["Int"];
};

/** Mds分析接口结果 */
export type MdsAnalysisQueryResult = {
  __typename?: "MdsAnalysisQueryResult";
  edges?: Maybe<Array<Maybe<Array<Maybe<Scalars["ID"]>>>>>;
  nodes?: Maybe<Array<Maybe<MdsNode>>>;
};

/** MdsAPI 接口 */
export type MdsApi = {
  __typename?: "MdsApi";
  /** 校验方式 */
  auths?: Maybe<Array<Maybe<MdsApiAuthEnum>>>;
  /** 分类ID */
  clzId?: Maybe<Scalars["ID"]>;
  /** 接口描述 */
  desc?: Maybe<Scalars["String"]>;
  /** 错误码 */
  errs?: Maybe<Array<Maybe<MdsApiErrorCode>>>;
  /** 12.0.0.1 */
  host?: Maybe<Scalars["String"]>;
  /** 主键ID */
  id: Scalars["ID"];
  /** 支持的请求请求类型 */
  methods?: Maybe<Array<Maybe<MdsApiHttpMethEnum>>>;
  /** 接口名 */
  name?: Maybe<Scalars["String"]>;
  /** 8080 */
  port?: Maybe<Scalars["Int"]>;
  /** 请求示例 */
  req?: Maybe<Scalars["String"]>;
  /** 请求参数 */
  reqs?: Maybe<Array<Maybe<MdsApiReqParam>>>;
  /** 返回示例 */
  resp?: Maybe<Scalars["String"]>;
  /** 返回值 */
  resps?: Maybe<Array<Maybe<MdsApiRespParam>>>;
  /** http */
  schemes?: Maybe<Array<Maybe<MdsApiSchemeEnum>>>;
  /** 租户ID */
  tId?: Maybe<Scalars["ID"]>;
  /** 租户Token */
  tenantToken?: Maybe<MdsTenantToken>;
  /** /user/get */
  uri?: Maybe<Scalars["String"]>;
};

/** 接口校验方式 */
export enum MdsApiAuthEnum {
  /** 通过MDS USER Token进行校验 */
  MdsUserToken = "MDS_USER_TOKEN",
}

export type MdsApiCums = {
  __typename?: "MdsApiCums";
  /** 类名 */
  apiClassName?: Maybe<Scalars["String"]>;
  /** 接口id */
  apiId?: Maybe<Scalars["String"]>;
  /** 名称 */
  apiName?: Maybe<Scalars["String"]>;
  /** 状态(1-在线,0-下线) */
  apiSt?: Maybe<Scalars["Int"]>;
  /** 业务负责方 */
  bizMngr?: Maybe<Scalars["String"]>;
  /** 是否有class(1-有,0-无) */
  classFlg?: Maybe<Scalars["Int"]>;
  /** 接口创建时间 */
  crtTm?: Maybe<Scalars["String"]>;
  /** 备注 */
  dscr?: Maybe<Scalars["String"]>;
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
  /** 技术负责人 */
  updtOprtr?: Maybe<Scalars["String"]>;
  /** 接口更新时间 */
  updtTm?: Maybe<Scalars["String"]>;
};

export type MdsApiCumsResult = {
  __typename?: "MdsApiCumsResult";
  data?: Maybe<Array<Maybe<MdsApiCums>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Long"]>;
};

/** 错误码信息 */
export type MdsApiErrorCode = {
  __typename?: "MdsApiErrorCode";
  /** 错误码 */
  code?: Maybe<Scalars["String"]>;
  /** 出错信息 */
  message?: Maybe<Scalars["String"]>;
  /** http 状态码 */
  status?: Maybe<Scalars["Int"]>;
};

/** input & Response */
export type MdsApiFindCondition = {
  /** 接口名称 */
  apiName?: Maybe<Scalars["String"]>;
  /** 责任人 */
  bizMngr?: Maybe<Scalars["String"]>;
  /** 责任部门 */
  itMngr?: Maybe<Scalars["String"]>;
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
  /** 分页大小 */
  size?: Maybe<Scalars["Int"]>;
  /** 技术负责人 */
  updtOprtr?: Maybe<Scalars["String"]>;
};

/** MdsApi请求方法类型 */
export enum MdsApiHttpMethEnum {
  Connect = "CONNECT",
  Delete = "DELETE",
  Get = "GET",
  Head = "HEAD",
  Options = "OPTIONS",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT",
  Trace = "TRACE",
}

/** 请求参数 */
export type MdsApiReqParam = {
  __typename?: "MdsApiReqParam";
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
  /** 描述 */
  desc?: Maybe<Scalars["String"]>;
  /** 参数名 */
  name?: Maybe<Scalars["String"]>;
  /** 是否必填 */
  required?: Maybe<Scalars["Boolean"]>;
  /** 类型 */
  type?: Maybe<Scalars["String"]>;
};

/** 请求参数 */
export type MdsApiRespParam = {
  __typename?: "MdsApiRespParam";
  /** 描述 */
  desc?: Maybe<Scalars["String"]>;
  /** 参数名 */
  name?: Maybe<Scalars["String"]>;
  /** 类型 */
  type?: Maybe<Scalars["String"]>;
};

/** 请求Schema枚举 */
export enum MdsApiSchemeEnum {
  Http = "HTTP",
  Https = "HTTPS",
}

/** 血缘/影响分析任务表存储DTO */
export type MdsBloodRelationTask = {
  __typename?: "MdsBloodRelationTask";
  /** 记录创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 任务创建用户ID */
  creator: Scalars["ID"];
  /** 错误代码 */
  errorCode?: Maybe<Scalars["String"]>;
  /** 错误信息 */
  errorMessage?: Maybe<Scalars["String"]>;
  /** 文件下载地址 */
  fileUrl?: Maybe<Scalars["String"]>;
  /** 任务Id */
  id?: Maybe<Scalars["ID"]>;
  /** 记录修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 任务备注 */
  note?: Maybe<Scalars["String"]>;
  /** 创建时使用的Token */
  reqToken?: Maybe<Scalars["String"]>;
  /** Task状态 */
  status?: Maybe<MdsBoolRelationTaskStatusEnum>;
  /** 任务所属于租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 血缘任务类型 */
  type?: Maybe<BloodRelationTaskTypeEnum>;
};

/** Task状态 */
export enum MdsBoolRelationTaskStatusEnum {
  /** 任务已创建 */
  Created = "CREATED",
  /** 任务执行失败 */
  Failed = "FAILED",
  /** 任务处理中 */
  Process = "PROCESS",
  /** 任务执行成功 */
  Succeeded = "SUCCEEDED",
  /** 任务等待加入执行 */
  Waiting = "WAITING",
}

/**
 * type MdsLoadCategoriesData {
 *     #技术类目菜单
 *     techCategories: [MdsCategory]
 *     #业务类目菜单
 *     busiCategories: [MdsCategory]
 * }
 *
 *    VO
 *
 *  Mds菜单
 */
export type MdsCategory = {
  __typename?: "MdsCategory";
  /** 菜单业务类型: 文件夹 / 文件 */
  busiLevelType?: Maybe<CategoryBusiTypeEnum>;
  id: Scalars["ID"];
  level: Scalars["Int"];
  /** 菜单中所有MdsObject的类型: 表 / 接口 / 文件 */
  mdsType?: Maybe<MdsObjectTypeEnum>;
  name?: Maybe<Scalars["String"]>;
  parentId: Scalars["ID"];
  /** 通配符 */
  pattern?: Maybe<Scalars["String"]>;
  /** 物理区域 */
  physicalArea?: Maybe<PhysicalArea>;
  /** Schema名字 */
  schema?: Maybe<Scalars["String"]>;
  /** 菜单状态 */
  status: CategoryStatusEnum;
  /** 菜单技术层级类型: 系统 / 应用　/ 库 */
  techLevelType?: Maybe<CategoryTechLevelTypeEnum>;
  type: CategoryTypeEnum;
};

/**
 *   Vo
 *
 * 元数据字段管理对象
 */
export type MdsColumn = {
  __typename?: "MdsColumn";
  /** 业务描述 */
  bizDesc?: Maybe<Scalars["String"]>;
  /** 使用热度 (由d4a获取) */
  browseNum?: Maybe<Scalars["Int"]>;
  /** 字段来源 */
  colSrc?: Maybe<Scalars["String"]>;
  /** 字段特性主键、外键、- */
  columnFeature?: Maybe<Scalars["String"]>;
  /** 字段类型 */
  dbColumnType?: Maybe<Scalars["String"]>;
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
  /** 元数据字段描述 */
  desc?: Maybe<Scalars["String"]>;
  /** 字段绑定的数据质量[DQS]列表 */
  dqsScheduleItems?: Maybe<Array<Maybe<DqsSchedule>>>;
  /** 字段绑定的数据标准[DS]列表 */
  dsStandItems?: Maybe<Array<Maybe<DsStand>>>;
  /** id */
  id: Scalars["ID"];
  /** 是否可为空 */
  isNullAble?: Maybe<Scalars["Boolean"]>;
  /** 是否是主外键 *\/ */
  isPrimaryKey?: Maybe<Scalars["Boolean"]>;
  /** 长度 */
  length?: Maybe<Scalars["Int"]>;
  /** mds备注 */
  mdsNote?: Maybe<Scalars["String"]>;
  /** 所属元数据id */
  mdsObjectId: Scalars["ID"];
  /** 元数据字段名字 */
  name?: Maybe<Scalars["String"]>;
  /** 字段备注 */
  note?: Maybe<Scalars["String"]>;
  /** 资产等级 (从其它系统获取) */
  propertyLevel?: Maybe<Scalars["String"]>;
  /** 安全等级 (从D4a系统获取) */
  securityLevel?: Maybe<Scalars["String"]>;
  /** 序号 */
  seqId: Scalars["ID"];
  /** 源表名 */
  tblName?: Maybe<Scalars["String"]>;
  /** 租户Id */
  tenantId: Scalars["ID"];
  /** 元数据字段类型 */
  type?: Maybe<Scalars["String"]>;
};

export type MdsColumnInput = {
  /** 字段类型 */
  dbColumnType: Scalars["String"];
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
  /** 描述 */
  desc?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  /** 是否可为空 */
  isNullAble?: Maybe<Scalars["Boolean"]>;
  /** 是否为主键 */
  isPrimaryKey?: Maybe<Scalars["Boolean"]>;
  /** 长度 */
  length?: Maybe<Scalars["Int"]>;
  /** 名称 */
  name: Scalars["String"];
  /** 排序 */
  seqId: Scalars["Int"];
};

export type MdsCreateBrTaskFromFidInput = {
  /** ambry 文件ID */
  ambryFid: Scalars["String"];
  /** 数据库类型 */
  dbType?: Maybe<Scalars["String"]>;
  /** 当数据库名字为null时默认的数据库名字 */
  defaultDbName?: Maybe<Scalars["String"]>;
  /** 任务备注(50字以内) */
  note?: Maybe<Scalars["String"]>;
  /** 任务类型: 通过前端只能选 1.SQL_ZIP_FID 通过血缘/影响关系SQL ZIP方式 2.CSV_FID 通过血缘/影响关系CSV 文件方式 */
  taskType: BloodRelationTaskTypeEnum;
};

export type MdsDataMapResponse = {
  __typename?: "MdsDataMapResponse";
  dataLeft?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  dataRight?: Maybe<Array<Maybe<MdsDataMapSourceItem>>>;
};

export type MdsDataMapSourceItem = {
  __typename?: "MdsDataMapSourceItem";
  id: Scalars["ID"];
  nums?: Maybe<Scalars["Int"]>;
  reports?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

/**
 *   Vo
 *
 * 数据源VO对象
 */
export type MdsDbSource = {
  __typename?: "MdsDbSource";
  /** 数据库地址 */
  address?: Maybe<Scalars["String"]>;
  /** 连接参数 */
  args?: Maybe<Scalars["String"]>;
  /** id */
  id: Scalars["ID"];
  isUseSchema?: Maybe<Scalars["Boolean"]>;
  /** 元数据存储库名 */
  metadataStoreDb?: Maybe<Scalars["String"]>;
  /** 记录修改时间，update记录时必须更新 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 显示名称 */
  name?: Maybe<Scalars["String"]>;
  /** 密码 */
  password?: Maybe<Scalars["String"]>;
  /** 端口号 */
  port?: Maybe<Scalars["Int"]>;
  /** 数据库类型 */
  type?: Maybe<DbSourceTypeEnum>;
  /** 用户名 */
  userName?: Maybe<Scalars["String"]>;
};

/**
 * Input && Response
 *
 * 数据源VO对象
 */
export type MdsDbSourceInput = {
  /** 数据库地址 */
  address: Scalars["String"];
  /** 连接参数 */
  args?: Maybe<Scalars["String"]>;
  /** id */
  id?: Maybe<Scalars["ID"]>;
  /** 显示名称 */
  name: Scalars["String"];
  /** 密码 */
  password: Scalars["String"];
  /** 端口号 */
  port: Scalars["Int"];
  /** 数据库类型 */
  type: DbSourceTypeEnum;
  /** 用户名 */
  userName: Scalars["String"];
};

/**
 *   VO
 *
 * etl job
 */
export type MdsEtlJob = {
  __typename?: "MdsEtlJob";
  content?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

/** 检索用的过滤条件返回结果 */
export type MdsFilterTerm = {
  __typename?: "MdsFilterTerm";
  /** 资产等级 */
  assetsLevel?: Maybe<Array<Maybe<FilterTermItem>>>;
  /** 安全等级 */
  d4aSafetyRank?: Maybe<Array<Maybe<FilterTermItem>>>;
  /** 数据安全状态 */
  d4aSfObjectSettingStatus?: Maybe<Array<Maybe<FilterTermItem>>>;
  /** 数据期限 */
  dataLife?: Maybe<Array<Maybe<FilterTermItem>>>;
  /** 数据类型 */
  mdsObjType?: Maybe<Array<Maybe<FilterTermItem>>>;
};

/** 对比状态 */
export enum MdsHistoryVersionStatusEnum {
  /** 删除 */
  Delete = "DELETE",
  /** 新增 */
  Insert = "INSERT",
  /** 相同 */
  Simile = "SIMILE",
  /** 更新 */
  Update = "UPDATE",
}

export type MdsLabelVo = {
  __typename?: "MdsLabelVo";
  /** 简称 */
  code?: Maybe<Scalars["String"]>;
  /** 记录创建时间，create_tm insert记录时必须添加 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建人，insert记录时必须添加 */
  creator?: Maybe<User>;
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  /** jobId */
  id?: Maybe<Scalars["ID"]>;
  isDelete?: Maybe<Scalars["Boolean"]>;
  modifier?: Maybe<User>;
  /** ** modify_tm记录修改时间，update记录时必须更新 *\/ */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  principal?: Maybe<User>;
  /** 标签类型 */
  type?: Maybe<LabelType>;
};

export type MdsLoadCategoriesConditionInput = {
  /** 通过类目名搜索 */
  keyword?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  /** 类目状态: 可用/不可用 */
  status?: Maybe<CategoryStatusEnum>;
  /** 类目type: 技术类目菜单　业务类目菜单 */
  type?: Maybe<CategoryTypeEnum>;
};

export type MdsLoadDbSourcesConditionInput = {
  keyword?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type MdsLoadDbSourcesConditionResult = {
  __typename?: "MdsLoadDbSourcesConditionResult";
  data?: Maybe<Array<Maybe<MdsDbSource>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** 通过MdsId与MdsColumnId查询DQS/DS规则的结果 */
export type MdsLoadDqsAndDsListByMdsIdAndColumnIdResult = {
  __typename?: "MdsLoadDqsAndDsListByMdsIdAndColumnIdResult";
  /** 字段绑定的数据质量[DQS]列表 */
  dqsSchedules?: Maybe<Array<Maybe<DqsSchedule>>>;
  /** 字段绑定的数据标准[DS]列表 */
  dsStandards?: Maybe<Array<Maybe<DsStand>>>;
};

/** Input && Response */
export type MdsLoadEtlJobListInput = {
  groupId?: Maybe<Scalars["ID"]>;
  keyword?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
};

/**
 *  数据库枚举
 * enum MdsObjectTableTypeEnum {
 *     NONE,
 *     MySQL5,
 *     Oracle11g
 * }
 */
export type MdsLoadMdsObjectByConditionResult = {
  __typename?: "MdsLoadMdsObjectByConditionResult";
  data?: Maybe<Array<Maybe<MdsObject>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** input & Response */
export type MdsLoadMdsObjectConditionInput = {
  /** 通过业务类目Id查询 */
  busiCategoryIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** MdsObj Ids */
  ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 通过name chineseName description 进行查询 */
  keyword?: Maybe<Scalars["String"]>;
  /** 通过标签Id进行搜索 */
  labelIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** mdsobject type: 表/接口/文件 */
  mdsObjType?: Maybe<MdsObjectTypeEnum>;
  /** 偏移量, 默认: 0 */
  offset?: Maybe<Scalars["Int"]>;
  /** 分页大小, 默认:100, 最大:500 */
  size?: Maybe<Scalars["Int"]>;
  /** 通过技术类目Id查询 */
  techCategoryId?: Maybe<Scalars["ID"]>;
};

export type MdsLoadMdsUpdateLogByConditionInput = {
  keyword?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type MdsLoadMdsUpdateLogByConditionResult = {
  __typename?: "MdsLoadMdsUpdateLogByConditionResult";
  data?: Maybe<Array<Maybe<MdsUpdateLog>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** 已弃用 */
export type MdsLoadScheduleLogsInput = {
  /** 任务 */
  mdsScheduleId: Scalars["ID"];
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 分页数 */
  size?: Maybe<Scalars["Int"]>;
};

/** 已弃用请使用 ImportJobPageOutput */
export type MdsLoadScheduleLogsResponse = {
  __typename?: "MdsLoadScheduleLogsResponse";
  data?: Maybe<Array<Maybe<MdsScheduleLog>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** 查询上传SQL解析任务条件 */
export type MdsLoadUpdateBoolRelationTaskConditionInput = {
  /** 当前页 */
  pageNum?: Maybe<Scalars["Int"]>;
  /** 每页条数 */
  size?: Maybe<Scalars["Int"]>;
  /** 上传解析任务类型 */
  type?: Maybe<BloodRelationTaskTypeEnum>;
};

/** 查询上传SQL解析任务结果 */
export type MdsLoadUpdateBoolRelationTaskConditionResult = {
  __typename?: "MdsLoadUpdateBoolRelationTaskConditionResult";
  data?: Maybe<Array<Maybe<MdsBloodRelationTask>>>;
  pageNum?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

export type MdsLoadUserCollectionsData = {
  __typename?: "MdsLoadUserCollectionsData";
  /** 用户的最近浏览 */
  browse?: Maybe<Array<Maybe<MdsObject>>>;
  /** 用户的收藏 */
  collect?: Maybe<Array<Maybe<MdsObject>>>;
  /** 针对此用户的推荐 */
  recommend?: Maybe<Array<Maybe<MdsObject>>>;
  /** 用户的订阅 */
  subscribe?: Maybe<Array<Maybe<MdsObject>>>;
};

export type MdsMetric = {
  __typename?: "MdsMetric";
  /** 审核状态(0：待提交，1：审批通过，2：审批驳回，3：审批中，4：已撤回，5：使用中，6：已废止) */
  approveStatus?: Maybe<Scalars["Int"]>;
  /** 审核时间 */
  approveTm?: Maybe<Scalars["String"]>;
  /** 审核用户 */
  approver?: Maybe<Scalars["Long"]>;
  /** 审核用户中文名 */
  approverCn?: Maybe<Scalars["String"]>;
  /** 指标业务口径 */
  busiScopeDesc?: Maybe<Scalars["String"]>;
  /** 指标图表 */
  chartConfig?: Maybe<Scalars["String"]>;
  /** 指标上线日期 */
  commitDt?: Maybe<Scalars["String"]>;
  /** 更新用户 */
  commiter?: Maybe<Scalars["Long"]>;
  /** 更新用户中文名 */
  commiterCn?: Maybe<Scalars["String"]>;
  /** 默认安全级别 */
  defaultSecLeve?: Maybe<Scalars["String"]>;
  /** 指标默认值配置 */
  defaultValSpec?: Maybe<Scalars["String"]>;
  /** 指标技术口径(使用JSON格式描述的指标取数条件，可以是根据指标业务口径自动生成的条件，也可以是用户自行输入的SQL条件语句) */
  etlCondition?: Maybe<Scalars["String"]>;
  /** 指标下线日期 */
  expireDt?: Maybe<Scalars["String"]>;
  /** 指标更新周期(0：不自动更新,1：每天更新,2：每周更新,3：每月更新,4：每季度更新,5：每年更新,6：每小时更新,7：每半年更新) */
  loadCycle?: Maybe<Scalars["Int"]>;
  /** 指标代码 -- 不得重复 */
  metricCd?: Maybe<Scalars["String"]>;
  /** 指标数据长度 */
  metricDataLen?: Maybe<Scalars["Int"]>;
  /** 指标数据精度 */
  metricDataPrecision?: Maybe<Scalars["Int"]>;
  /** 指标数据类型 */
  metricDataType?: Maybe<Scalars["String"]>;
  /** 指标描述 -- 指标业务含义 */
  metricDesc?: Maybe<Scalars["String"]>;
  /** 指标定义部门 */
  metricDfnDept?: Maybe<Scalars["String"]>;
  /** 指标计算模板 (对于基础指标表示SQL语句模板、文件字段列表等，对于衍生指标表示计算表达式) */
  metricFormula?: Maybe<Scalars["String"]>;
  /** 指标名称 */
  metricNm?: Maybe<Scalars["String"]>;
  /** 指标英文名 */
  metricNmEn?: Maybe<Scalars["String"]>;
  /** 指标记录标识 */
  metricRowId?: Maybe<Scalars["Long"]>;
  /** 指标使用场景代码 */
  metricSceCd?: Maybe<Scalars["String"]>;
  /** 指标口径标识 */
  metricScopeId?: Maybe<Scalars["Long"]>;
  /** 指标规范标识 */
  metricSpecId?: Maybe<Scalars["Long"]>;
  /** 指标数据源代码 */
  metricSrcCd?: Maybe<Scalars["String"]>;
  /** 指标主表代码 */
  metricTblCd?: Maybe<Scalars["String"]>;
  /** 指标度量字段代码 */
  metricTblColCd?: Maybe<Scalars["String"]>;
  /** 指标类型 0：基础指标  1：衍生指标（公式计算） 2：派生指标（维度限定） */
  metricType?: Maybe<Scalars["Int"]>;
  /** 指标数据单位 */
  metricUnit?: Maybe<Scalars["String"]>;
  /** 指标数值属性代码 */
  metricValTypeCd?: Maybe<Scalars["String"]>;
  /** 指标版本号 */
  metricVersion?: Maybe<Scalars["Long"]>;
  /** oa编码 */
  oaCode?: Maybe<Scalars["String"]>;
  /** 源数据定义模式 */
  srcSpecMode?: Maybe<Scalars["String"]>;
  /** 工作流程标识 */
  taskFlowId?: Maybe<Scalars["Long"]>;
  /** 更新时间 */
  updateTm?: Maybe<Scalars["String"]>;
};

export type MdsMetricClass = {
  __typename?: "MdsMetricClass";
  /** 更新用户 */
  commiter?: Maybe<Scalars["Long"]>;
  /** 更新用户中文名 */
  commiterCn?: Maybe<Scalars["String"]>;
  /** 部门代码 */
  deptCd?: Maybe<Scalars["String"]>;
  /** 显示顺序 */
  dispOrder?: Maybe<Scalars["String"]>;
  /** 指标目录记录标识 */
  mcRowId?: Maybe<Scalars["Long"]>;
  /** 指标目录代码 -- 不得重复 */
  metricClassCd?: Maybe<Scalars["String"]>;
  /** 指标目录描述 */
  metricClassDesc?: Maybe<Scalars["String"]>;
  /** 指标目录名称 */
  metricClassNm?: Maybe<Scalars["String"]>;
  /** 父级目录代码 */
  superClassCd?: Maybe<Scalars["String"]>;
  /** 更新时间 */
  updateTm?: Maybe<Scalars["String"]>;
};

/** input & Response */
export type MdsMetricFindCondition = {
  /** 搜索关键字(包括指标中文名，指标英文名，指标代码) */
  keyword?: Maybe<Scalars["String"]>;
  /** 指标更新周期 */
  loadCycle?: Maybe<Scalars["Int"]>;
  /** 指标目录 */
  metricClassCd?: Maybe<Scalars["String"]>;
  /** 指标类型 */
  metricType?: Maybe<Scalars["Int"]>;
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
  /** 分页数 */
  size?: Maybe<Scalars["Int"]>;
};

export type MdsMetricResult = {
  __typename?: "MdsMetricResult";
  data?: Maybe<Array<Maybe<MdsMetric>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Long"]>;
};

export type MdsMsgInput = {
  /** 邮箱 */
  content?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  /** 内容 */
  emailType?: Maybe<EmailTypeEnum>;
};

/**
 *   VO
 *
 * 点信息, 上下游分析均用此点信息
 */
export type MdsNode = {
  __typename?: "MdsNode";
  /** 字段名称 */
  columnName?: Maybe<Scalars["String"]>;
  /** 数据库名称 */
  databaseName?: Maybe<Scalars["String"]>;
  /** 注释 */
  desc?: Maybe<Scalars["String"]>;
  /** 映射脚本 */
  etlJobs?: Maybe<Array<Maybe<MdsEtlJob>>>;
  id: Scalars["ID"];
  /** 对于Column时MdsId有值 */
  mdsId?: Maybe<Scalars["ID"]>;
  /** 对象名称 */
  name?: Maybe<Scalars["String"]>;
  /** 平台名称 */
  platformName?: Maybe<Scalars["String"]>;
  /** 对象类型 */
  type?: Maybe<Scalars["String"]>;
};

/**
 *   Vo
 *
 * 元数据管理对象MdsObject
 */
export type MdsObject = {
  __typename?: "MdsObject";
  /** 资产等级(均为A1) */
  assetsLevel?: Maybe<Scalars["String"]>;
  /** 数据有效日期 */
  availTime?: Maybe<Scalars["LocalDateTime"]>;
  /** mds基线版本 */
  baseVersion?: Maybe<Scalars["ID"]>;
  /** 所属系统  (以前叫应用) */
  belongApp?: Maybe<Scalars["String"]>;
  /** 所在资源 */
  belongResource?: Maybe<Scalars["String"]>;
  /** 所属平台  (以前叫系统) */
  belongSystem?: Maybe<Scalars["String"]>;
  /** 业务负责人 */
  busiLinkman?: Maybe<User>;
  /** 业务类目 */
  businessCategories?: Maybe<Array<Maybe<MdsCategory>>>;
  /** 表中文名字 */
  chineseName?: Maybe<Scalars["String"]>;
  /** 清理要求和周期 */
  clsDesc?: Maybe<Scalars["String"]>;
  /** Json版的字段 */
  columnsJson?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createDate?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间，create_tm insert记录时必须添加 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建人，insert记录时必须添加 */
  creatorMan?: Maybe<User>;
  /** 数据安全-元数据需要的几个字段vo */
  d4aMdsObjectField?: Maybe<D4aMdsObjectField>;
  /** 数据安全-安全等级 */
  d4aSafetyRank?: Maybe<Scalars["String"]>;
  /** 数据库名 */
  dataBaseName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  dataBaseType?: Maybe<Scalars["String"]>;
  /** 数据成本(均为100) */
  dataCost?: Maybe<Scalars["Int"]>;
  /** 数据架构层次 */
  dataFrameworkLevelName?: Maybe<Scalars["String"]>;
  /** 数据期限/数据周期 */
  dataLife?: Maybe<Scalars["String"]>;
  /** 数据价值(从资产系统获取) */
  dataValue?: Maybe<Scalars["Int"]>;
  /** 数据源类型 */
  dbSourceType?: Maybe<DbSourceTypeEnum>;
  /** DDL最后更新时间 */
  ddlLastUpdateDate?: Maybe<Scalars["LocalDateTime"]>;
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  /** 产品工厂成本 */
  dpfDataCost?: Maybe<DpfDataCost>;
  /** 产品工厂价值 */
  dpfDataPrice?: Maybe<DpfDataPrice>;
  /** 数据质量规则(从数据质量获取) */
  dqsSchedules?: Maybe<Array<Maybe<DqsSchedule>>>;
  /** - 废除 - 与李帅一起下线 数据标准二期已废除此返回对象 数据标准代码(从数据标准获取) */
  dsBasicStandard?: Maybe<Array<Maybe<DsBasicStandard>>>;
  /** - 废除 - 与李帅一起下线 数据标准二期已废除此返回对象 数据标准公共代码(从数据标准获取) */
  dsCommonCodes?: Maybe<Array<Maybe<DsCommonCode>>>;
  /** 映射关系id */
  dsEntitymappingId: Scalars["ID"];
  /** 上面 DsCommonCode DsBasicStandard 对象在ds中即将废除，使用新类DsStand代替 */
  dsStandes?: Maybe<Array<Maybe<DsStand>>>;
  /** etljopvb */
  etlJobs?: Maybe<Array<Maybe<MdsEtlJob>>>;
  fire?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** 增量记录数 */
  incRows?: Maybe<Scalars["Int"]>;
  /** 增量数据量 */
  incStorSize?: Maybe<Scalars["Int"]>;
  /** 是否为拷贝 */
  isCopy?: Maybe<Scalars["Boolean"]>;
  /** 元数据描述是否完整 */
  isDescCompletion?: Maybe<Scalars["Boolean"]>;
  /** 是否很火 */
  isFire?: Maybe<Scalars["Boolean"]>;
  /** 是否可提供增量 */
  isIncUpdateAvaliable?: Maybe<Scalars["Boolean"]>;
  /** 是否有物理删除 */
  isPhysDel?: Maybe<Scalars["Boolean"]>;
  /** 是否临时表 */
  isTmpTable?: Maybe<Scalars["Boolean"]>;
  /** 数据最后变更时间 */
  lastChangeDate?: Maybe<Scalars["LocalDateTime"]>;
  /** 数据最后查询时间 */
  lastQueryDate?: Maybe<Scalars["LocalDateTime"]>;
  /** 集市名字 */
  marketName?: Maybe<Scalars["String"]>;
  /** 字段的集合 */
  mdsColumns?: Maybe<Array<Maybe<MdsColumn>>>;
  /** mds备注 */
  mdsNote?: Maybe<Scalars["String"]>;
  /** 元数据类型 */
  mdsObjectTypeEnum?: Maybe<MdsObjectTypeEnum>;
  /** 记录修改人，update记录时必须更新 */
  modifierMan?: Maybe<User>;
  /** modify_tm记录修改时间，update记录时必须更新 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 表名 */
  name?: Maybe<Scalars["String"]>;
  /** 表备注信息 */
  note?: Maybe<Scalars["String"]>;
  /** 组织结构对象 */
  organization?: Maybe<MdsOrganization>;
  /** 数据产品(从产品工厂获取) */
  productNum?: Maybe<Scalars["Int"]>;
  /** 浏览数 */
  pv?: Maybe<Scalars["Int"]>;
  /** 质量评分(从数据质量获取) */
  qualityScore?: Maybe<Scalars["Float"]>;
  /** Schema类型 */
  schema?: Maybe<Scalars["String"]>;
  /** 源表注释 */
  srcTblDesc?: Maybe<Scalars["String"]>;
  /** 源表性质 */
  srcTblNature?: Maybe<Scalars["String"]>;
  /** 标准打分(从数据标准来) */
  standardScore?: Maybe<Scalars["Int"]>;
  /** 存储量(KB) */
  storageSize?: Maybe<Scalars["String"]>;
  /** 存储方式 */
  storageTypeEnum?: Maybe<MdsStorageTypeEnum>;
  /** 元数据被打过的标签 */
  tags?: Maybe<Array<Maybe<TagInfoResult>>>;
  /** 表的业务负责人UID列表 */
  tbOpUids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 表的业务负责人列表 */
  tbOpUserList?: Maybe<Array<Maybe<User>>>;
  /** 表的技术负责人UID列表 */
  tbTedUids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 表的技术负责人列表 */
  tbTedUserList?: Maybe<Array<Maybe<User>>>;
  /** 表关联信息 */
  tblRelaInfo?: Maybe<Scalars["String"]>;
  /** 技术负责人 */
  techLinkman?: Maybe<User>;
  /** 技术类目 */
  technologyCategory?: Maybe<MdsCategory>;
  userData?: Maybe<MdsObjectUserData>;
  /** 版本号 */
  version?: Maybe<Scalars["ID"]>;
};

export type MdsObjectApidto = {
  __typename?: "MdsObjectAPIDTO";
  /** 记录创建时间，create_tm insert记录时必须添加 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 数据库名 */
  dataBaseName?: Maybe<Scalars["String"]>;
  /** 数据表对应的数据库的Type类型枚举 */
  dbSourceType?: Maybe<DbSourceTypeEnum>;
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  /** id */
  id?: Maybe<Scalars["ID"]>;
  /** 元数据类型 */
  mdsObjectTypeEnum?: Maybe<MdsObjectTypeEnum>;
  /** 表名 */
  name?: Maybe<Scalars["String"]>;
  /** 主键名 */
  primaryKey?: Maybe<Scalars["String"]>;
  /** 租户Id */
  tenantId?: Maybe<Scalars["ID"]>;
};

export type MdsObjectApidtoResult = {
  __typename?: "MdsObjectAPIDTOResult";
  data?: Maybe<Array<Maybe<MdsObjectApidto>>>;
  offset: Scalars["Int"];
  size: Scalars["Int"];
  total: Scalars["ID"];
};

export type MdsObjectInput = {
  /** 中文名 */
  chineseName?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createDate?: Maybe<Scalars["String"]>;
  /** 数据库名 */
  dataBaseName: Scalars["String"];
  /** 数据库类型 */
  dbSourceType: DbSourceTypeEnum;
  /** ddl最后更新时间 */
  ddlLastUpdateDate?: Maybe<Scalars["String"]>;
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  /** 记录数 */
  incRows?: Maybe<Scalars["Int"]>;
  /** 存储量 */
  incStorSize?: Maybe<Scalars["Int"]>;
  /** 元数据描述是否完整 */
  isDescCompletion?: Maybe<Scalars["Boolean"]>;
  /** 是否临时表 */
  isTmpTable?: Maybe<Scalars["Boolean"]>;
  /** 更新时间 */
  lastChangeDate?: Maybe<Scalars["String"]>;
  /** 最后查询时间 */
  lastQueryDate?: Maybe<Scalars["String"]>;
  /** 字段信息 */
  mdsColumns?: Maybe<Array<Maybe<MdsColumnInput>>>;
  /** 表名 */
  name: Scalars["String"];
  /** schema */
  schema?: Maybe<Scalars["String"]>;
  /** 数据大小 */
  storageSize?: Maybe<Scalars["Int"]>;
  /** 存储方式 */
  storageTypeEnum?: Maybe<MdsStorageTypeEnum>;
};

/** Mds类型: 表/文件/接口 */
export enum MdsObjectTypeEnum {
  File = "FILE",
  Interface = "INTERFACE",
  None = "NONE",
  Table = "TABLE",
  View = "VIEW",
}

/** 与用户相关的信息 */
export type MdsObjectUserData = {
  __typename?: "MdsObjectUserData";
  saved: Scalars["Boolean"];
  watched: Scalars["Boolean"];
};

/** 组织信息 */
export type MdsOrganization = {
  __typename?: "MdsOrganization";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

/** 调度任务 */
export type MdsSchedule = {
  __typename?: "MdsSchedule";
  /** 技术类目Id */
  categoryId?: Maybe<Scalars["ID"]>;
  /** 业务负责人列表 */
  classifyMans?: Maybe<Array<Maybe<User>>>;
  /** 数据库名 */
  dbName?: Maybe<Scalars["ID"]>;
  /** 数据源Id */
  dbSourceId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  /** 最后运行时间 */
  lastRunTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 调度天 */
  scheduledDay?: Maybe<Scalars["Int"]>;
  /** 调度时间 */
  scheduledTime?: Maybe<Scalars["String"]>;
  /** 周期　天、周、月 */
  scheduledType: ScheduledTypeEnum;
  /** 调度星期 */
  scheduledWeek?: Maybe<DayOfWeek>;
  /** 技术负责人列表 */
  techMans?: Maybe<Array<Maybe<User>>>;
};

/** 调度日志 */
export type MdsScheduleLog = {
  __typename?: "MdsScheduleLog";
  desc?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

/** 搜索Input */
export type MdsSearchQueryInput = {
  /** 资产等级 */
  assetsLevel?: Maybe<Scalars["ID"]>;
  /** 通过业务类目Id查询 */
  busiCategoryIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 安全等级 */
  d4aSafetyRank?: Maybe<Scalars["ID"]>;
  /** 安全状态 */
  d4aSfObjectSettingStatus?: Maybe<Scalars["String"]>;
  /** 数据期限数据周期 */
  dataLife?: Maybe<Scalars["ID"]>;
  /** 产品工厂是否设置 */
  dpfIsSettings?: Maybe<Scalars["Boolean"]>;
  /** 是否为拷贝对象 */
  isCopy?: Maybe<Scalars["Boolean"]>;
  /** 是否临时表 */
  isTmpTable?: Maybe<Scalars["Boolean"]>;
  /** 通过name chineseName description 进行查询 */
  keyword?: Maybe<Scalars["String"]>;
  /** 通过标签Id进行搜索 */
  labelIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** mdsobject type: 表/接口/文件 */
  mdsObjectType?: Maybe<MdsObjectTypeEnum>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 二级类目 */
  platformTechCategoryIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 分页数 */
  size?: Maybe<Scalars["Int"]>;
  /** 一级类目 */
  systemTechCategoryIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 通过技术类目Id查询 */
  techCategoryId?: Maybe<Scalars["ID"]>;
  /** 技术类目 三级 */
  techCategoryIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/**
 *   VO
 *
 * 检索结果
 */
export type MdsSearchResult = {
  __typename?: "MdsSearchResult";
  data?: Maybe<Array<Maybe<MdsObject>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** 新建关联全选输入 */
export type MdsSelectAllConditionInput = {
  /** 通过业务类目Id查询 */
  busiCategoryIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 业务ids */
  businessIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** MdsObj Ids */
  ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 通过name chineseName description 进行查询 */
  keyword?: Maybe<Scalars["String"]>;
  /** 通过标签Id进行搜索 */
  labelIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** mdsobject type: 表/接口/文件 */
  mdsObjType?: Maybe<MdsObjectTypeEnum>;
  /** 通过技术类目Id查询 */
  techCategoryId?: Maybe<Scalars["ID"]>;
};

/** MdsObject 存储类型 */
export enum MdsStorageTypeEnum {
  /** 数据文件 */
  File = "FILE",
  /** 数据表 */
  Table = "TABLE",
}

/** 技术类目管理Item */
export type MdsTechCataData = {
  __typename?: "MdsTechCataData";
  category?: Maybe<MdsCategory>;
  dbSource?: Maybe<MdsDbSource>;
  id: Scalars["ID"];
  level?: Maybe<Scalars["Int"]>;
  parentId?: Maybe<Scalars["ID"]>;
  schedule?: Maybe<MdsSchedule>;
  status?: Maybe<ImportJobStatusEnum>;
};

export type MdsTechCataScheduleCondition = {
  /** 类别 */
  categoryId?: Maybe<Scalars["ID"]>;
  /** 类目类型（技术类目,业务类目） */
  categoryType: Scalars["String"];
  /** 数据源ID */
  dbSourceId?: Maybe<Scalars["ID"]>;
  /** 搜索关键字 */
  keyword?: Maybe<Scalars["String"]>;
  /** 第几页 */
  offset: Scalars["Int"];
  /** 分页数 */
  size: Scalars["Int"];
  /** 数据源 */
  sourceType?: Maybe<Scalars["String"]>;
};

export type MdsTechCataScheduleDto = {
  __typename?: "MdsTechCataScheduleDTO";
  category?: Maybe<CategoryDto>;
  /** 技术类目Id */
  categoryId?: Maybe<Scalars["ID"]>;
  categoryName?: Maybe<Scalars["String"]>;
  /** 数据库名 */
  dbName?: Maybe<Scalars["String"]>;
  /** 数据源Id */
  dbSourceId?: Maybe<Scalars["ID"]>;
  dbSourceName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** 最后运行时间 */
  lastRunTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 调度天 */
  scheduledDay?: Maybe<Scalars["Int"]>;
  /** 调度时间 */
  scheduledTime?: Maybe<Scalars["String"]>;
  /** 周期　天、周、月 */
  scheduledType: ScheduledTypeEnum;
  /** 调度星期 */
  scheduledWeek?: Maybe<DayOfWeek>;
  /** 数据库，文件 */
  sourceType?: Maybe<Scalars["String"]>;
  triggerType?: Maybe<ScheduledTriggerTypeEnum>;
};

export type MdsTechCataSchedulePagination = {
  __typename?: "MdsTechCataSchedulePagination";
  data?: Maybe<Array<Maybe<MdsTechCataScheduleDto>>>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Long"]>;
};

/** 数据同步(数据库同步) */
export type MdsTechCatalogInput = {
  /** 业务负责人id列表 */
  classifyManIds?: Maybe<Array<Scalars["ID"]>>;
  /** 数据库名 */
  dbName?: Maybe<Scalars["String"]>;
  /** 数据源id */
  dbSourceId?: Maybe<Scalars["ID"]>;
  dbType?: Maybe<Scalars["String"]>;
  /**
   * Setp 1
   * 更新时用
   */
  id?: Maybe<Scalars["ID"]>;
  /** 排序id列表, 新建位置id为-1 */
  ids?: Maybe<Array<Scalars["ID"]>>;
  /** 信息预览Id(由信息预览后返回) */
  importJobId?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  /** 父id 顶层为0 */
  parentId: Scalars["ID"];
  /** 通配符 */
  pattern?: Maybe<Scalars["String"]>;
  /** 物理区域id(仅Table类型有) */
  physicalAreaId?: Maybe<Scalars["ID"]>;
  /** 调度天 */
  scheduledDay?: Maybe<Scalars["Int"]>;
  /** 调度时间 */
  scheduledTime?: Maybe<Scalars["String"]>;
  /**
   * Setp3
   * 调度周期
   */
  scheduledType?: Maybe<ScheduledTypeEnum>;
  /** 调度星期 */
  scheduledWeek?: Maybe<DayOfWeek>;
  schema?: Maybe<Scalars["String"]>;
  /**
   *  Setp 2
   * 数据表　数据接口　数据文件
   */
  sourceType: MdsObjectTypeEnum;
  /** 类目状态可用/不可用 */
  status?: Maybe<CategoryStatusEnum>;
  /** 技术负责人id列表 */
  techManIds?: Maybe<Array<Scalars["ID"]>>;
  /** 上传文件的编号(由上传接口返回) */
  updateFile?: Maybe<Scalars["String"]>;
  /** 上传方式 */
  updateType?: Maybe<MdsUpdateTypeEnum>;
};

export type MdsTemplateFile = {
  __typename?: "MdsTemplateFile";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<TemplateFileTypeEnum>;
  url?: Maybe<Scalars["String"]>;
};

/** 任务错误码 */
export type MdsTenantToken = {
  __typename?: "MdsTenantToken";
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建者 */
  creator?: Maybe<Scalars["ID"]>;
  /** 主键ID */
  id?: Maybe<Scalars["ID"]>;
  /** 修改者 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 用户租户做为ID每个租户只会有一个Token */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 当前Token值 */
  token?: Maybe<Scalars["String"]>;
};

export type MdsUpdateLog = {
  __typename?: "MdsUpdateLog";
  /** 记录创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建人 */
  creatorMan?: Maybe<User>;
  /** 库名 */
  dbname?: Maybe<Scalars["String"]>;
  deleteAmount?: Maybe<Scalars["Int"]>;
  /** 主键id */
  id: Scalars["ID"];
  insertAmount?: Maybe<Scalars["Int"]>;
  /** 对象名 */
  mdsObjectName?: Maybe<Scalars["String"]>;
  mdsObjectType?: Maybe<MdsObjectTypeEnum>;
  /** 平台名 */
  platformName?: Maybe<Scalars["String"]>;
  /** 系统名 */
  systemName?: Maybe<Scalars["String"]>;
  updateAmount?: Maybe<Scalars["Int"]>;
};

export enum MdsUpdateTypeEnum {
  Increment = "INCREMENT",
  Totalamount = "TOTALAMOUNT",
}

/** 版本列表 */
export type MdsVersionLog = {
  __typename?: "MdsVersionLog";
  /** 版本内容 */
  content?: Maybe<Scalars["String"]>;
  /** 版本日期 */
  date?: Maybe<Scalars["String"]>;
  /** 版本号 */
  version?: Maybe<Scalars["String"]>;
  /** 版本ID */
  versionId: Scalars["ID"];
};

export type MetadataObjectNotMountCondition = {
  /** 基础资产: 0、指标资产:1、报表资产:2、接口资产:3 */
  buzType: Scalars["String"];
  /** 业务系统，如果传入多个值，用 英文逗号分割 */
  buzsys?: Maybe<Scalars["String"]>;
  /** 业务主题，如果传入多个值，用 英文逗号分割 */
  buztopic?: Maybe<Scalars["String"]>;
  /** 数据层侧 ，如果传入多个值，用 英文逗号分割 */
  datalevel?: Maybe<Scalars["String"]>;
  /** 查询关键词 */
  keyword?: Maybe<Scalars["String"]>;
  /** 节点ID */
  nodeId: Scalars["ID"];
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
  /** 页大小 */
  size?: Maybe<Scalars["Int"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Int"]>;
  /** 批量删除标签 */
  batchDel?: Maybe<Scalars["Int"]>;
  /** 删除标签 */
  delLabel?: Maybe<Scalars["Int"]>;
  /** 删除资产节点 */
  delNode?: Maybe<Scalars["Boolean"]>;
  deleteImportJobs?: Maybe<Scalars["Boolean"]>;
  /** 删除字段 */
  deleteInputMdsColumn?: Maybe<Scalars["Boolean"]>;
  /** 手工录入 删除 */
  deleteInputMdsObject?: Maybe<Scalars["Boolean"]>;
  /** 手工录入 批量删除 */
  deleteInputMdsObjects?: Maybe<Scalars["Boolean"]>;
  /** 新建业务类目 */
  mdsAddBusiCategory?: Maybe<Scalars["ID"]>;
  /** 为Mds添加业务类目 */
  mdsAddMdsToBusiCategory?: Maybe<Scalars["Boolean"]>;
  /**
   * 　标签管理
   * 为Mds添加标签
   */
  mdsAddTagsToMdsObject?: Maybe<Scalars["Boolean"]>;
  /** 新建技术类目(三级-提交) */
  mdsAddTechCatalog?: Maybe<Scalars["Boolean"]>;
  /** 新建技术类目(三级-预览) */
  mdsAddTechCatalogPreview?: Maybe<TechCatalogPreview>;
  /** 新建技术类目(一级&&二级) */
  mdsAddTechCategoryLevel1Level2?: Maybe<Scalars["Boolean"]>;
  /** 添加或更新拓展字段 type: mdsNote备注, baseVersion 基线版本 */
  mdsAddUpdateExpandFieldByTypeAndInputList?: Maybe<
    Array<Maybe<Scalars["ID"]>>
  >;
  /** 更新类目名字 */
  mdsChangeCategoryName?: Maybe<Scalars["String"]>;
  /** 用户收藏MdsObject */
  mdsCollectMdsObject: Scalars["Boolean"];
  /** 通过ambryFileId更新血缘关系 */
  mdsCreateBrTaskFromFid?: Maybe<MdsBloodRelationTask>;
  /** 移除业务类目 */
  mdsDeleteBusiCategory?: Maybe<Scalars["Boolean"]>;
  /** 删除多个数据源 */
  mdsDeleteDbSource?: Maybe<Scalars["Boolean"]>;
  /** 删除拓展字段 type: mdsNote备注, baseVersion 基线版本 */
  mdsDeleteExpandFieldByTypeAndObjIdList?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /**
   *  技术类目管理
   * 将删除技术类目
   */
  mdsDeleteTechCategory?: Maybe<Scalars["Boolean"]>;
  /** 执行调度 */
  mdsExecSchedule?: Maybe<Scalars["Boolean"]>;
  /** 刷新当前用户所在租户的Token */
  mdsFlushToken?: Maybe<MdsTenantToken>;
  /** 用户Tag点赞 */
  mdsLikeTag?: Maybe<Scalars["Boolean"]>;
  /** 记录PV++ */
  mdsRecordPv?: Maybe<Scalars["Boolean"]>;
  /** 将Mds移除业务类目 */
  mdsRemoveMdsFromBusiCategory?: Maybe<Scalars["Boolean"]>;
  /** 将Mds移除标签 */
  mdsRemoveMdsObjectFromTags?: Maybe<Scalars["Boolean"]>;
  /** 添加或保存一个数据源 */
  mdsSaveDbSource?: Maybe<Scalars["Boolean"]>;
  /** 将 根据条件查询出来的mdsoObject 全部关联到 业务ID上 */
  mdsSelectAllByConditionToBusinessIds?: Maybe<Scalars["Boolean"]>;
  /** 发送站内信or提问 */
  mdsSendMsg?: Maybe<Scalars["Boolean"]>;
  /** 用户订阅MdsObject */
  mdsSubscribeMdsObject: Scalars["Boolean"];
  /** 通过csv添加关系 */
  mdsUpdateByCSV?: Maybe<Scalars["Boolean"]>;
  /**
   * 业务类目管理
   * 更新类目菜单排序
   */
  mdsUpdateCategoryOrder?: Maybe<Scalars["Boolean"]>;
  /** 更新MdsCol备注 */
  mdsUpdateMdsColNote?: Maybe<MdsObject>;
  /** 更新Mds备注 */
  mdsUpdateMdsNote?: Maybe<MdsObject>;
  /** 更新表业务负责人列表(最多5人) */
  mdsUpdateTbOpUids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 更新表技术负责人列表(最多5人) */
  mdsUpdateTbTedUids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 更新技术类目(三级-更新) */
  mdsUpdateTechCatalog?: Maybe<Scalars["Boolean"]>;
  /** 更新技术类目菜单(一级&&二级) */
  mdsUpdateTechCategoryLevel1Level2?: Maybe<Scalars["Boolean"]>;
  /** 粘Tag */
  mdsUserPasteTag?: Maybe<TagInfoResult>;
  /** 揭Tag */
  mdsUserUnPasteTag?: Maybe<Scalars["Boolean"]>;
  /** 资产【元数据挂载】 */
  mountMetadata?: Maybe<Scalars["Boolean"]>;
  /** 手工录入 字段新增修改 */
  saveInputMdsColumn?: Maybe<MdsColumn>;
  /** 手工录入 表新增修改 */
  saveInputMdsObject?: Maybe<MdsObject>;
  /** 新建和修改Label */
  saveLabel?: Maybe<LabelDto>;
  /** 资产【删除元数据挂载】 */
  ummountMetadata?: Maybe<Scalars["Boolean"]>;
};

export type MutationBatchDelArgs = {
  ids: Array<Maybe<Scalars["ID"]>>;
  labelType?: Maybe<Scalars["String"]>;
};

export type MutationDelLabelArgs = {
  id: Scalars["ID"];
  labelType?: Maybe<Scalars["String"]>;
};

export type MutationDelNodeArgs = {
  buzType?: Maybe<Scalars["String"]>;
  nodeId?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteImportJobsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationDeleteInputMdsColumnArgs = {
  mdsColumnIds: Array<Maybe<Scalars["ID"]>>;
  mdsObjectId: Scalars["ID"];
};

export type MutationDeleteInputMdsObjectArgs = {
  mdsObjectId: Scalars["ID"];
};

export type MutationDeleteInputMdsObjectsArgs = {
  mdsObjectIds: Array<Maybe<Scalars["ID"]>>;
};

export type MutationMdsAddBusiCategoryArgs = {
  input?: Maybe<MdsAddCategoryInput>;
};

export type MutationMdsAddMdsToBusiCategoryArgs = {
  busiCateIds: Array<Scalars["ID"]>;
  mdsIds: Array<Scalars["ID"]>;
};

export type MutationMdsAddTagsToMdsObjectArgs = {
  mdsIds: Array<Scalars["ID"]>;
  tagIds: Array<Scalars["ID"]>;
};

export type MutationMdsAddTechCatalogArgs = {
  input: MdsTechCatalogInput;
};

export type MutationMdsAddTechCatalogPreviewArgs = {
  input: MdsTechCatalogInput;
};

export type MutationMdsAddTechCategoryLevel1Level2Args = {
  input?: Maybe<MdsAddTechCategoryLevel1Level2Input>;
};

export type MutationMdsAddUpdateExpandFieldByTypeAndInputListArgs = {
  inputList: Array<ExpandFieldInput>;
  type: Scalars["String"];
};

export type MutationMdsChangeCategoryNameArgs = {
  categoryId: Scalars["ID"];
  newName?: Maybe<Scalars["String"]>;
};

export type MutationMdsCollectMdsObjectArgs = {
  isOperations: Scalars["Boolean"];
  mdsObjectId: Scalars["ID"];
};

export type MutationMdsCreateBrTaskFromFidArgs = {
  input?: Maybe<MdsCreateBrTaskFromFidInput>;
};

export type MutationMdsDeleteBusiCategoryArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationMdsDeleteDbSourceArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationMdsDeleteExpandFieldByTypeAndObjIdListArgs = {
  objIdList: Array<Scalars["ID"]>;
  type: Scalars["String"];
};

export type MutationMdsDeleteTechCategoryArgs = {
  techCateId: Scalars["ID"];
};

export type MutationMdsExecScheduleArgs = {
  mdsScheduleId: Scalars["ID"];
};

export type MutationMdsLikeTagArgs = {
  isOperations: Scalars["Boolean"];
  mdsObjectId: Scalars["ID"];
  tagId: Scalars["ID"];
};

export type MutationMdsRecordPvArgs = {
  id: Scalars["ID"];
};

export type MutationMdsRemoveMdsFromBusiCategoryArgs = {
  busiCateIds: Array<Scalars["ID"]>;
  mdsIds: Array<Scalars["ID"]>;
};

export type MutationMdsRemoveMdsObjectFromTagsArgs = {
  mdsIds: Array<Scalars["ID"]>;
  tagIds: Array<Scalars["ID"]>;
};

export type MutationMdsSaveDbSourceArgs = {
  input: MdsDbSourceInput;
};

export type MutationMdsSelectAllByConditionToBusinessIdsArgs = {
  input?: Maybe<MdsSelectAllConditionInput>;
};

export type MutationMdsSendMsgArgs = {
  input?: Maybe<MdsMsgInput>;
};

export type MutationMdsSubscribeMdsObjectArgs = {
  isOperations: Scalars["Boolean"];
  mdsObjectId: Scalars["ID"];
};

export type MutationMdsUpdateByCsvArgs = {
  fId: Scalars["String"];
};

export type MutationMdsUpdateCategoryOrderArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationMdsUpdateMdsColNoteArgs = {
  mdsColumnId: Scalars["ID"];
  mdsId: Scalars["ID"];
  note: Scalars["String"];
};

export type MutationMdsUpdateMdsNoteArgs = {
  mdsId: Scalars["ID"];
  note: Scalars["String"];
};

export type MutationMdsUpdateTbOpUidsArgs = {
  ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  mdsId: Scalars["ID"];
};

export type MutationMdsUpdateTbTedUidsArgs = {
  ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  mdsId: Scalars["ID"];
};

export type MutationMdsUpdateTechCatalogArgs = {
  input: MdsTechCatalogInput;
};

export type MutationMdsUpdateTechCategoryLevel1Level2Args = {
  input: MdsAddTechCategoryLevel1Level2Input;
};

export type MutationMdsUserPasteTagArgs = {
  mdsObjectId: Scalars["ID"];
  tagName: Scalars["String"];
};

export type MutationMdsUserUnPasteTagArgs = {
  mdsObjectId: Scalars["ID"];
  tagId: Scalars["ID"];
};

export type MutationMountMetadataArgs = {
  buzType?: Maybe<Scalars["String"]>;
  ids: Array<Maybe<Scalars["ID"]>>;
  nodeId?: Maybe<Scalars["ID"]>;
};

export type MutationSaveInputMdsColumnArgs = {
  mdsColumnInput: MdsColumnInput;
  mdsObjectId: Scalars["ID"];
};

export type MutationSaveInputMdsObjectArgs = {
  mdsObjectInput: MdsObjectInput;
  techCategoryId: Scalars["ID"];
};

export type MutationSaveLabelArgs = {
  code: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  labelType: Scalars["String"];
  name: Scalars["String"];
  principal?: Maybe<Scalars["ID"]>;
};

export type MutationUmmountMetadataArgs = {
  buzType?: Maybe<Scalars["String"]>;
  ids: Array<Maybe<Scalars["ID"]>>;
  nodeId?: Maybe<Scalars["ID"]>;
};

/** 操作日志 */
export type OperationLog = {
  __typename?: "OperationLog";
  /** 修改时间 */
  changeTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 操作人 */
  changer?: Maybe<Scalars["ID"]>;
  /** 删除字段 */
  deleteColumns?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 新增字段 */
  insertColumns?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 状态 */
  resultType?: Maybe<MdsHistoryVersionStatusEnum>;
};

/** 物理位置 */
export type PhysicalArea = {
  __typename?: "PhysicalArea";
  /** 物理位置ID */
  id: Scalars["ID"];
  /** 物理位置名称 */
  name: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Int"]>;
  /** 未挂载数据 */
  findAllNotMount?: Maybe<MdsObjectApidtoResult>;
  findById?: Maybe<MdsLabelVo>;
  /** 任务监控 */
  findImportJobsByCondition?: Maybe<ImportJobMonitorPageOutput>;
  findLabelByCondition?: Maybe<Array<Maybe<MdsLabelVo>>>;
  /**
   * 根据 标签类型查询标签。标签类型：
   *    DATALEVEL,  数据层次
   *    BUZTOPIC,   业务主题
   *    BUZSYS      业务系统
   */
  findLabelByLabelTypes?: Maybe<Array<Maybe<LabelApidto>>>;
  /** 技术类目详情::导出调度日志 */
  getImportJobExcelFile?: Maybe<Scalars["String"]>;
  /** 技术类目详情::调度日志查询(查询import_job) */
  getImportJobsByScheduleId?: Maybe<ImportJobPageOutput>;
  /** 手工录入 分页查询 */
  getInputMdsObjectByCategoryId?: Maybe<MdsLoadMdsObjectByConditionResult>;
  /** 手工录入 根据id查询 */
  getInputMdsObjectById?: Maybe<MdsObject>;
  /** 查询mdsObject操作日志 */
  getOperationLog?: Maybe<Array<Maybe<OperationLog>>>;
  /** 元数据表浏览情况Top10 */
  homeMdsBrowseTop10?: Maybe<HomeMdsBrowseTop10Vo>;
  /** 元数据分布情况 */
  homeMdsDistribution?: Maybe<HomeMdsDistributionVo>;
  /** 元数据统计信息 */
  homeMdsStatistical?: Maybe<HomeMdsStatisticalVo>;
  /** 元数据条形柱状图_分布数据信息 */
  homeMdsStatisticalBarChart?: Maybe<HomeMdsStatisticalBarChartVo>;
  /** 获取 MdsColumn 分析结果 */
  mdsAnalysisColumn?: Maybe<MdsAnalysisQueryResult>;
  /** 获取 MdsObject 分析结果 */
  mdsAnalysisObject?: Maybe<MdsAnalysisQueryResult>;
  /** 获取MdsObject */
  mdsApiCumsPage?: Maybe<MdsApiCumsResult>;
  /** 接口元数据详情 */
  mdsApiView?: Maybe<MdsApiCums>;
  /**
   * 业务类目管理
   * 查询移除业务类目影响
   */
  mdsDeleteBusiCategoryEffect?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 查询移除技术类目影响 */
  mdsDeleteTechCategoryEffect?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 通过dbSourceID和dbName进行数据库连接测试 */
  mdsDetectionDbName?: Maybe<Scalars["Boolean"]>;
  /** 测试一个数据源 */
  mdsDetectionDbSource?: Maybe<Scalars["Boolean"]>;
  /** 获取解析SQL任务列表 */
  mdsFindBrTaskByCondition?: Maybe<MdsLoadUpdateBoolRelationTaskConditionResult>;
  /** 查询指定job状态 */
  mdsFindBrTaskById?: Maybe<MdsBloodRelationTask>;
  /** 查询当前登录用户的租户Token */
  mdsFindToken?: Maybe<MdsTenantToken>;
  /** 生成DDL */
  mdsGenerateDDL: Scalars["String"];
  /** 生成历史版本的DDL */
  mdsGenerateDDLWithVersionIds?: Maybe<Array<Maybe<DdlVersion>>>;
  /** 获取解析接口文档 */
  mdsGetBrApiDocs?: Maybe<Array<Maybe<MdsApi>>>;
  /** 下载字段信息 */
  mdsGetColumnDataFile: Scalars["String"];
  /** 下载字段信息(带备注功能) */
  mdsGetColumnDataFileDaXing: Scalars["String"];
  /** 获取数据预览数据 */
  mdsGetSampleDatas: SampleDatasResult;
  /**
   * 技术类目详情::导出调度日志(本接口已弃用,请使用getImportJobExcelFile接口代替)
   * @deprecated No longer supported
   */
  mdsGetScheduleLogFile: Scalars["String"];
  /** 获取模板下载地址 即将废弃 */
  mdsGetTemplateFileURL?: Maybe<Scalars["String"]>;
  /** 获取所有模板下载地址列表 */
  mdsGetTemplateFiles?: Maybe<Array<Maybe<MdsTemplateFile>>>;
  /**
   *     获取类目菜单(需要删除mds)
   *     mdsLoadCategories(status: CategoryStatusEnum): MdsLoadCategoriesData
   * 获取类目菜单
   */
  mdsLoadCategoriesByCondition?: Maybe<Array<Maybe<MdsCategory>>>;
  /** 通过dbsourceId获取所有的数据库名 */
  mdsLoadDBNameByDbSourceId?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 通过MdsId与MdsColumnId查询字段对应的质量规则列表与标准规则列表 */
  mdsLoadDQSAndDSListByMdsIdAndColumnId?: Maybe<MdsLoadDqsAndDsListByMdsIdAndColumnIdResult>;
  /** 获取数据地图 */
  mdsLoadDataMap?: Maybe<MdsDataMapResponse>;
  /** 获取数据地图_重庆POC演示专用 */
  mdsLoadDataMap4Chongqing?: Maybe<MdsDataMapResponse>;
  /** 获取一个数据源详情 */
  mdsLoadDbSource?: Maybe<MdsDbSource>;
  /** 获取数据源类型列表 */
  mdsLoadDbSourceType: Array<Maybe<Scalars["String"]>>;
  /** 获取数据源列表 */
  mdsLoadDbSourcesByCondition?: Maybe<MdsLoadDbSourcesConditionResult>;
  /** 获取EtlJob列表 */
  mdsLoadEtlJobList?: Maybe<Array<Maybe<MdsEtlJob>>>;
  /** Mds搜索过滤条件数值获取 */
  mdsLoadFilteTerm?: Maybe<MdsFilterTerm>;
  /** 获取MdsObject的历史版本 */
  mdsLoadMdsHistoryObject?: Maybe<MdsObject>;
  /** 获取MdsObject */
  mdsLoadMdsObject?: Maybe<MdsObject>;
  /** 根据条件查询MdsObject */
  mdsLoadMdsObjectByCondition?: Maybe<MdsLoadMdsObjectByConditionResult>;
  /** 获取Mds更新日志 */
  mdsLoadMdsUpdateLogByCondition?: Maybe<MdsLoadMdsUpdateLogByConditionResult>;
  /** 获取物理区域 */
  mdsLoadPhysicalArea?: Maybe<Array<Maybe<PhysicalArea>>>;
  /**
   * 技术类目详情::调度日志查询(本接口已弃用,请使用getImportJobsByScheduleId接口代替)
   * @deprecated No longer supported
   */
  mdsLoadScheduleLogs?: Maybe<MdsLoadScheduleLogsResponse>;
  /** 通过dbsourceId dbName获取所有schema */
  mdsLoadSchemaByDbSourceIdAndDbName?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /**
   * 技术类目管理
   * 获取技术类目管理列表
   */
  mdsLoadTechCataData?: Maybe<Array<Maybe<MdsTechCataData>>>;
  /** 获取技术类目详情页 */
  mdsLoadTechCataDataById?: Maybe<MdsTechCataData>;
  /** 获取用户[收藏,订阅,浏览,喜欢]数据接口 */
  mdsLoadUserCollections?: Maybe<MdsLoadUserCollectionsData>;
  /** 获取版本信息 */
  mdsLoadVersionLog?: Maybe<Array<Maybe<MdsVersionLog>>>;
  /** 获取指标目录 */
  mdsMetricClassList?: Maybe<Array<Maybe<MdsMetricClass>>>;
  /** 指标元数据分页查询参数 */
  mdsMetricPage?: Maybe<MdsMetricResult>;
  /** 指标元数据详情 */
  mdsMetricView?: Maybe<MdsMetric>;
  mdsScheduleQuery?: Maybe<MdsTechCataSchedulePagination>;
  /** Mds搜索接口 */
  mdsSearch?: Maybe<MdsSearchResult>;
  /** Mds相似字段搜索 */
  searchSimilarMds?: Maybe<DsSearchMdsResult>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryFindAllNotMountArgs = {
  input?: Maybe<MetadataObjectNotMountCondition>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryFindByIdArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryFindImportJobsByConditionArgs = {
  input?: Maybe<ImportJobCondition>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryFindLabelByConditionArgs = {
  keyword?: Maybe<Scalars["String"]>;
  labelType: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryFindLabelByLabelTypesArgs = {
  labelTypes: Array<Maybe<Scalars["String"]>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetImportJobExcelFileArgs = {
  ids: Array<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetImportJobsByScheduleIdArgs = {
  mdsScheduleId: Scalars["ID"];
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetInputMdsObjectByCategoryIdArgs = {
  offset: Scalars["Int"];
  size: Scalars["Int"];
  techCategoryId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetInputMdsObjectByIdArgs = {
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetOperationLogArgs = {
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryHomeMdsStatisticalBarChartArgs = {
  type: CategoryTypeEnum;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsAnalysisColumnArgs = {
  input?: Maybe<MdsAnalysisQueryInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsAnalysisObjectArgs = {
  input?: Maybe<MdsAnalysisQueryInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsApiCumsPageArgs = {
  input?: Maybe<MdsApiFindCondition>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsApiViewArgs = {
  apiId: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsDeleteBusiCategoryEffectArgs = {
  ids: Array<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsDeleteTechCategoryEffectArgs = {
  techCateId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsDetectionDbNameArgs = {
  dbName?: Maybe<Scalars["String"]>;
  dbSourceId: Scalars["ID"];
  schema?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsDetectionDbSourceArgs = {
  input?: Maybe<MdsDbSourceInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsFindBrTaskByConditionArgs = {
  input?: Maybe<MdsLoadUpdateBoolRelationTaskConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsFindBrTaskByIdArgs = {
  taskId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsGenerateDdlArgs = {
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsGenerateDdlWithVersionIdsArgs = {
  mdsObjectId: Scalars["ID"];
  verIds: Array<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsGetColumnDataFileArgs = {
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsGetColumnDataFileDaXingArgs = {
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsGetSampleDatasArgs = {
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsGetScheduleLogFileArgs = {
  logIds: Array<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsGetTemplateFileUrlArgs = {
  type?: Maybe<TemplateFileTypeEnum>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadCategoriesByConditionArgs = {
  input?: Maybe<MdsLoadCategoriesConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadDbNameByDbSourceIdArgs = {
  dbSourceId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadDqsAndDsListByMdsIdAndColumnIdArgs = {
  mdsColumnId?: Maybe<Scalars["ID"]>;
  mdsId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadDbSourceArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadDbSourcesByConditionArgs = {
  input?: Maybe<MdsLoadDbSourcesConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadEtlJobListArgs = {
  input?: Maybe<MdsLoadEtlJobListInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadMdsHistoryObjectArgs = {
  mdsObjectId: Scalars["ID"];
  version: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadMdsObjectArgs = {
  isRecordPv?: Maybe<Scalars["Boolean"]>;
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadMdsObjectByConditionArgs = {
  input?: Maybe<MdsLoadMdsObjectConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadMdsUpdateLogByConditionArgs = {
  input?: Maybe<MdsLoadMdsUpdateLogByConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadScheduleLogsArgs = {
  input: MdsLoadScheduleLogsInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadSchemaByDbSourceIdAndDbNameArgs = {
  dbName?: Maybe<Scalars["String"]>;
  dbSourceId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadTechCataDataArgs = {
  keyword?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadTechCataDataByIdArgs = {
  techCatalogId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsLoadVersionLogArgs = {
  mdsObjectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsMetricClassListArgs = {
  superClassCd?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsMetricPageArgs = {
  input?: Maybe<MdsMetricFindCondition>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsMetricViewArgs = {
  id?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsScheduleQueryArgs = {
  input?: Maybe<MdsTechCataScheduleCondition>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMdsSearchArgs = {
  input?: Maybe<MdsSearchQueryInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySearchSimilarMdsArgs = {
  condition?: Maybe<SearchMdsCondition>;
};

export enum ResultSetEnum {
  /** 多选 */
  Multiple = "MULTIPLE",
  /** 单选 */
  Single = "SINGLE",
}

/** 示例数据返回结果 */
export type SampleDatasResult = {
  __typename?: "SampleDatasResult";
  columns?: Maybe<Array<Maybe<Scalars["String"]>>>;
  data?: Maybe<Scalars["JSON"]>;
  databaseType?: Maybe<DbSourceTypeEnum>;
};

export type ScheduleErrorVo = {
  __typename?: "ScheduleErrorVo";
  /** 百分比/错误数 */
  count?: Maybe<Scalars["Int"]>;
  /** 级别 */
  level?: Maybe<Scalars["String"]>;
};

export type ScheduleHistory = {
  __typename?: "ScheduleHistory";
  changesThat?: Maybe<Scalars["String"]>;
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  index?: Maybe<Scalars["Int"]>;
};

export type ScheduleWorkFlowVo = {
  __typename?: "ScheduleWorkFlowVo";
  /** 描述 */
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  /** 操作人 */
  operationUserId?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 推送类型 */
  pushEnums?: Maybe<Array<Maybe<PushEnum>>>;
};

export enum ScheduledTriggerTypeEnum {
  Automatic = "AUTOMATIC",
  Manual = "MANUAL",
}

export enum ScheduledTypeEnum {
  Day = "DAY",
  Month = "MONTH",
  Week = "WEEK",
}

/** Input && Response */
export type SearchMdsCondition = {
  columnName?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  techCategoryId?: Maybe<Scalars["ID"]>;
};

export type TagInfoResult = {
  __typename?: "TagInfoResult";
  id?: Maybe<Scalars["ID"]>;
  praiseCount?: Maybe<Scalars["Int"]>;
  removable?: Maybe<Scalars["Boolean"]>;
  tagName?: Maybe<Scalars["String"]>;
  tagObjectId?: Maybe<Scalars["ID"]>;
  tenantId?: Maybe<Scalars["ID"]>;
  useCount?: Maybe<Scalars["Int"]>;
  voted?: Maybe<Scalars["Boolean"]>;
};

export type TechCatalogPreview = {
  __typename?: "TechCatalogPreview";
  /** 新增数量 */
  add?: Maybe<Scalars["Int"]>;
  /** 导入总数 */
  amount?: Maybe<Scalars["Int"]>;
  /** 删除数量 */
  delete?: Maybe<Scalars["Int"]>;
  importJobId?: Maybe<Scalars["ID"]>;
  /** 修改数量 */
  update?: Maybe<Scalars["Int"]>;
};

/** 模板类型枚举 */
export enum TemplateFileTypeEnum {
  /** 接口模板 */
  Api = "API",
  /** 血缘/影响关系CSV模板 */
  BrCsv = "BR_CSV",
  /** 血缘/影响关系ETL SQL的ZIP压缩包 */
  BrSqlZip = "BR_SQL_ZIP",
  /** 数据模板,默认选项 */
  Data = "DATA",
  /** ES/Mongo/HBase 模板 */
  EsMongoHbase = "ES_MONGO_HBASE",
  /** 文件模板 */
  File = "FILE",
  /** 表模板 */
  Table = "TABLE",
}

export type User = {
  __typename?: "User";
  address?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  depts?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  jobNumber?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  telephone?: Maybe<Scalars["String"]>;
};

export enum PushEnum {
  /** 邮件 */
  Email = "EMAIL",
  /** 消息 */
  Message = "MESSAGE",
  /** 通知 */
  Notice = "NOTICE",
}

export type FindLabelByLabelTypesQueryVariables = Exact<{
  labelTypes: Array<Maybe<Scalars["String"]>> | Maybe<Scalars["String"]>;
}>;

export type FindLabelByLabelTypesQuery = {
  __typename?: "Query";
  result?:
    | Array<
        | {
            __typename?: "LabelAPIDTO";
            id?: string | null | undefined;
            name?: string | null | undefined;
            code?: string | null | undefined;
            type?: LabelType | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type FindAllNotMountQueryVariables = Exact<{
  input?: Maybe<MetadataObjectNotMountCondition>;
}>;

export type FindAllNotMountQuery = {
  __typename?: "Query";
  result?:
    | {
        __typename?: "MdsObjectAPIDTOResult";
        total: string;
        offset: number;
        size: number;
        data?:
          | Array<
              | {
                  __typename?: "MdsObjectAPIDTO";
                  id?: string | null | undefined;
                  tenantId?: string | null | undefined;
                  name?: string | null | undefined;
                  description?: string | null | undefined;
                  dataBaseName?: string | null | undefined;
                  mdsObjectTypeEnum?: MdsObjectTypeEnum | null | undefined;
                  dbSourceType?: DbSourceTypeEnum | null | undefined;
                  createTm?: any | null | undefined;
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

export const FindLabelByLabelTypesDocument = gql`
  query findLabelByLabelTypes($labelTypes: [String]!) {
    result: findLabelByLabelTypes(labelTypes: $labelTypes) {
      id
      name
      code
      type
    }
  }
`;

/**
 * __useFindLabelByLabelTypesQuery__
 *
 * To run a query within a Vue component, call `useFindLabelByLabelTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLabelByLabelTypesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFindLabelByLabelTypesQuery({
 *   labelTypes: // value for 'labelTypes'
 * });
 */
export function useFindLabelByLabelTypesQuery(
  variables:
    | FindLabelByLabelTypesQueryVariables
    | VueCompositionApi.Ref<FindLabelByLabelTypesQueryVariables>
    | ReactiveFunction<FindLabelByLabelTypesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        FindLabelByLabelTypesQuery,
        FindLabelByLabelTypesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          FindLabelByLabelTypesQuery,
          FindLabelByLabelTypesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          FindLabelByLabelTypesQuery,
          FindLabelByLabelTypesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    FindLabelByLabelTypesQuery,
    FindLabelByLabelTypesQueryVariables
  >(FindLabelByLabelTypesDocument, variables, options);
}
export type FindLabelByLabelTypesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    FindLabelByLabelTypesQuery,
    FindLabelByLabelTypesQueryVariables
  >;
export const FindAllNotMountDocument = gql`
  query findAllNotMount($input: MetadataObjectNotMountCondition) {
    result: findAllNotMount(input: $input) {
      total
      offset
      size
      data {
        id
        tenantId
        name
        description
        dataBaseName
        mdsObjectTypeEnum
        dbSourceType
        createTm
        primaryKey
      }
    }
  }
`;

/**
 * __useFindAllNotMountQuery__
 *
 * To run a query within a Vue component, call `useFindAllNotMountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllNotMountQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFindAllNotMountQuery({
 *   input: // value for 'input'
 * });
 */
export function useFindAllNotMountQuery(
  variables:
    | FindAllNotMountQueryVariables
    | VueCompositionApi.Ref<FindAllNotMountQueryVariables>
    | ReactiveFunction<FindAllNotMountQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        FindAllNotMountQuery,
        FindAllNotMountQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          FindAllNotMountQuery,
          FindAllNotMountQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          FindAllNotMountQuery,
          FindAllNotMountQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    FindAllNotMountQuery,
    FindAllNotMountQueryVariables
  >(FindAllNotMountDocument, variables, options);
}
export type FindAllNotMountQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    FindAllNotMountQuery,
    FindAllNotMountQueryVariables
  >;
