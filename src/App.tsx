import React from "react";
import "./App.css";
import { Accordion, AccordionItem } from "./components";

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
            <Accordion
              initialOpenIndexes={[2, 3]}
              variant="solid"
              selectionMode="unique"
              isCompact
            >
              <AccordionItem backgroundColor="transparent" />
              <AccordionItem backgroundColor="transparent" />
              <AccordionItem backgroundColor="transparent" />
              <AccordionItem backgroundColor="transparent" />
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
