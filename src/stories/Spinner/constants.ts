export const directions = {
  vertical: "vertical",
  horizontal: "horizontal",
} as const;
export type SpinnerDirection = (typeof directions)[keyof typeof directions];

export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type SpinnerSizes = (typeof sizes)[keyof typeof sizes];
