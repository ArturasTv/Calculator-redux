import firstVariableReducert from "./firstVariable";
import secondVariableReducer from "./secondVariable";
import isDotReducer from "./isDot";
import operationReducer from "./operation";
import activeReducer from "./active";
import resultReducer from "./result";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  firstVariable: firstVariableReducert,
  secondVariable: secondVariableReducer,
  isDot: isDotReducer,
  operation: operationReducer,
  active: activeReducer,
  result: resultReducer,
});

export default rootReducer;
