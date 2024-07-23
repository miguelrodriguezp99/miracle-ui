import React from "react";
import "./components/styles/global.css";
import "./App.css";

import { Slider } from "./components";

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
        <div
          style={{
            width: "400px",
          }}
        >
          <Slider showSteps step={20} />
        </div>
      </div>
    </>
  );
}

export default App;
