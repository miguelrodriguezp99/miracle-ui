export declare const semanticColors: {
    readonly default: "default";
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly success: "success";
    readonly warning: "warning";
    readonly danger: "danger";
};
export declare const semanticColorsCheckbox: {
    readonly none: "none";
    readonly default: "default";
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly success: "success";
    readonly warning: "warning";
    readonly danger: "danger";
};
export type SemanticColor = (typeof semanticColors)[keyof typeof semanticColors];
export type SemanticColorCheckbox = (typeof semanticColorsCheckbox)[keyof typeof semanticColorsCheckbox];
