import React from "react";
import { SemanticColorCheckbox } from "../../lib/colors";
import { CheckboxRadius, CheckboxSize } from "./constants";
type Props = {
    color?: SemanticColorCheckbox;
    textColor?: boolean;
    size?: CheckboxSize;
    text?: string;
    radius?: CheckboxRadius;
    isDisabled?: boolean;
    isChecked?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValueChange?: (isSelected: boolean) => void;
};
export declare const Checkbox: ({ color, textColor, radius, text, size, isDisabled, isChecked, name, value, onChange, onValueChange, }: Props) => React.JSX.Element;
export default Checkbox;
