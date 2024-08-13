import React, { useEffect } from "react";
import "./components/styles/global.css";
import "./App.css";
import { Chip } from "@components/chip/src";
import { semanticColors } from "@mirakle-ui/system20";
import { UserIcon } from "./icons/UserIcon";
import { Avatar } from "./components";

function App() {
  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "darkgray",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      {Object.values(semanticColors).map((color) => (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
          }}
        >
          <Chip
            startContent={<UserIcon size="14" />}
            endContent={<UserIcon size="14" />}
            variant="solid"
            radius="md"
            color={color}
            size="sm"
          >
            Small
          </Chip>
          <Chip
            avatar={<Avatar name="J" customSize="15px" customFontSize="12px" />}
            variant="bordered"
            radius="sm"
            color={color}
            size="sm"
          >
            Small
          </Chip>
          <Chip variant="light" color={color} size="sm">
            Small
          </Chip>
          <Chip
            onClose={() => {
              console.log("hi");
            }}
            variant="flat"
            radius="lg"
            color={color}
            size="sm"
          >
            Small
          </Chip>
          <Chip variant="faded" radius="full" color={color} size="sm">
            Small
          </Chip>
          <Chip variant="shadow" color={color} size="sm">
            Small
          </Chip>
        </div>
      ))}
    </div>
  );
}

export default App;
