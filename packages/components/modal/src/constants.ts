export const placements = {
  auto: "auto",
  top: "top",
  bottom: "bottom",
  center: "center",
  topCenter: "topCenter",
  bottomCenter: "bottomCenter",
} as const;
export type ModalPlacements = (typeof placements)[keyof typeof placements];
