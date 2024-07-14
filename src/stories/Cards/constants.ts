// constants.ts

export const options = {
  cardWidth: [
    "none",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ] as const,
  padding: [
    "none",
    "sm",
    "md",
    "lg",
    "hsm",
    "hmd",
    "hlg",
    "vsm",
    "vmd",
    "vlg",
  ] as const,
  margin: [
    "none",
    "sm",
    "md",
    "lg",
    "hxs",
    "hsm",
    "hmd",
    "hlg",
    "vxs",
    "vsm",
    "vmd",
    "vlg",
  ] as const,
};

export type CardWidthTypes = (typeof options.cardWidth)[number];
export type PaddingTypes = (typeof options.padding)[number];
export type MarginTypes = (typeof options.margin)[number];

export const products = [
  {
    title: "Orange",
    price: "$10.00",
    imgRoute: "https://nextui.org/images/fruit-1.jpeg",
  },
  {
    title: "Apple",
    price: "$5.00",
    imgRoute: "https://nextui.org/images/fruit-2.jpeg",
  },
  {
    title: "Banana",
    price: "$3.00",
    imgRoute: "https://nextui.org/images/fruit-3.jpeg",
  },
  {
    title: "Strawberry",
    price: "$7.00",
    imgRoute: "https://nextui.org/images/fruit-4.jpeg",
  },
  {
    title: "Pineapple",
    price: "$15.00",
    imgRoute: "https://nextui.org/images/fruit-5.jpeg",
  },
  {
    title: "Watermelon",
    price: "$20.00",
    imgRoute: "https://nextui.org/images/fruit-6.jpeg",
  },
  {
    title: "Grapes",
    price: "$8.00",
    imgRoute: "https://nextui.org/images/fruit-7.jpeg",
  },
  {
    title: "Kiwi",
    price: "$6.00",
    imgRoute: "https://nextui.org/images/fruit-8.jpeg",
  },
];

export default options;
