import React from "react";
import "./components/styles/global.css";
import "./App.css";

import { Clipboard } from "@components/clipboard/src";

function App() {
  return (
    <>
      <div
        style={{
          gap: "1rem",
          backgroundColor: "black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Clipboard size="md" variant="bordered" color="default">
          <span>npm install @nextui-org/react</span>
        </Clipboard>
        <Clipboard size="md" variant="bordered" color="primary">
          <span>npm install @nextui-org/react</span>
        </Clipboard>
        <Clipboard size="md" variant="bordered" color="secondary">
          <span>npm install @nextui-org/react</span>
        </Clipboard>
        <Clipboard size="md" variant="bordered" color="success">
          <span>npm install @nextui-org/react</span>
        </Clipboard>
        <Clipboard size="md" variant="bordered" color="warning">
          <span>npm install @nextui-org/react</span>
        </Clipboard>
        <Clipboard size="md" variant="bordered" color="danger">
          <span>npm install @nextui-org/react</span>
        </Clipboard>

        <Clipboard size="md" variant="bordered" color="danger">
          npm install @nextui-org/react1
        </Clipboard>
      </div>
    </>
  );
}

export default App;
