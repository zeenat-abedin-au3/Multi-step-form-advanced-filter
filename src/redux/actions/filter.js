import { FILTER_CHANGE } from "./type";

export const filterChange = (filterName, filterValue) => ({
  type: FILTER_CHANGE,
  payload: { filterName, filterValue },
});
