export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
export type ProgressSizes = (typeof sizes)[keyof typeof sizes];

export const radii = {
  none: "none",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full",
} as const;
export type ProgressRadius = (typeof radii)[keyof typeof radii];
