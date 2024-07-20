export declare const directions: {
    readonly vertical: "vertical";
    readonly horizontal: "horizontal";
};
export type SpinnerDirection = (typeof directions)[keyof typeof directions];
export declare const sizes: {
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
};
export type SpinnerSizes = (typeof sizes)[keyof typeof sizes];
