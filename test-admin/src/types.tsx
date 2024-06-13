interface GetListParams {
  pagination: { page: number, perPage: number };
  sort: { field: string, order: 'ASC' | 'DESC'};
  filter: any;
  meta?: any;
}

interface GetListResult<T> {
  data: Record<string, T>[];
  total?: number;

  pageInfor?: {
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
  };
}

function getList<T>(resource: string, params: GetListParams): Promise<GetListResult<T>>