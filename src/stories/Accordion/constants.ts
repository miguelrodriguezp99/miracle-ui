export const variants = {
  solid: "solid",
  bordered: "bordered",
  shadow: "shadow",
  splitted: "splitted",
} as const;
export type AccordionVariants = (typeof variants)[keyof typeof variants];
