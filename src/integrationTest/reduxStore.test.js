import { createStore } from "redux";
import reducers from "../redux/reducers";

import { filterChange } from "../redux/actions/filter";
import {
  handleChange,
  handleStepCount,
  clearForm,
} from "../redux/actions/form";

describe("redux store integration test", () => {
  let store;
  beforeEach(() => {
    store = createStore(reducers);
  });

  it("should update filter state", () => {
    store.dispatch(filterChange("ratings", ["3", "4"]));

    const filterData = store.getState().filterReducer;

    expect(filterData.ratings).not.toEqual([3, "4"]);
    expect(filterData.ratings).toEqual(["3", "4"]);
  });

  it("should update form state", () => {
    store.dispatch(handleChange("email", "john@doe.com"));

    const { formData } = store.getState().formReducer;

    expect(formData.email).toEqual("john@doe.com");
    expect(formData.fullName).not.toEqual("John Doe");
  });

  it("should change step value", () => {
    store.dispatch(handleStepCount(4));

    const { step } = store.getState().formReducer;

    expect(step).toEqual(4);
    expect(step).not.toEqual("4");
  });

  it("should clear form value", () => {
    store.dispatch(handleChange("email", "john@doe.com"));
    store.dispatch(clearForm());
    const { formReducer } = store.getState();

    expect(formReducer).toEqual({
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
    });
  });
});
