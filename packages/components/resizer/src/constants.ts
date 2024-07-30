export const directions = {
  vertical: "vertical",
  horizontal: "horizontal",
} as const;
export type ResizerDirection = (typeof directions)[keyof typeof directions];

export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type ResizerSizes = (typeof sizes)[keyof typeof sizes];
