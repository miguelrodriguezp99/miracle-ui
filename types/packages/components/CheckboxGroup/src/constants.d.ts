export declare const gaps: {
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
};
export type CheckboxGap = (typeof gaps)[keyof typeof gaps];
export declare const directions: {
    readonly vertical: "vertical";
    readonly horizontal: "horizontal";
};
export type CheckboxDirection = (typeof directions)[keyof typeof directions];
