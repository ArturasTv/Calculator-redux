import { calculateTwoNums } from "../../utils";
const resultReducer = (state = "", action) => {
  switch (action.type) {
    case "SETRESULT":
      return (state = calculateTwoNums(
        +action.first,
        +action.second,
        action.operation
      ));
    default:
      return state;
  }
};
export default resultReducer;
