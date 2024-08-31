import React, { useEffect } from "react";
import "./components/styles/global.css";
import "./App.css";
import {
  Avatar,
  Badge,
  Card,
  Checkbox,
  CircularProgress,
  Input,
  Slider,
} from "./components";
import { Skeleton } from "@components/skeleton/src";

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
        flexDirection: "row",
      }}
    >
      <Input color="primary" />
      <Checkbox color="primary" />
      <Slider color="primary" />
      <CircularProgress color="primary" label="Mi label" />
      <Badge badgeContent={2} customColor="blue">
        <Avatar name="John Doe" customRadius="10px" size="sm" />
      </Badge>
      <Card cardWidth="sm" padding="md" customColor="#18181b">
        <Skeleton borderRadius="10px">
          <div
            style={{
              width: "100%",
              height: "75px",
              backgroundColor: "#27272a",
              borderRadius: "10px",
            }}
          />
        </Skeleton>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton borderRadius="10px" customWidth>
            <div
              style={{
                width: "120px",
                height: "12px",
                backgroundColor: "#27272a",
                borderRadius: "10px",
              }}
            />
          </Skeleton>

          <Skeleton borderRadius="10px" customWidth>
            <div
              style={{
                width: "140px",
                height: "12px",
                backgroundColor: "#27272a",
                borderRadius: "10px",
              }}
            />
          </Skeleton>
          <Skeleton borderRadius="10px" customWidth>
            <div
              style={{
                width: "80px",
                height: "12px",
                backgroundColor: "#27272a",
                borderRadius: "10px",
              }}
            />
          </Skeleton>
        </div>
      </Card>
    </div>
  );
}

export default App;
