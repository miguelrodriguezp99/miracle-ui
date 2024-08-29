import React, { useEffect } from "react";
import "./components/styles/global.css";
import "./App.css";
import { Slider } from "./components";

function App() {
  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "darkgray",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
        flexDirection: "column",
      }}
    >
      <Slider color="primary" />
    </div>
  );
}

export default App;
