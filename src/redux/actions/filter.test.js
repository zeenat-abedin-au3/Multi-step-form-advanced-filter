import * as actions from "./filter";
import { FILTER_CHANGE } from "./type";

describe("Test suite for filter actions", () => {
  it("should create an action to change filter value", () => {
    const filterName = "price";
    const filterValue = [500, 6000];

    const expectedAction = {
      type: FILTER_CHANGE,
      payload: { filterName, filterValue },
    };

    expect(actions.filterChange(filterName, filterValue)).toEqual(
      expectedAction
    );
  });
});
