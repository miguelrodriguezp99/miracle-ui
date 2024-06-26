export declare const options: {
    cardWidth: readonly ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
    padding: readonly ["none", "sm", "md", "lg", "hsm", "hmd", "hlg", "vsm", "vmd", "vlg"];
    margin: readonly ["none", "sm", "md", "lg", "hxs", "hsm", "hmd", "hlg", "vxs", "vsm", "vmd", "vlg"];
};
export type CardWidthTypes = typeof options.cardWidth[number];
export type PaddingTypes = typeof options.padding[number];
export type MarginTypes = typeof options.margin[number];
export declare const products: {
    title: string;
    price: string;
    imgRoute: string;
}[];
export default options;
