// Create a type of an array of colors
// export const semanticColors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;
// export type SemanticColor = typeof semanticColors[number];


export const semanticColors = {
    default: "default",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    warning: "warning",
    danger: "danger"
} as const;

export type SemanticColor = typeof semanticColors[keyof typeof semanticColors];