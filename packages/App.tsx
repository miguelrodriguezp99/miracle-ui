import React from "react";
import "./components/styles/global.css";
import "./app.css";
import { Button } from "./components";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          padding: "20px",
        }}
      >
        <Button />
        <div
          style={{
            fontFamily: "arial",
          }}
        >
          36
          <div
            style={{
              width: "200px",
              backgroundColor: "green",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
