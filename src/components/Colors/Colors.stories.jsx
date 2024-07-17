import { semanticColors } from "../../lib/colors";
import styles from "./colors.module.css";

export default {
  title: "Foundations/Colors",
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  argTypes: {},
};

export const SemanticColors = () => (
  <div className={styles.container}>
    <h1>Semantic colors</h1>
    <div className={styles["colors-container"]}>
      {Object.keys(semanticColors).map((color) => (
        <div
          key={color}
          className={`${styles[`color-${color}`]} ${styles["color-card"]}`}
        >
          <span className={styles.text}>{color}</span>
        </div>
      ))}
    </div>
  </div>
);
