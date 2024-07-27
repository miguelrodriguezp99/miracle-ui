export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type SwitchSizes = (typeof sizes)[keyof typeof sizes];
