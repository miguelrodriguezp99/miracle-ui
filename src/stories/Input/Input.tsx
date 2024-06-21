import React from "react";
import { InputRadius, InputSizes, InputVariants } from "./constants";
import styles from "./input.module.css";

type Props = {
    placeholder?: string;
    size?: InputSizes;
    variant?: InputVariants;
    radius?: InputRadius;
}
export const Input = ({ placeholder = "" }: Props) => {
    return (
        <div className={styles["input-container"]}>
            <input id="email" className={`${styles.input} ${styles.peer}`} placeholder={placeholder} />
            <label htmlFor="email" className={styles.label}>Email</label>
        </div>
    );
}