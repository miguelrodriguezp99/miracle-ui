import { DropdownPositions } from "../constants";

export const getTransformStyles = (
  isOpen: boolean,
  position?: DropdownPositions,
  dimensions?: { width: number; height: number }
) => {
  if (!isOpen || !position || !dimensions) return {};

  const transforms = {
    top: `translateX(-50%) scale(1)`,
    bottom: `translateX(-50%) scale(1)`,
    "top-start": `translateX(-${dimensions.width * 0.4}px)`,
    "top-end": `translateX(-${dimensions.width * 0.6}px)`,
    "bottom-start": `translateX(-${dimensions.width * 0.4}px)`,
    "bottom-end": `translateX(-${dimensions.width * 0.6}px)`,
    left: `translateY(-50%) scale(1)`,
    right: `translateY(-50%) scale(1)`,
    "left-start": `translateY(-${dimensions.height * 0.4}px)`,
    "left-end": `translateY(-${dimensions.height * 0.6}px)`,
    "right-start": `translateY(-${dimensions.height * 0.4}px)`,
    "right-end": `translateY(-${dimensions.height * 0.6}px)`,
  };

  return {
    transform: `${transforms[position]} scale(1)`,
  };
};

export const getOffsetStyles = (position?: DropdownPositions, offset = 0) => {
  if (!position) return {};

  const offsets = {
    top: { marginBottom: `${offset}px` },
    "top-start": { marginBottom: `${offset}px` },
    "top-end": { marginBottom: `${offset}px` },
    left: { marginRight: `${offset}px` },
    "left-start": { marginRight: `${offset}px` },
    "left-end": { marginRight: `${offset}px` },
    right: { marginLeft: `${offset}px` },
    "right-start": { marginLeft: `${offset}px` },
    "right-end": { marginLeft: `${offset}px` },
    bottom: { marginTop: `${offset}px` },
    "bottom-start": { marginTop: `${offset}px` },
    "bottom-end": { marginTop: `${offset}px` },
  };

  return offsets[position] || {};
};

export const getAlignmentStyles = (
  position?: DropdownPositions,
  dimensions?: { width: number; height: number }
) => {
  if (!position || !dimensions) return {};

  const alignments = {
    top: { left: "50%" },
    bottom: { left: "50%" },
    "top-start": { left: dimensions.width * 0.4 },
    "bottom-start": { left: dimensions.width * 0.4 },
    "top-end": { right: -dimensions.width * 0.6 },
    "bottom-end": { right: -dimensions.width * 0.6 },
    left: { top: "50%" },
    right: { top: "50%" },
    "left-start": { top: dimensions.height * 0.4 },
    "right-start": { top: dimensions.height * 0.4 },
    "left-end": { bottom: -dimensions.height * 0.6 },
    "right-end": { bottom: -dimensions.height * 0.6 },
  };

  return alignments[position] || {};
};
