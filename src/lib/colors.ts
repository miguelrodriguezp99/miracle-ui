export const semanticColors = {
    default: "default",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    warning: "warning",
    danger: "danger"
} as const;

export const semanticColorsCheckbox = {
    none: "none",
    default: "default",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    warning: "warning",
    danger: "danger"
} as const;



export type SemanticColor = typeof semanticColors[keyof typeof semanticColors];
export type SemanticColorCheckbox = typeof semanticColorsCheckbox[keyof typeof semanticColorsCheckbox];