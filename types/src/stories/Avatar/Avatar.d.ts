import React from "react";
import { AvatarRadius, AvatarSizes } from "./constants";
import { SemanticColor } from "../../lib/colors";
type Props = {
    name?: string;
    avatar?: string;
    radius?: AvatarRadius;
    size?: AvatarSizes;
    color?: SemanticColor;
    bordered?: boolean;
    isDisabled?: boolean;
};
export declare const Avatar: ({ name, avatar, radius, size, bordered, color, isDisabled, }: Props) => React.JSX.Element;
export default Avatar;
