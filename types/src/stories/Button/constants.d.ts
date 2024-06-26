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
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
};
export type ButtonSizes = (typeof sizes)[keyof typeof sizes];
export declare const radius: {
    readonly none: "none";
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
    readonly full: "full";
};
export type ButtonRadius = (typeof radius)[keyof typeof radius];
