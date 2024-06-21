export const variants = {
  solid: "solid",
  bordered: "bordered",
  light: "light",
  flat: "flat",
  faded: "faded",
  shadow: "shadow",
  ghost: "ghost",
} as const;
export type InputVariants = (typeof variants)[keyof typeof variants];

export const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;
export type InputSizes = (typeof sizes)[keyof typeof sizes];

export const radius = {
  none: "none",
  small: "small",
  medium: "medium",
  large: "large",
  full: "full",
} as const;
export type InputRadius = (typeof radius)[keyof typeof radius];
