export declare const variants: {
    readonly solid: "solid";
    readonly bordered: "bordered";
    readonly light: "light";
    readonly flat: "flat";
    readonly faded: "faded";
    readonly shadow: "shadow";
    readonly ghost: "ghost";
};
export type ButtonVariants = (typeof variants)[keyof typeof variants];
export declare const sizes: {
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
};
export type ButtonSizes = (typeof sizes)[keyof typeof sizes];
export declare const radius: {
    readonly none: "none";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly full: "full";
};
export type ButtonRadius = (typeof radius)[keyof typeof radius];
