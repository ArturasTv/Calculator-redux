export const setFirstValue = (number) => {
  return {
    type: "SETVALUEFIRST",
    payload: number,
  };
};

export const setSecondValue = (number) => {
  return {
    type: "SETVALUESECOND",
    payload: number,
  };
};

export const setOpertation = (op) => {
  return {
    type: "SETOPERATION",
    payload: op,
  };
};

export const isDot = () => {
  return {
    type: "SETDOT",
  };
};
export const resetDot = () => {
  return {
    type: "RESETDOT",
  };
};
export const reset = () => {
  return {
    type: "RESET",
  };
};

export const setResult = (first, second, operation) => {
  return {
    type: "SETRESULT",
    first: first,
    second: second,
    operation: operation,
  };
};
