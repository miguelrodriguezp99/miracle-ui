import React from "react";
import styles from "./avatar.module.css";
import classNames from "classnames";

type Props = {
    children: React.ReactNode;
    animation?: "vertical" | "horizontal";
}

export const AvatarGroup = ({ children, animation = "vertical" }: Props) => {
    return (
        <div className={classNames(styles["avatar-group"], {
            [styles["vertical"]]: animation === "vertical",
            [styles["horizontal"]]: animation === "horizontal",
        })}>
            {children}
        </div>
    );
}

export default AvatarGroup;
