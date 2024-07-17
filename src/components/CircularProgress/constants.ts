export const directions = {
  vertical: "vertical",
  horizontal: "horizontal",
} as const;
export type CircularProgressDirection =
  (typeof directions)[keyof typeof directions];

export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type CircularProgressSizes = (typeof sizes)[keyof typeof sizes];
