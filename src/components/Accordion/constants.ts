export const variants = {
  solid: "solid",
  bordered: "bordered",
  shadow: "shadow",
  splitted: "splitted",
} as const;
export type AccordionVariants = (typeof variants)[keyof typeof variants];

export const selectionModes = {
  unique: "unique",
  multiple: "multiple",
} as const;

export type AccordionSelectionModes =
  (typeof selectionModes)[keyof typeof selectionModes];
