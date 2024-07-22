import React from "react";
import "./components/styles/global.css";
import "./app.css";

import { Input } from "./components";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Input variant="underlined" />
      </div>
    </>
  );
}

export default App;
