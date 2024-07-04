import React from "react";

import Dropdown, {
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "./stories/Dropdown";
import { Button } from "./stories";
import { NewFileIcon } from "./Icons/NewFileIcon";
import { CopyLinkIcon } from "./Icons/CopyLinkIcon";
import { EditFileIcon } from "./Icons/EditFileIcon";
import { DeleteFileIcon } from "./Icons/DeleteFileIcon";

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
          <DropdownItem
            startContent={<NewFileIcon />}
            color="primary"
            key="new"
          >
            New file
          </DropdownItem>
          <DropdownItem
            startContent={<CopyLinkIcon />}
            color="default"
            key="copy"
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            startContent={<EditFileIcon />}
            color="success"
            key="edit"
          >
            Edit file
          </DropdownItem>
          <DropdownItem
            startContent={<DeleteFileIcon />}
            key="delete"
            color="danger"
            variant="solid"
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* <Dropdown> with endContent*/}
      <Dropdown>
        <DropdownTrigger>
          <Button radius="md" variant="bordered" color="default" blackText>
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem endContent={<NewFileIcon />} color="primary" key="new">
            New file
          </DropdownItem>
          <DropdownItem
            endContent={<CopyLinkIcon />}
            color="default"
            key="copy"
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            endContent={<EditFileIcon />}
            color="success"
            key="edit"
          >
            Edit file
          </DropdownItem>
          <DropdownItem
            endContent={<DeleteFileIcon />}
            key="delete"
            color="danger"
            variant="solid"
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
