import styles from "./Basic-button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstValue,
  setSecondValue,
  setOpertation,
  isDot,
  resetDot,
  reset,
} from "../../../redux/actions/actions";
import { isOperation } from "../../../utils";

let setValue = setFirstValue;

const Basicbutton = ({ name }) => {
  const dispatch = useDispatch();
  const checkDot = useSelector((state) => state.isDot);
  const active = useSelector((state) => state.active);
  const result = useSelector((state) => state.result);
  const handleButton = (value) => {
    if (active === "RESULT") {
      dispatch(reset());
      dispatch(setFirstValue(result));
    }

    if (isOperation(value)) {
      dispatch(setOpertation(value));
      dispatch(resetDot());
      setValue = setSecondValue;
    }

    if (value === ".") dispatch(isDot());

    if (!isNaN(value) || (value === "." && !checkDot))
      dispatch(setValue(checkDot ? +value : value));

    if (value === "C") {
      dispatch(reset());
      setValue = setFirstValue;
    }
  };

  return (
    <div onClick={() => handleButton(name)} className={styles["grey-button"]}>
      <p>{name}</p>
    </div>
  );
};

export default Basicbutton;
