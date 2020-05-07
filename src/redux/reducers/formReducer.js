import { INPUT_CHANGE, STEP_COUNT, CLEAR_FORM } from "../actions/type";

const INITIAL_STATE = {
  formData: {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    gender: "female",
    occupation: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
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
    case CLEAR_FORM:
      return {
        ...state,
        step: 1,
        formData: {
          fullName: "",
          email: "",
          phone: "",
          password: "",
          age: "",
          gender: "female",
          occupation: "",
          address: "",
          city: "",
          pincode: "",
          state: "",
        },
      };
    default:
      return state;
  }
};

export default formReducer;
