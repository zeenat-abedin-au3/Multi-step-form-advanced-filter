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
  switch (action.type) {
    default:
      return state;
  }
};

export default formReducer;
