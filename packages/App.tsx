import React from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "darkred",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            height: "430px",
            backgroundColor: "black",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "arial",
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "green",
              }}
            >
              <form>
                <Button type="submit" radius="none" customWidth="100%" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
