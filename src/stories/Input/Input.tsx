import React from "react";
import {
    InputRadius,
    InputSizes,
    InputTypes,
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
    isDisabled?: boolean;
    type?: InputTypes;
};

export const Input = ({
    color = "default",
    placeholder = "",
    size = "medium",
    width = "medium",
    radius = "medium",
    variant = "flat",
    isDisabled = false,
    type = "text",
}: Props) => {
    return (
        <div
            className={classNames(styles["input-container"], {
                [styles[`width-${width}`]]: width,
                [styles[color]]: color,
                [styles[variant]]: variant,
                [styles["is-disabled"]]: isDisabled,
            })}
        >
            <input
                id="email"
                type={type}
                className={classNames(styles.input, styles[size], {
                    [styles[`border-radius-${radius}`]]: radius,
                    [styles['has-placeholder']]: placeholder != "",
                })}
                placeholder={placeholder}
                disabled={isDisabled}
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
