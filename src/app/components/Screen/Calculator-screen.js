import React from "react";
import styles from "./Calculator-screen.module.scss";
const Calculatorscreen = ({ results }) => {
  return (
    <div className={styles["calculator-screen"]}>
      <div className={styles["outside"]}>
        <div className={styles["center-middle"]}>{results}</div>
      </div>
    </div>
  );
};

export default Calculatorscreen;
