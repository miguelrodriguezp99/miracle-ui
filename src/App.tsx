import React from "react";
import "./App.css";
import { Accordion, AccordionItem } from "./stories";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "aqua",
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
            <Accordion variant="splitted">
              <AccordionItem />
              <AccordionItem />
              <AccordionItem />
              <AccordionItem isLastItem />
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
