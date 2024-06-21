import React from "react";
import { InputRadius, InputSizes, InputVariants } from "./constants";

type Props = {
    label?: string;
    size?: InputSizes;
    variant?: InputVariants;
    radius?: InputRadius;
}
export const Input = ({ label }: Props) => {
    return (
        <div>
            {label}
        </div>
    );
}