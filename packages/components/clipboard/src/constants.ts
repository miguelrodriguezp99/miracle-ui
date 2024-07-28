export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type ClipboardSizes = (typeof sizes)[keyof typeof sizes];

export const variants = {
  flat: "flat",
  solid: "solid",
  bordered: "bordered",
  shadow: "shadow",
} as const;
export type ClipboardVariants = (typeof variants)[keyof typeof variants];
