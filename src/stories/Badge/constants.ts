export const variants = {
    flat: "flat",
    bordered: "bordered",
    faded: "faded",
    underlined: "underlined",
  } as const;
  export type BadgeVariants = (typeof variants)[keyof typeof variants];
  
  export const sizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
  } as const;
  export type BadgeSizes = (typeof sizes)[keyof typeof sizes];
  
  export const widths = {
    sm: "sm",
    md: "md",
    lg: "lg",
    full: "full",
  } as const;
  
  export type BadgeWidth = (typeof widths)[keyof typeof widths];
  
  export const radii = {
    none: "none",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    full: "full",
  } as const;
  export type BadgeRadius = (typeof radii)[keyof typeof radii];
  