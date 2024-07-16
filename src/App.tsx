import React from "react";
import "./App.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "./stories";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <Dropdown>
          <DropdownTrigger>
            <Button radius="md" variant="bordered" color="default" blackText>
              Open Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            position={"bottom"}
            offset={0}
            aria-label="Static Actions"
          >
            <DropdownItem textColor="aqua" key="new">
              New file
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
            <Button radius="md" variant="bordered" color="default" blackText>
              Open Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            position={"bottom"}
            offset={0}
            aria-label="Static Actions"
          >
            <DropdownItem textColor="aqua" key="new">
              New file
            </DropdownItem>
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
