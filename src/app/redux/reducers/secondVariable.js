const secondVariableReducer = (state = "0", action) => {
  switch (action.type) {
    case "SETVALUESECOND":
      return state.length < 16
        ? state[0] === "0"
          ? (state + action.payload).substring(1)
          : state + action.payload
        : state;
    case "RESET":
      return (state = "0");
    default:
      return state;
  }
};
export default secondVariableReducer;
