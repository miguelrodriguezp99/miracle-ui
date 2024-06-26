import React from "react";
interface ImageProps {
    route: string;
    alt?: string;
    width: string;
    height: string;
}
export declare const Image: ({ route, width, height }: ImageProps) => React.JSX.Element;
export default Image;
