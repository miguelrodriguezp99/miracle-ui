import Card from ".";
import { options, products } from "./constants";
import { semanticColors } from "../../lib/colors";
import styles from "./card.module.css";
import CardWithDivider from "./CardWithDivider";
import CardCover from "./CardCover";
import CardCoverAndFooter from "./CardCoverAndFooter";
import CardWithBlurredFooter from "./CardWithBlurredFooter";
import CardWithImage from "./CardWithImage";
import CardProduct from "./CardProduct";
import { getListTemplate, getTemplate } from "../../../helpers/storybook";
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
    color: {
      options: Object.values(semanticColors),
      control: { type: "select" },
    },
    cardWidth: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      },
    },
    padding: {
      control: {
        type: "select",
        options: options.padding,
      },
    },
    isClickable: { control: "boolean" }, // Definir isClickable en argTypes
    isDraggable: { control: "boolean" }, // Definir isDraggable en argTypes

    // hide children from the controls panel
    children: { table: { disable: true } },
  },
};

/* Individual templates */
export const Default = Template.bind({});
Default.args = {
  children: <CardBody children="I'm a card" />,
  cardWidth: "3xl",
  padding: "md",
};
export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
  children: <CardBody children="I'm a clickable card" />,
  cardWidth: "3xl",
  padding: "md",
};
export const Draggable = Template.bind({});
Draggable.args = {
  isDraggable: true,
  children: <CardBody children="I'm a draggable card" />,
  cardWidth: "3xl",
  padding: "md",
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

export const WithCover = Template.bind({});
WithCover.args = {
  children: <CardCover />,
  cardWidth: "none",
};

export const WithCoverAndFooter = (args) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "30px",
        width: "65%",
        flexWrap: "wrap",
      }}
    >
      <Card {...args} cardWidth="none">
        <CardCoverAndFooter
          darkMode
          imgRoute="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>

      <Card {...args} cardWidth="none">
        <CardCoverAndFooter />
      </Card>

      <Card {...args} cardWidth="none">
        <CardCoverAndFooter
          darkMode
          footerText="Breathing App."
          secondFooterText="Get a good night's sleep."
          imgRoute="https://nextui.org/images/card-example-5.jpeg"
          imgWidth="340px"
          imgHeight="300px"
        />
      </Card>
    </div>
  );
};

WithCoverAndFooter.parameters = {
  __sb: { jc: "start", ac: "center" },
};

export const WithBlurredFooter = Template.bind({});
WithBlurredFooter.args = {
  children: <CardWithBlurredFooter />,
  cardWidth: "sm",
  padding: "none",
};

export const WithProduct = (args) => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
          gap: "10px",
          width: "65%",
        }}
      >
        {products.map((product, index) => (
          <Card key={index} {...args} cardWidth="none" isClickable>
            <CardProduct
              title={product.title}
              price={product.price}
              imgRoute={product.imgRoute}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

WithProduct.parameters = {
  __sb: { jc: "start", ac: "center" },
};

/* List templates */
export const Colors = listTemplate.bind({});
Colors.args = {
  padding: "sm",
  items: Object.values(semanticColors).map((color) => ({ color })),
};

export const Paddings = (args) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "65%",
      }}
    >
      {listTemplate(args)}
    </div>
  );
};

Paddings.args = {
  cardWidth: "full",
  items: options.padding.map((padding) => ({
    padding,
    children: "Padding: " + padding,
  })),
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
    color: getOptionsArgTypes(semanticColors),
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
//   semanticColors.map((color, index) => {
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
  items: semanticColors.map((color) => ({ color })),
};

export const Sizes = listTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};

*/
