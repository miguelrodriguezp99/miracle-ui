import React from "react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../packages/components/styles/global.css";

document.documentElement.classList.toggle("dark");

const getStyles = ({ __sb }: any) => ({
  display: "flex",
  alignItems: __sb?.ai || "center",
  justifyContent: __sb?.jc || "center",
  alignContent: __sb?.ac || "center",
  margin: "0",
  flexDirection: __sb?.fd || "column",
  maxHeight: "auto",
  flexWrap: __sb?.fw || "wrap",
  height: "100vh",
  gap: "10px 30px",
  backgroundColor: "transparent",
  fontFamily: "Roboto, sans-serif",
});

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const background = context.globals.backgrounds?.value || "#000000";
      const isBlackBackground = background === "#000000";
      const styles = getStyles(context.parameters);

      return (
        <div style={styles}>
          <Story
            {...context}
            args={{ ...context.args, isBlackBackground }}
            isBlackBackground={isBlackBackground}
          />
        </div>
      );
    },
  ],

  parameters: {
    options: {
      storySort: {
        order: ["Foundations", "Components"],
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#000000" },
        { name: "light", value: "#ffffff" },
        { name: "blue", value: "#3A10E5" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
      themes: {
        dark: themes.dark,
        light: themes.normal,
      },
    },
  },
};

export default preview;
