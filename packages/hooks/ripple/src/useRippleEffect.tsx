/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { semanticColors, SemanticColor } from "@miracle-ui/system";

const variants = {
  solid: "solid",
  bordered: "bordered",
  light: "light",
  flat: "flat",
  faded: "faded",
  shadow: "shadow",
  ghost: "ghost",
} as const;
export type ButtonVariants = (typeof variants)[keyof typeof variants];

type Props = {
  ref: React.RefObject<HTMLElement>;
  disabledRipple?: boolean;
  isClickable?: boolean;
  color?: SemanticColor;
  variant?: ButtonVariants;
  blackText?: boolean;
  customRippleColor?: string;
};

const useRippleEffect = ({
  disabledRipple,
  color,
  variant,
  isClickable = true,
  ref,
  blackText,
  customRippleColor,
}: Props) => {
  useEffect(() => {
    if (disabledRipple) return;
    if (!isClickable) return;
    if (!ref.current) return;

    const handleClick = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripples = document.createElement("span");
      ripples.classList.add("ripple");
      if (customRippleColor) {
        ripples.style.backgroundColor = customRippleColor;
      } else if (
        variant === "bordered" ||
        variant === "flat" ||
        variant === "faded"
      ) {
        if (
          variant === "bordered" &&
          blackText &&
          color === semanticColors.default
        ) {
          ripples.classList.add("ripple-dark");
        } else if (
          variant === "bordered" &&
          !blackText &&
          color === semanticColors.default
        ) {
          ripples.classList.add("ripple-light");
        } else {
          ripples.classList.add(`${color}`);
          ripples.classList.add(`ripple-bordered`);
        }
      } else if (
        color === semanticColors.success ||
        color === semanticColors.warning
      ) {
        ripples.classList.add("ripple-dark");
      } else {
        ripples.classList.add("ripple-light");
      }
      ripples.style.left = `${x}px`;
      ripples.style.top = `${y}px`;
      ref.current.appendChild(ripples);
      setTimeout(() => {
        ripples.remove();
      }, 1000);
    };

    ref.current?.addEventListener("click", handleClick);

    return () => {
      ref.current?.removeEventListener("click", handleClick);
    };
  }, [disabledRipple, color, variant, ref, blackText, customRippleColor]);
};

export default useRippleEffect;
