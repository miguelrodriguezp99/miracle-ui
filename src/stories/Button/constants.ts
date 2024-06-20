export const variants = ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"] as const;
export type ButtonVariants = typeof variants[number];

export const sizes = ["small", "medium", "large"] as const;
export type ButtonSizes = typeof sizes[number];

export const radius = ["none", "small", "medium", "large", "full"] as const;
export type ButtonRadius = typeof radius[number];