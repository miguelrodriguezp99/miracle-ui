export const variants = {
  solid: "solid",
  flat: "flat",
  faded: "faded",
} as const;
export type BadgeVariants = (typeof variants)[keyof typeof variants];

export const positions = {
  tl: "tl",
  tr: "tr",
  bl: "bl",
  br: "br",
};
export type BadgePosition = (typeof positions)[keyof typeof positions];

// export const sizes = {
//   sm: "sm",
//   md: "md",
//   lg: "lg",
// } as const;
// export type BadgeSizes = (typeof sizes)[keyof typeof sizes];

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
