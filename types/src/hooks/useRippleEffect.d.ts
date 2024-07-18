/// <reference types="react" />
import { SemanticColor } from "../lib/colors";
import { ButtonVariants } from "../components/Button/constants";
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
