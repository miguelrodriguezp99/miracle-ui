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
  "top-start": "top-start",
  "top-end": "top-end",
  left: "left",
  "left-start": "left-start",
  "left-end": "left-end",
  bottom: "bottom",
  "bottom-start": "bottom-start",
  "bottom-end": "bottom-end",
  right: "right",
  "right-start": "right-start",
  "right-end": "right-end",
} as const;

export type DropdownPositions = (typeof positions)[keyof typeof positions];
