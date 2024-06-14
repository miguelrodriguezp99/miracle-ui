import CardWithDivider from ".";
import { options } from "./constants";
import styles from "./card.module.css";
import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplate,
} from "../../../../helpers/storybook";

const Template = getTemplate(CardWithDivider, styles);
const listTemplate = getListTemplate(CardWithDivider, styles);

export default {
  title: "Components/Cards/CardWithDivider",
  component: CardWithDivider,
  args: {
    children: "Make beautiful websites regardless of your design experience.",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
};

/* Individual templates */
export const Default = Template.bind({});
export const Clickable = Template.bind({});
Clickable.args = { isClickable: true };
export const Draggable = Template.bind({});
Draggable.args = { isDraggable: true };

/* List templates */
export const Colors = listTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = listTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
