import { FILTER_CHANGE } from "../actions/type";

const INITAL_STATE = {
  categories: [],
  price: [0, 8000],
  brands: [],
  ratings: [],
  sizes: [],
};

const filterReducer = (state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_CHANGE:
      return {
        ...state,
        [payload.filterName]: [...payload.filterValue],
      };
    default:
      return state;
  }
};

export default filterReducer;
