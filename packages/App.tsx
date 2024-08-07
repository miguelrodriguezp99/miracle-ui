import React from "react";
import "./components/styles/global.css";
import "./App.css";
import { Modal } from "@components/modal/src";
import { Button } from "./components";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "10px",
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginTop: "10px" }}>
        <Modal
          value={isOpen}
          setValue={setIsOpen}
          placement="bottom"
          button={
            <Button radius="md" color="primary" onClick={() => setIsOpen(true)}>
              Open Modal
            </Button>
          }
        >
          {({ closeModal }) => (
            <>
              <div className="flex flex-col gap-1">Modal Title</div>
              <div>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "1.25",
                    padding: "10px 0px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    lineHeight: "1.25",
                    padding: "10px 0px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </div>
              <div style={buttonContainerStyle}>
                <Button onClick={closeModal} radius="sm" customColor="red">
                  Close
                </Button>
                <Button radius="sm">Action</Button>
              </div>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default App;
