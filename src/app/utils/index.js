export const isOperation = (check) => {
  const operation = ["+", "-", "×", "÷"];
  for (let i = 0; i < operation.length; i++) {
    if (check === operation[i]) return true;
  }
  return false;
};
export const calculateTwoNums = (first, second, operation) => {
  if (operation === "+") return +(first + second).toFixed(2);
  if (operation === "-") return +(first - second).toFixed(2);
  if (operation === "×") return +(first * second).toFixed(2);
  if (operation === "÷") return +(first / second).toFixed(2);
};
