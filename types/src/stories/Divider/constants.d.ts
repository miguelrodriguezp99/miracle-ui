export declare const directions: {
    readonly vertical: "vertical";
    readonly horizontal: "horizontal";
};
export type DividerDirection = (typeof directions)[keyof typeof directions];
