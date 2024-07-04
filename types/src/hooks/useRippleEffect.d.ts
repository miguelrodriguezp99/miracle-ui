/// <reference types="react" />
import { SemanticColor } from "../lib/colors";
import { ButtonVariants } from "../stories/Button/constants";
type Props = {
    ref: React.RefObject<HTMLElement>;
    disabledRipple?: boolean;
    isClickable?: boolean;
    color?: SemanticColor;
    variant?: ButtonVariants;
    blackText?: boolean;
};
declare const useRippleEffect: ({ disabledRipple, color, variant, isClickable, ref, blackText, }: Props) => void;
export default useRippleEffect;
