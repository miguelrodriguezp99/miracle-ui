import React from "react";
import Slider from "./stories/Slider";
import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkgray",
      }}
    >
      <Slider />
    </div>
  );
}

export default App;
