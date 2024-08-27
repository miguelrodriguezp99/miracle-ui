import { addons, types } from "@storybook/manager-api";
import { IconButton } from "@storybook/components";
import { CheckIcon, MoonIcon, SunIcon } from "@storybook/icons";
import React, { useState, useEffect } from "react";

const ADDON_ID = "mock-switch";
const TOOL_ID = `${ADDON_ID}/toolbar`;

console.log("Registering addon");

addons.register(ADDON_ID, (api) => {
  console.log("Registering tool");

  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Minimal Addon",
    render: () => {
      const [isDarkMode, setIsDarkMode] = useState(false);

      useEffect(() => {
        // Inicializar el estado según la clase actual en el iframe
        const iframe = document.querySelector<HTMLIFrameElement>(
          "#storybook-preview-iframe"
        );
        if (iframe) {
          const iframeHtml = iframe.contentDocument?.documentElement;
          if (iframeHtml && iframeHtml.classList.contains("dark")) {
            setIsDarkMode(true);
          }
        }
      }, []);

      const toggleDarkMode = () => {
        // Acceder al iframe del preview
        const iframe = document.querySelector<HTMLIFrameElement>(
          "#storybook-preview-iframe"
        );
        if (iframe) {
          const iframeHtml = iframe.contentDocument?.documentElement;
          if (iframeHtml) {
            iframeHtml.classList.toggle("dark");
            setIsDarkMode(!isDarkMode);
          }
        }
      };

      return (
        <IconButton key={TOOL_ID} title="Mock switch" onClick={toggleDarkMode}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      );
    },
  });
});
