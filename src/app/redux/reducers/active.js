const activeReducer = (state = "FIRST", action) => {
  switch (action.type) {
    case "SETVALUEFIRST":
      return "FIRST";
    case "SETVALUESECOND":
      return "SECOND";
    case "SETRESULT":
      return "RESULT";
    case "RESET":
      return (state = "FIRST");
    default:
      return state;
  }
};
export default activeReducer;
