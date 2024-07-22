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
        }}
      >
        <Input
          variant="flat"
          labelColor="blue"
          size="large"
          placeholder="Enter your email"
        />
        <Input variant="flat" size="medium" placeholder="Enter your email" />
        <Input variant="flat" size="small" placeholder="Enter your email" />
      </div>
    </>
  );
}

export default App;
