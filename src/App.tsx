import React from "react";
import Slider from "./stories/Slider";
import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkgray",
      }}
    >
      {/* <Slider
        showSteps
        label="Hello"
        size="sm"
        direction="vertical"
        color="secondary"
      /> */}
      <Slider size="md" direction="vertical" color="secondary" />

      {/* <Slider
        showSteps
        step={20}
        size="lg"
        direction="horizontal"
        color="secondary"
      /> */}
    </div>
  );
}

export default App;
