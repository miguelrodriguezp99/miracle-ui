import React from "react";
import "./components/styles/global.css";
import "./app.css";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "./components";
import { SpainFlag } from "./icons/SpainFlag";

function App() {
  return (
    <>
      <div
        style={{
          gap: "10rem",
          backgroundColor: "black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Dropdown>
          <DropdownTrigger>
            <Button
              radius="md"
              variant="bordered"
              color="default"
              blackText={false}
            ></Button>
          </DropdownTrigger>
          <DropdownMenu
            position="bottom-end"
            offset={5}
            aria-label="Static Actions"
          >
            <DropdownItem key="new">
              New file to make people happy!
            </DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" color="danger" variant="solid">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <Button
              radius="md"
              variant="bordered"
              color="default"
              blackText={false}
              isIconOnly
            >
              <SpainFlag />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            position="bottom-end"
            offset={5}
            aria-label="Static Actions"
          >
            <DropdownItem key="new">New file</DropdownItem>

            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
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
