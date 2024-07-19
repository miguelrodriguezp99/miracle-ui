export declare const variants: {
    readonly flat: "flat";
    readonly bordered: "bordered";
    readonly faded: "faded";
    readonly underlined: "underlined";
};
export type AvatarVariants = (typeof variants)[keyof typeof variants];
export declare const sizes: {
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
};
export type AvatarSizes = (typeof sizes)[keyof typeof sizes];
export declare const widths: {
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly full: "full";
};
export type AvatarWidth = (typeof widths)[keyof typeof widths];
export declare const radii: {
    readonly none: "none";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
    readonly full: "full";
};
export type AvatarRadius = (typeof radii)[keyof typeof radii];
