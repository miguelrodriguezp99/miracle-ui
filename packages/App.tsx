import React, { useEffect } from "react";
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

  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "500px" }}>Modal</h1>
      <div style={{ marginTop: "200px" }}>
        <Modal
          size="sm"
          value={isOpen}
          setValue={setIsOpen}
          placement="bottomCenter"
          backdrop="blur"
          blur={5}
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
