import styles from "./Equal-button.module.scss";
import { setResult } from "../../../redux/actions/actions";

import { useSelector, useDispatch } from "react-redux";

const Equalbutton = ({ name }) => {
  const dispatch = useDispatch();
  const firstVariable = useSelector((state) => state.firstVariable);
  const secondVariable = useSelector((state) => state.secondVariable);
  const operation = useSelector((state) => state.operation);
  const active = useSelector((state) => state.active);
  const handleButton = () => {
    if (active === "SECOND") {
      dispatch(setResult(firstVariable, secondVariable, operation));
    }
  };
  return (
    <div onClick={() => handleButton()} className={styles["equal-button"]}>
      <p>{name}</p>
    </div>
  );
};

export default Equalbutton;
