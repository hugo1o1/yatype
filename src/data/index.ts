export interface Schema {
  list?: {
    /**
     * 申请人
     */
    applyLdap?: string;
    /**
     * 推单申请原因
     */
    applyReason?: string;
    /**
     * 申请创建时间
     */
    createdTime?: number;
    /**
     * 执行状态
     */
    executeStatus?: "CREATED" | "PROCESSING" | "DONE" | "ERROR" | "REJECTED";
    /**
     * 自定义发货任务 id
     */
    id?: number;
    /**
     * 审批状态
     */
    reviewStatus?: "CREATED" | "PROCESSING" | "DONE" | "ERROR" | "REJECTED";
    [k: string]: unknown;
  }[];
  pageInfo?: {
    currentPage?: number;
    pageSize?: number;
    totalItem?: number;
    totalPage?: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
