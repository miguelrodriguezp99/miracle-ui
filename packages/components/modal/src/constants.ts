export const placements = {
  auto: "auto",
  top: "top",
  bottom: "bottom",
  center: "center",
  topCenter: "topCenter",
  bottomCenter: "bottomCenter",
} as const;
export type ModalPlacements = (typeof placements)[keyof typeof placements];

export const backdrops = {
  opaque: "opaque",
  blur: "blur",
  transparent: "transparent",
} as const;
export type ModalBackdrops = (typeof backdrops)[keyof typeof backdrops];

export const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xl2: "xl",
  xl3: "xl3",
  xl4: "xl4",
  xl5: "xl5",
  full: "full",
} as const;
export type ModalSizes = (typeof sizes)[keyof typeof sizes];
