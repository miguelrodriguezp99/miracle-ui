import Card from "./Card";
import { options } from "./constants";

export default {
  title: "Card",
  component: Card,
  args: {
    children: "Card content",
  },
  argTypes: {
    color: {
      description: "**options:**",
      table: {
        type: {
          summary: options.colors.map((option) => `'${option}`).join(" | "),
        },
      },
      control: {
        type: "select",
        options: options.colors,
      },
    },

    size: {
      description: "**options:**",
      table: {
        type: {
          summary: options.sizes.map((option) => `'${option}`).join(" | "),
        },
      },
      control: {
        type: "select",
        options: options.sizes,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <div
  //       style={{
  //         margin: "3em",
  //         display: "flex",
  //         gap: "5px",
  //         flexDirection: "column",
  //       }}
  //     >
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </div>
  //   ),
  // ],>
};

// This process is repeated for each story
// export const Default = () => <Card />;
// export const Clickable = () => <Card clickable />;
// export const Draggable = () => <Card draggable />;

// But we can do a template to avoid repetition
const Template = (args) => <Card {...args} />;
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
const listTemplate = ({ items, ...args }) =>
  items.map((item, index) => <Card key={index} {...args} {...item} />);

export const Colors = listTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = listTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
