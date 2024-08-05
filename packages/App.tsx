import React, { useState } from "react";
import "./components/styles/global.css";
import "./App.css";
import { Button } from "@mirakle-ui/react";
import { Modal } from "@components/modal/src";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <div style={{ marginTop: "10px" }}>
        <Modal
          value={isOpen}
          setValue={setIsOpen}
          button={
            <Button radius="md" color="secondary">
              Open Modal
            </Button>
          }
        >
          {({ closeModal }) => (
            <>
              <div className="flex flex-col gap-1">Modal Title</div>
              <div>
                <p>{isOpen.toString()}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Nullam pulvinar risus non risus hendrerit venenatis.</p>
                <p>
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </div>
              <div>
                <button onClick={closeModal}>Close</button>
                <button>Action</button>
                <button onClick={closeModal}>Another Action</button>
              </div>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default App;
