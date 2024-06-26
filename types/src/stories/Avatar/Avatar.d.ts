import React from "react";
import { AvatarRadius, AvatarSizes } from "./constants";
type Props = {
    name?: string;
    avatar?: string;
    radius?: AvatarRadius;
    size?: AvatarSizes;
};
export declare const Avatar: ({ name, avatar, radius, size }: Props) => React.JSX.Element;
export default Avatar;
