import React from "react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../packages/components/styles/global.css";
import "../packages/components/styles/storybook.css";

document.documentElement.classList.add("dark");

const addGlobalStyles = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  `;
  document.body.appendChild(style);
};

addGlobalStyles();

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

  fontFamily: "Roboto, sans-serif",
});

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const background = context.globals.backgrounds?.value || "#000000";
      const isBlackBackground = background === "#000000";
      const styles = getStyles(context.parameters);

      return (
        <div style={styles} className="storybook-container">
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
    darkMode: {
      dark: {
        ...themes.dark,
        appBg: "black",
        darkClass: "dark",
        classTarget: "html-class",
      },
      light: {
        ...themes.normal,
        appBg: "white",
        lightClass: "light",
        classTarget: "html-class",
      },
    },
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
