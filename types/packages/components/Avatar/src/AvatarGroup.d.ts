import React from "react";
type Props = {
    children: React.ReactNode;
    animation?: "vertical" | "horizontal";
    isDisabled?: boolean;
};
export declare const AvatarGroup: ({ children, animation, isDisabled, }: Props) => React.JSX.Element;
export default AvatarGroup;
