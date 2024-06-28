import React from "react";
import { SemanticColor } from "../../lib/colors";
import styles from "./checkbox.module.css";
import { CheckboxSize } from "./constants";
import classNames from "classnames";

type Props = {
    color: SemanticColor;
    size: CheckboxSize;
};

export const Checkbox = ({ color, size = "md" }: Props) => {
    return (
        <label className={classNames(styles["checkbox-label"], {
            [styles[`font-${size}`]]: size,
        })} >
            <input className={styles["checkbox-input"]} type="checkbox" />
            <span className={classNames(styles["input-check"], {
                [styles[size]]: size,
            })}></span>
            Checkbox
        </label>
    );
}

export default Checkbox;
