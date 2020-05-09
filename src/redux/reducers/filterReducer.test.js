import filterReducer from "./filterReducer";
import { FILTER_CHANGE } from "../actions/type";

describe("Filter reducer unit test", () => {
  const INITAL_STATE = {
    categories: [],
    price: [0, 8000],
    brands: [],
    ratings: [],
    sizes: [],
  };

  it("should return an empty array when inital state and action is undefined", () => {
    expect(filterReducer(undefined, {})).not.toEqual([]);
    expect(filterReducer(undefined, {})).toEqual(INITAL_STATE);
  });

  it("should update initial state by updating one value of filter", () => {
    const filterChangeAction = {
      type: FILTER_CHANGE,
      payload: {
        filterName: "ratings",
        filterValue: ["1", "4"],
      },
    };
    const expectedState = {
      categories: [],
      price: [0, 8000],
      brands: [],
      ratings: ["1", "4"],
      sizes: [],
    };
    const unExpectedState = {
      categories: [],
      price: [0, 8000],
      brands: [],
      ratings: ["1", 4],
      sizes: [],
    };

    expect(filterReducer(INITAL_STATE, filterChangeAction)).toEqual(
      expectedState
    );
    expect(filterReducer(INITAL_STATE, filterChangeAction)).not.toEqual(
      unExpectedState
    );
  });
});
