import React from "react";
import { SemanticColor, semanticColors } from "../../lib/colors";
import { BadgeRadius, BadgeSizes, BadgeVariants } from "./constants";
import styles from "./badge.module.css";
import classNames from "classnames";
import Avatar from "../Avatar";
type Props = {
    color: SemanticColor;
    variant: BadgeVariants;
    size: BadgeSizes;
    radius: BadgeRadius;
    children: React.ReactNode;
    badgeContent: string | React.ReactNode;
    isCircular: boolean;
    bordered: boolean;
};
export const Badge = ({
    children = <Avatar radius="md" name="John" />,
    color = semanticColors.danger,
    isCircular = false,
    badgeContent = "5",
    bordered = true,
}: Props) => {
    return (
        <div
            className={classNames(styles["badge-container"], {
                [color]: color,

            })}
        >
            {children}
            <div
                className={classNames(styles.badge, {
                    [styles["square"]]: !isCircular,
                    [styles["circular"]]: isCircular,
                    [styles["bordered"]]: bordered,
                    [color]: color,
                })}
            >
                <span>{badgeContent}</span>
            </div>
        </div>
    );
};
