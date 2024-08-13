export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
export type ChipSizes = (typeof sizes)[keyof typeof sizes];

export const radius = {
  none: "none",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full",
} as const;
export type ChipRadius = (typeof radius)[keyof typeof radius];

export const variants = {
  solid: "solid",
  bordered: "bordered",
  light: "light",
  flat: "flat",
  faded: "faded",
  shadow: "shadow",
  ghost: "ghost",
} as const;
export type ChipVariants = (typeof variants)[keyof typeof variants];
