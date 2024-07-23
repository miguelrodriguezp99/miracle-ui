import React from "react";
import "./components/styles/global.css";
import "./app.css";

import { Card } from "./components";

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
          <Card
            cardWidth="3xl"
            padding="md"
            color="primary"
            customColor="red"
          />
        </div>
      </div>
    </>
  );
}

export default App;
