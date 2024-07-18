export declare const variants: {
    readonly flat: "flat";
    readonly bordered: "bordered";
    readonly faded: "faded";
    readonly underlined: "underlined";
};
export type InputVariants = (typeof variants)[keyof typeof variants];
export declare const sizes: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
};
export type InputSizes = (typeof sizes)[keyof typeof sizes];
export declare const widths: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
    readonly full: "full";
};
export type InputWidth = (typeof widths)[keyof typeof widths];
export declare const radius: {
    readonly none: "none";
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
    readonly full: "full";
};
export type InputRadius = (typeof radius)[keyof typeof radius];
export declare const inputTypes: {
    readonly text: "text";
    readonly email: "email";
    readonly password: "password";
    readonly number: "number";
    readonly date: "date";
    readonly tel: "tel";
    readonly url: "url";
    readonly search: "search";
    readonly color: "color";
    readonly checkbox: "checkbox";
    readonly radio: "radio";
    readonly range: "range";
    readonly file: "file";
    readonly hidden: "hidden";
    readonly image: "image";
    readonly reset: "reset";
    readonly submit: "submit";
    readonly button: "button";
};
export type InputTypes = (typeof inputTypes)[keyof typeof inputTypes];
