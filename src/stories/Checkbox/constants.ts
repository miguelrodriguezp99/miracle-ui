export const variants = {
    solid: "solid",
    flat: "flat",
    faded: "faded",
  } as const;
  export type CheckboxVariants = (typeof variants)[keyof typeof variants];
  
  

export const textColor = {
    white: "white",
    black: "black",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    danger: "danger",
    warning: "warning",
}
export type CheckBoxTextColor = (typeof textColor)[keyof typeof textColor];

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
  