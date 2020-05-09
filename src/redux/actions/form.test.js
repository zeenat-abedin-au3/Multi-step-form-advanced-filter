import { handleChange, handleStepCount, clearForm } from "./form";
import { INPUT_CHANGE, STEP_COUNT, CLEAR_FORM } from "./type";

describe("Test suite for form's actions", () => {
  it("should create an action to change form value", () => {
    const name = "fullName";
    const value = "John Doe";

    const expectedAction = {
      type: INPUT_CHANGE,
      payload: { name, value },
    };

    expect(handleChange(name, value)).toEqual(expectedAction);
  });

  it("should create an action to change step count", () => {
    const number = 4;

    const unExpectedAction = {
      type: INPUT_CHANGE,
      payload: number,
    };
    const expectAction = {
      type: STEP_COUNT,
      payload: number,
    };

    expect(handleStepCount(String(number))).not.toEqual(unExpectedAction);
    expect(handleStepCount(number)).toEqual(expectAction);
  });

  it("should create an action to clear form", () => {
    const expectAction = {
      type: CLEAR_FORM,
    };

    expect(clearForm()).toEqual(expectAction);
  });
});
