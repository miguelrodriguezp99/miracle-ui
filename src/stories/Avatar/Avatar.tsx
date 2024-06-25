import React from "react";
import styles from "./avatar.module.css";
import { AvatarRadius, AvatarSizes } from "./constants";
import classNames from 'classnames';
import { AvatarIcon } from "./AvatarIcon";

type Props = {
    name?: string;
    avatar?: string;
    radius?: AvatarRadius;
    size?: AvatarSizes;
}

export const Avatar = ({ name, avatar, radius = "full", size = "md" }: Props) => {
    let content;

    if (name) {
        name?.length > 4 ? name = name.slice(0, 4) : name;
    }

    if (avatar) {
        content =
            <img
                className={classNames(styles["avatar-image"], {
                    [styles[`size-${size}`]]: size,
                })}
                src={avatar}
                alt="avatar"
            />
    } else if (name) {
        content = (
            <div className={classNames(styles[`text-container`], {
                [styles[`size-${size}`]]: size,
            })}>{name}</div>
        );
    } else {
        content = (
            <AvatarIcon size={size} />
        );
    }

    return (
        <div className={classNames(styles["avatar-container"], {
            [styles[`radius-${radius}`]]: radius,

        })}>
            {content}
        </div>
    );
}

export default Avatar;