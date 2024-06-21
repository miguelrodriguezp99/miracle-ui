export const semanticColors = {
    default: "default",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    warning: "warning",
    danger: "danger"
} as const;

export type SemanticColor = typeof semanticColors[keyof typeof semanticColors];