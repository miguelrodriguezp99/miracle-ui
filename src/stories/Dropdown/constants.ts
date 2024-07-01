export const variants = {
  solid: "solid",
  bordered: "bordered",
  light: "light",
  flat: "flat",
  faded: "faded",
  ghost: "ghost",
} as const;
export type DropdownVariants = (typeof variants)[keyof typeof variants];
