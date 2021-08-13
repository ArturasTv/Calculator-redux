import styles from "./Calculator.module.scss";
import Basicbutton from "../Buttons/Basic-button/Basic-button";
import Equalbutton from "../Buttons/Equal-button.js/Equal-button";
import Calculatorscreen from "../Screen/Calculator-screen";
import { useSelector } from "react-redux";

const Calculator = () => {
  const firstVariable = useSelector((state) => state.firstVariable);
  const secondVariable = useSelector((state) => state.secondVariable);
  const result = useSelector((state) => state.result);
  const show = {
    FIRST: firstVariable,
    SECOND: secondVariable,
    RESULT: result,
  };
  const active = useSelector((state) => state.active);
  return (
    <div className={styles["calculator-center"]}>
      <table>
        <tbody>
          <tr>
            <td colSpan="4">
              <Calculatorscreen results={show[active]} />
            </td>
          </tr>
          <tr>
            <td>
              <Basicbutton name="+" />
            </td>
            <td>
              <Basicbutton name="-" />
            </td>
            <td>
              <Basicbutton name="×" />
            </td>
            <td>
              <Basicbutton name="÷" />
            </td>
          </tr>
          <tr>
            <td>
              <Basicbutton name="7" />
            </td>
            <td>
              <Basicbutton name="8" />
            </td>
            <td>
              <Basicbutton name="9" />
            </td>
            <td rowSpan="4">
              <Equalbutton name="=" />
            </td>
          </tr>
          <tr>
            <td>
              <Basicbutton name="4" />
            </td>
            <td>
              <Basicbutton name="5" />
            </td>
            <td>
              <Basicbutton name="6" />
            </td>
          </tr>
          <tr>
            <td>
              <Basicbutton name="1" />
            </td>
            <td>
              <Basicbutton name="2" />
            </td>
            <td>
              <Basicbutton name="3" />
            </td>
          </tr>
          <tr>
            <td>
              <Basicbutton name="0" />
            </td>
            <td>
              <Basicbutton name="." />
            </td>
            <td>
              <Basicbutton name="C" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
