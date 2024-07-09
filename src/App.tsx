import React from "react";
import Slider from "./stories/Slider";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Slider />
    </div>
  );
}

export default App;
