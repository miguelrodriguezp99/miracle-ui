export const variants = {
    flat: "flat",
    bordered: "bordered",
    faded: "faded",
    underlined: "underlined",
  } as const;
  export type AvatarVariants = (typeof variants)[keyof typeof variants];
  
  export const sizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
  } as const;
  export type AvatarSizes = (typeof sizes)[keyof typeof sizes];
  
  export const widths = {
    sm: "sm",
    md: "md",
    lg: "lg",
    full: "full",
  } as const;
  
  export type AvatarWidth = (typeof widths)[keyof typeof widths];
  
  export const radius = {
    none: "none",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    full: "full",
  } as const;
  export type AvatarRadius = (typeof radius)[keyof typeof radius];
  