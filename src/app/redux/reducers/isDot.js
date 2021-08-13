const isDotReducer = (state = false, action) => {
  switch (action.type) {
    case "SETDOT":
      return true;
    case "RESETDOT":
      return false;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};
export default isDotReducer;
