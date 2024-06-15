import React from "react";

import styles from "./image.module.css";

interface ImageProps {
    route: string;
    alt?: string;
    width: string;
    height: string;
}

export const Image = ({ route, width, height }: ImageProps) => {
    return (
        <img src={route} alt="image" width={width} height={height} className={styles.image} />
    );
}