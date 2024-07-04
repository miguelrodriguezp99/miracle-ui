export declare const variants: {
    readonly solid: "solid";
    readonly bordered: "bordered";
    readonly light: "light";
    readonly flat: "flat";
    readonly faded: "faded";
    readonly ghost: "ghost";
};
export type DropdownVariants = (typeof variants)[keyof typeof variants];
export declare const positions: {
    readonly top: "top";
    readonly left: "left";
    readonly bottom: "bottom";
    readonly right: "right";
};
export type DropdownPositions = (typeof positions)[keyof typeof positions];
