import React from "react";

import Dropdown, {
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "./stories/Dropdown";
import { Button } from "./stories";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dropdown>
        <DropdownTrigger>
          <Button radius="md" variant="bordered" color="default" blackText>
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" color="danger" variant="solid">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
