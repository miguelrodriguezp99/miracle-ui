export declare const variants: {
    readonly solid: "solid";
    readonly bordered: "bordered";
    readonly shadow: "shadow";
    readonly splitted: "splitted";
};
export type AccordionVariants = (typeof variants)[keyof typeof variants];
export declare const selectionModes: {
    readonly unique: "unique";
    readonly multiple: "multiple";
};
export type AccordionSelectionModes = (typeof selectionModes)[keyof typeof selectionModes];
