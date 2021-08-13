import styles from "./App.module.scss";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className={styles["App-center"]}>
      <Calculator />
    </div>
  );
}
export default App;
