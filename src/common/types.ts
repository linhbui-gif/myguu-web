export type TCommonResponse = {
  paging: TCommonPaginate;
  status: boolean;
};

export type TCommonPaginate = {
  limit: number;
  offset: number;
  page: number;
  pageCount: number;
  total: number;
};
