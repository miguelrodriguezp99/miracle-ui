import React from "react";
import {
    SemanticColorCheckbox,
    semanticColorsCheckbox,
} from "../../lib/colors";
import styles from "./checkbox.module.css";
import { CheckboxRadius, CheckboxSize } from "./constants";
import classNames from "classnames";

type Props = {
    color: SemanticColorCheckbox;
    textColor?: boolean;
    size: CheckboxSize;
    text: string;
    radius: CheckboxRadius;
};

export const Checkbox = ({
    color = semanticColorsCheckbox.none,
    textColor,
    radius = "md",
    text = "Checkbox",
    size = "lg",
}: Props) => {
    return (
        <label
            className={classNames(styles["checkbox-label"], {
                [styles[`font-${size}`]]: size,
                [color]: color,
                [styles[`text-color`]]: textColor,
            })}
        >
            <input className={styles["checkbox-input"]} type="checkbox" />
            <span
                className={classNames(styles["input-check"], {
                    [styles[size]]: size,
                    [styles[`radius-${radius}`]]: radius,
                })}
            ></span>
            {text}
        </label>
    );
};

export default Checkbox;
