export const gaps = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
export type CheckboxGap = (typeof gaps)[keyof typeof gaps];

export const directions = {
  vertical: "vertical",
  horizontal: "horizontal",
} as const;
export type CheckboxDirection = (typeof directions)[keyof typeof directions];
