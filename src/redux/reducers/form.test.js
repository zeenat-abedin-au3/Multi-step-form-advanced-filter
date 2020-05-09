import formReducer from "./formReducer";
import { INPUT_CHANGE, STEP_COUNT, CLEAR_FORM } from "../actions/type";

describe("Unit test of form reducer", () => {
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

  it("should return INITIAL_SATTE when inital state and action is undefined", () => {
    expect(formReducer(undefined, {})).not.toEqual([]);
    expect(formReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should change form data by changing one value", () => {
    const handleChangeAction = {
      type: INPUT_CHANGE,
      payload: {
        name: "fullName",
        value: "John Doe",
      },
    };

    const expectedState = {
      formData: {
        fullName: "John Doe",
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
    const unExpectedState = {
      formData: {
        fullName: "John Doe",
      },
    };

    expect(formReducer(INITIAL_STATE, handleChangeAction)).toEqual(
      expectedState
    );
    expect(formReducer(INITIAL_STATE, handleChangeAction)).not.toEqual(
      unExpectedState
    );
  });

  it("should update step value", () => {
    const stepChangeAction = {
      type: STEP_COUNT,
      payload: 4,
    };
    const expectedState = {
      formData: {
        ...INITIAL_STATE.formData,
      },
      step: 4,
    };
    const unExpectedState = {
      formData: {
        ...INITIAL_STATE.formData,
      },
      step: "4",
    };

    expect(formReducer(INITIAL_STATE, stepChangeAction)).not.toEqual(
      unExpectedState
    );
    expect(formReducer(INITIAL_STATE, stepChangeAction)).toEqual(expectedState);
  });

  it("should clear whole state", () => {
    const clearFormAction = {
      type: CLEAR_FORM,
    };
    expect(formReducer(INITIAL_STATE, clearFormAction)).toEqual(INITIAL_STATE);
  });
});
