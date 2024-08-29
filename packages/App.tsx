import React, { useEffect, useState } from "react";
import "./components/styles/global.css";
import "./App.css";
import { Button, Slider } from "./components";
import { Modal } from "@components/modal/src";

function App() {
  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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
        backgroundColor: "darkgray",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
        flexDirection: "row",
      }}
    >
      <Slider color="primary" />
      <div style={{ marginTop: "10px" }}>
        <Modal
          blur={10}
          value={isOpen}
          setValue={setIsOpen}
          backdrop="blur"
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, blanditiis ullam, explicabo voluptatem excepturi
                  corporis labore dignissimos quibusdam dolore incidunt
                  exercitationem at sed ab autem sapiente dolorum magnam
                  mollitia aperiam fugiat minus, placeat nisi. A, pariatur
                  neque, culpa iste molestiae, laborum omnis possimus ipsam
                  nesciunt officiis assumenda provident consequuntur? Modi magni
                  ducimus culpa veniam porro assumenda esse hic alias beatae,
                  obcaecati quaerat laborum mollitia similique numquam nihil
                  soluta error aliquid repellendus animi omnis, molestias,
                  quisquam libero sed nisi? Temporibus eveniet earum eum quam
                  iste laborum exercitationem totam autem sapiente, commodi
                  praesentium consectetur nemo corrupti nesciunt aliquam
                  laboriosam sequi nostrum possimus!
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
      <div style={{ marginTop: "10px" }}>
        <Modal
          blur={10}
          value={isOpen2}
          setValue={setIsOpen2}
          backdrop="blur"
          button={
            <Button
              radius="md"
              color="primary"
              onClick={() => setIsOpen2(true)}
            >
              Open Modal
            </Button>
          }
        >
          {({ closeModal }) => (
            <>
              <div className="flex flex-col gap-1">Modal Title</div>
              <div>
                <p>aaaa</p>
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
