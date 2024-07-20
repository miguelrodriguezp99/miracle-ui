export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type CircularProgressSizes = (typeof sizes)[keyof typeof sizes];
