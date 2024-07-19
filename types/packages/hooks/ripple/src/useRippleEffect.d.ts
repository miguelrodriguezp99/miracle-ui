import { SemanticColor } from "@mirakle-ui/system20";
declare const variants: {
    readonly solid: "solid";
    readonly bordered: "bordered";
    readonly light: "light";
    readonly flat: "flat";
    readonly faded: "faded";
    readonly shadow: "shadow";
    readonly ghost: "ghost";
};
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
declare const useRippleEffect: ({ disabledRipple, color, variant, isClickable, ref, blackText, customRippleColor, }: Props) => void;
export default useRippleEffect;
