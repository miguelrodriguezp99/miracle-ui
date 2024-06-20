// Create a type of an array of colors
export const semanticColors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;
export type SemanticColor = typeof semanticColors[number];

