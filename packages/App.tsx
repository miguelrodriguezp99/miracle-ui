import React from "react";
import "./components/styles/global.css";
import "./App.css";

import Switch from "@components/switch/src/Switch";
import { SunIcon } from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

function App() {
  return (
    <>
      <div
        style={{
          gap: "10rem",
          backgroundColor: "black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Switch
          thumbIcon={({ isChecked }) =>
            isChecked ? <SunIcon /> : <MoonIcon />
          }
        />
        <Switch
          id="secondSwitch"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />

        <Switch id="thirdSwitch" />
      </div>
    </>
  );
}

export default App;
