export const variants = {
    solid: "solid",
    flat: "flat",
    faded: "faded",
  } as const;
  export type CheckboxVariants = (typeof variants)[keyof typeof variants];
  
  
  export const sizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
  } as const;
  export type CheckboxSize = (typeof sizes)[keyof typeof sizes];
  
  export const radii = {
    none: "none",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    full: "full",
  } as const;
  export type CheckboxRadius = (typeof radii)[keyof typeof radii];
  