import React from "react";
import "./components/styles/global.css";
import "./App.css";

import { Resizer } from "@components/resizer/src/Resizer";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "./components";
import { UserIcon } from "./icons/UserIcon";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "lightgray",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: "30%",
            height: "30%",
            backgroundColor: "black",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          <Resizer resizeBarSize={1} defaultSize="20%">
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100%",
                color: "white",
              }}
            >
              Pane 1
            </div>

            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100%",
                color: "white",
              }}
            >
              Pane 1
            </div>
          </Resizer>
        </div>

        <Dropdown>
          <DropdownTrigger>
            <Button
              radius="md"
              variant="bordered"
              color="default"
              blackText={true}
              isIconOnly={true}
            >
              <UserIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            position={"top-end"}
            offset={10}
            aria-label="Static Actions"
          >
            <DropdownItem color="primary" key="new">
              New file
            </DropdownItem>
            <DropdownItem color="default" key="copy">
              Copy link
            </DropdownItem>
            <DropdownItem color="success" key="edit">
              Edit file
            </DropdownItem>
            <DropdownItem key="delete" color="danger" variant="solid">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}

export default App;
