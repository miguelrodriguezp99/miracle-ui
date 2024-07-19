export const variants = {
  solid: "solid",
  bordered: "bordered",
  light: "light",
  flat: "flat",
  faded: "faded",
  shadow: "shadow",
  ghost: "ghost",
} as const;
export type ButtonVariants = (typeof variants)[keyof typeof variants];

export const types = {
  button: "button",
  submit: "submit",
  reset: "reset",
} as const;
export type ButtonTypes = (typeof types)[keyof typeof types];

export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
export type ButtonSizes = (typeof sizes)[keyof typeof sizes];

export const radius = {
  none: "none",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full",
} as const;
export type ButtonRadius = (typeof radius)[keyof typeof radius];
