import React from 'react';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import "../styles/global.css";
import "../styles/tokens.css";

interface Styles {
  __sb: any;
}


const getStyles = ({ __sb }: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  margin: "0",
  flexDirection: __sb?.fd || "column",
  maxHeight: "auto",
  flexWrap: __sb?.fw || "wrap",
  height: "100vh",
  gap: "10px 30px",
  backgroundColor: 'transparent',
});


const preview: Preview = {

  decorators: [
    (Story, { parameters }) => (
      <div style={getStyles(parameters)}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),

  ],

  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'blue',
          value: '#3A10E5',
        }

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
