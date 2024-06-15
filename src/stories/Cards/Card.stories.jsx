import Card from ".";
import { options } from "./constants";
import styles from "./card.module.css";
import CardWithDivider from "./CardWithDivider";
import CardWithImage from "./CardWithImage";
import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplate,
} from "../../../helpers/storybook";
import CardBody from "./components/CardBody";

const Template = getTemplate(Card, styles);
const listTemplate = getListTemplate(Card, styles);

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    cardWidth: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      },
    },
    padding: {
      control: {
        type: "select",
      },
    },
    children: { control: { disable: true } },
  },
};

/* Individual templates */
export const Default = Template.bind({});
Default.args = {
  children: <CardBody children="I'm a card" />,
};
export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
  children: <CardBody children="I'm a clickable card" />,
};
export const Draggable = Template.bind({});
Draggable.args = {
  isDraggable: true,
  children: <CardBody children="I'm a draggable card" />,
};

export const WithDiv = Template.bind({});
WithDiv.args = {
  children: <CardWithDivider />,
  cardWidth: "3xl",
  padding: "none",
};

export const WithImage = Template.bind({});
WithImage.args = {
  children: <CardWithImage />,
  cardWidth: "md",
  padding: "sm",
};

/* List templates */
export const Colors = listTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = listTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};

/*

import Card from "./Card";
import { options } from "./constants";
import styles from "./Card.module.css";
import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplate,
} from "../../../helpers/storybook";

const Template = getTemplate(Card, styles);
const listTemplate = getListTemplate(Card, styles);

export default {
  title: "Card",
  component: Card,
  args: {
    children: "Card content",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
};

// This process is repeated for each story
// export const Default = () => <Card />;
// export const Clickable = () => <Card clickable />;
// export const Draggable = () => <Card draggable />;

// But we can do a template to avoid repetition
// const Template = (args) => <Card {...args} />; //Lo sustituimos por el template de storybook.js
export const Default = Template.bind({});
export const Clickable = Template.bind({});
Clickable.args = { isClickable: true };
export const Draggable = Template.bind({});
Draggable.args = { isDraggable: true };

// export const Colors = () =>
//   options.colors.map((color, index) => {
//     return <Card key={index} color={color} />;
//   });

// export const Sizes = () =>
//   options.sizes.map((size, index) => {
//     return <Card key={index} size={size} />;
//   });

// We can also create a template for each prop
// const listTemplate = ({ items, ...args }) =>
//   items.map((item, index) => <Card key={index} {...args} {...item} />); //Lo sustituimos por el template de storybook.js

export const Colors = listTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = listTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};

*/
