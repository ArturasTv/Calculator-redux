const operationReducer = (state = "", action) => {
  switch (action.type) {
    case "SETOPERATION":
      return action.payload;
    case "RESET":
      return (state = "");
    default:
      return state;
  }
};
export default operationReducer;
