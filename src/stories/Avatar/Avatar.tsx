import React from "react";
import styles from "./avatar.module.css";
import { AvatarRadius, AvatarSizes, radii, sizes } from "./constants";
import classNames from "classnames";
import { AvatarIcon } from "./AvatarIcon";
import { SemanticColor, semanticColors } from "../../lib/colors";

type Props = {
    name?: string;
    avatar?: string;
    radius?: AvatarRadius;
    size?: AvatarSizes;
    color?: SemanticColor;
    bordered?: boolean;
    isDisabled?: boolean;
};

export const Avatar = ({
    name,
    avatar,
    radius = radii.full,
    size = sizes.md,
    bordered = false,
    color = semanticColors.default,
    isDisabled,
}: Props) => {
    let content;

    if (name) {
        name?.length > 4 ? (name = name.slice(0, 4)) : name;
    }

    if (avatar) {
        content = (
            <img
                className={classNames(styles["avatar-image"], {
                    [styles[`size-${size}`]]: size,
                })}
                src={avatar}
                alt="avatar"
            />
        );
    } else if (name) {
        content = (
            <div
                className={classNames(styles[`text-container`], {
                    [styles[`size-${size}`]]: size,
                    [styles[`${color}`]]: color,
                })}
            >
                {name}
            </div>
        );
    } else {
        content = <AvatarIcon size={size} color={color} />;
    }

    return (
        <div
            className={classNames(styles["avatar-container"], {
                [styles[`radius-${radius}`]]: radius,
                [styles[color]]: color,
                [styles["bordered"]]: bordered,
                [styles["disabled"]]: isDisabled,
            })}
        >
            {content}
        </div>
    );
};

export default Avatar;
