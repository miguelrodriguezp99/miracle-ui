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
      <Slider size="sm" direction="horizontal" color="secondary" />
      <Slider size="md" direction="horizontal" color="secondary" />

      <Slider size="lg" direction="horizontal" color="secondary" />
    </div>
  );
}

export default App;
