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
    readonly "top-start": "top-start";
    readonly "top-end": "top-end";
    readonly left: "left";
    readonly "left-start": "left-start";
    readonly "left-end": "left-end";
    readonly bottom: "bottom";
    readonly "bottom-start": "bottom-start";
    readonly "bottom-end": "bottom-end";
    readonly right: "right";
    readonly "right-start": "right-start";
    readonly "right-end": "right-end";
};
export type DropdownPositions = (typeof positions)[keyof typeof positions];
