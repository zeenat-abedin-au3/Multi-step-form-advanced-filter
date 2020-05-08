import { combineReducers } from "redux";

import formReducer from "./formReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  formReducer,
  filterReducer,
});
