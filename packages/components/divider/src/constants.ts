export const directions = {
  vertical: "vertical",
  horizontal: "horizontal",
} as const;
export type DividerDirection = (typeof directions)[keyof typeof directions];
