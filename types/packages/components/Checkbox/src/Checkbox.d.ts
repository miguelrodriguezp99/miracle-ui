import React from "react";
import { SemanticColorCheckbox } from "@mirakle-ui/system20";
import { CheckboxRadius, CheckboxSize } from "./constants";
type Props = {
    color?: SemanticColorCheckbox;
    customColor?: string;
    textColor?: boolean;
    blackText?: boolean;
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
export declare const Checkbox: ({ color, customColor, textColor, blackText, radius, text, size, isDisabled, isChecked, name, value, onChange, onValueChange, }: Props) => React.JSX.Element;
export default Checkbox;
