import React from "react";
import "./App.css";
import { Avatar, Badge } from "./components";

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
        <Badge>
          <Avatar
            radius="lg"
            avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Badge>
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
