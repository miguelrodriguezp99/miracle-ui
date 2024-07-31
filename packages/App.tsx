import React from "react";
import "./components/styles/global.css";
import "./App.css";

import Skeleton from "@components/skeleton/src/Skeleton";
import { Card } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#120d2d",
      }}
    >
      <Card cardWidth="xl" padding="md" customColor="#18181b">
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <Skeleton borderRadius="9999px" customWidth>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#27272a",
                borderRadius: "9999px",
              }}
            />
          </Skeleton>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: "10px",
            }}
          >
            <Skeleton borderRadius="9999px" customWidth>
              <div
                style={{
                  width: "160px",
                  height: "10px",
                  backgroundColor: "#27272a",
                  borderRadius: "9999px",
                }}
              />
            </Skeleton>
            <Skeleton borderRadius="9999px" customWidth>
              <div
                style={{
                  width: "200px",
                  height: "10px",
                  backgroundColor: "#27272a",
                  borderRadius: "9999px",
                }}
              />
            </Skeleton>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
