import { DataProvider, fetchUtils } from "react-admin";

const API_URL = "http://localhost:3000"

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}?_page=${page}&_limit${perPage}&_sort${field}&_order${order}`);
    const data = await response.json();

    return { 
      data: response.json,
      total: parseInt(response.headers.get("x-total-count") || "", 10)
    };
  },
}