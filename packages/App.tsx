import React from "react";
import "./components/styles/global.css";
import "./App.css";

import { Resizer } from "@components/resizer/src/Resizer";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "lightgray",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: "30%",
            height: "30%",
            backgroundColor: "black",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          <Resizer resizeBarSize={1} defaultSize="20%">
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100%",
                color: "white",
              }}
            >
              Pane 1
            </div>

            <Resizer direction="vertical" resizeBarSize={1}>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  height: "100%",
                  color: "white",
                }}
              >
                Pane 1
              </div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  height: "100%",
                  color: "white",
                }}
              >
                Pane 2
              </div>
            </Resizer>
          </Resizer>
        </div>
      </div>
    </>
  );
}

export default App;
