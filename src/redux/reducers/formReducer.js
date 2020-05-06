import { INPUT_CHANGE, STEP_COUNT } from "../actions/type";

const INITIAL_STATE = {
  formData: {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    gender: "",
    occupation: "",
    address: "",
    city: "",
    state: "",
    country: "",
  },
  step: 1,
};

const formReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case INPUT_CHANGE:
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: payload.value },
      };
    case STEP_COUNT:
      return {
        ...state,
        step: payload,
      };
    default:
      return state;
  }
};

export default formReducer;
