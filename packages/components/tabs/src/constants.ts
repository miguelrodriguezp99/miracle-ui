export const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
export type TabsSizes = (typeof sizes)[keyof typeof sizes];

export const variants = {
  solid: "solid",
  underlined: "underlined",
  bordered: "bordered",
  light: "light",
} as const;

export type TabsVariants = (typeof variants)[keyof typeof variants];

export const directions = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;

export type TabsDirections = (typeof directions)[keyof typeof directions];

export const radii = {
  none: "none",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full",
} as const;
export type TabsRadius = (typeof radii)[keyof typeof radii];
