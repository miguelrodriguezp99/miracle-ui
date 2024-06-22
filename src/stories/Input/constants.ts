export const variants = {
  flat: "flat",
  bordered: "bordered",
  faded: "faded",
  underlined: "underlined",
} as const;
export type InputVariants = (typeof variants)[keyof typeof variants];

export const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;
export type InputSizes = (typeof sizes)[keyof typeof sizes];

export const widths = {
  small: "small",
  medium: "medium",
  large: "large",
  full: "full",
} as const;

export type InputWidth = (typeof widths)[keyof typeof widths];

export const radius = {
  none: "none",
  small: "small",
  medium: "medium",
  large: "large",
  full: "full",
} as const;
export type InputRadius = (typeof radius)[keyof typeof radius];
