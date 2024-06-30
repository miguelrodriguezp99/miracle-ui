export declare const variants: {
    readonly solid: "solid";
    readonly flat: "flat";
    readonly faded: "faded";
};
export type BadgeVariants = (typeof variants)[keyof typeof variants];
export declare const positions: {
    tl: string;
    tr: string;
    bl: string;
    br: string;
};
export type BadgePosition = (typeof positions)[keyof typeof positions];
export declare const widths: {
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly full: "full";
};
export type BadgeWidth = (typeof widths)[keyof typeof widths];
export declare const radii: {
    readonly none: "none";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
    readonly full: "full";
};
export type BadgeRadius = (typeof radii)[keyof typeof radii];
