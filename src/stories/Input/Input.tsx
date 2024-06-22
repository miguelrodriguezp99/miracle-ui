import React from "react";
import {
    InputRadius,
    InputSizes,
    InputVariants,
    InputWidth,
} from "./constants";
import styles from "./input.module.css";
import { SemanticColor } from "../../lib/colors";
import classNames from "classnames";

type Props = {
    placeholder?: string;
    color?: SemanticColor;
    size?: InputSizes;
    variant?: InputVariants;
    width?: InputWidth;
    radius?: InputRadius;
};

export const Input = ({
    color = "default",
    placeholder = "",
    size = "medium",
    width = "medium",
    radius = "medium",
    variant = "flat",
}: Props) => {
    return (
        <div
            className={classNames(styles["input-container"], {
                [styles[`width-${width}`]]: width,
                [styles[color]]: color,
                [styles[variant]]: variant,
            })}
        >
            <input
                id="email"
                className={classNames(styles.input, styles[size], {
                    [styles[`border-radius-${radius}`]]: radius,
                })}
                placeholder={placeholder}
            />
            <label
                htmlFor="email"
                className={classNames(styles.label, styles[`label-${size}`])}
            >
                Email
            </label>
            {variant === "underlined" && (
                <div className={styles.underline}></div>
            )}
        </div>
    );
};

export default Input;
