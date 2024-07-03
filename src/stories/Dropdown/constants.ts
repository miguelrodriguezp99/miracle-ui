export const variants = {
  solid: "solid",
  bordered: "bordered",
  light: "light",
  flat: "flat",
  faded: "faded",
  ghost: "ghost",
} as const;
export type DropdownVariants = (typeof variants)[keyof typeof variants];

export const positions = {
  top: "top",
  left: "left",
  bottom: "bottom",
  right: "right",
} as const;

export type DropdownPositions = (typeof positions)[keyof typeof positions];
