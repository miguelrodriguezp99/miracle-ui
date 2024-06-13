import React, { CSSProperties } from 'react';
import type { Preview } from "@storybook/react";
import "../styles/global.css";
import "../styles/tokens.css";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={styles}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
