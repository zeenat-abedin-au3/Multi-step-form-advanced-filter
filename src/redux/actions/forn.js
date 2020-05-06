import { INPUT_CHANGE, STEP_COUNT } from "./type";

export const handleChange = (name, value) => ({
  type: INPUT_CHANGE,
  payload: { name, value },
});

export const handleStepCount = (number) => ({
  type: STEP_COUNT,
  payload: number,
});
