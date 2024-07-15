import React, { useState } from "react";
import Slider from "./stories/Slider";
import "./App.css";
import { VolumeLowIcon } from "./icons/VolumeLowIcon";
import { VolumeHighIcon } from "./icons/VolumeHighIcon";
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardWithImage,
  Checkbox,
  CheckboxGroup,
  CircularProgress,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Progress,
} from "./stories";
import { CardProduct } from "./stories/Cards";

function App() {
  const [value, setValue] = useState(0.5);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          background: "black",
          width: "100%",
          padding: "1rem",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dropdown>
          <DropdownTrigger>
            <Button radius="md" variant="bordered" color="default">
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
        <Button
          radius="md"
          size="md"
          customColor="#d10"
          customHoverColor="purple"
        >
          Click me
        </Button>
        <Button radius="md" variant="bordered" color="default">
          Click me
        </Button>
        <ButtonGroup>
          <Button
            customColor="#d10"
            label="One"
            radius="none"
            color="primary"
            size="md"
          />
          <Button
            customColor="#d10"
            label="Two"
            radius="none"
            color="primary"
            size="md"
          />
          <Button
            customColor="#d10"
            label="Three"
            radius="none"
            color="primary"
            size="md"
          />
        </ButtonGroup>

        {/* <Slider
          value={value}
          onChange={setValue}
          size="md"
          color="success"
          direction="horizontal"
          maxWidth={400}
        /> */}

        <Slider
          value={value}
          onChange={setValue}
          size="md"
          showSteps
          step={25}
          customColor="#d10"
          customHoverColor="#A00F0F"
          startContent={<VolumeLowIcon />}
          endContent={<VolumeHighIcon />}
          direction="horizontal"
          maxWidth={500}
        />

        <Divider />

        <Card
          cardWidth="md"
          padding="sm"
          customColor="red"
          customTextColor="black"
          customRippleColor="black"
          isClickable
        >
          <CardWithImage customTextColor="black" />
        </Card>

        {/* <Card
          cardWidth="md"
          padding="sm"
          isClickable
          customRippleColor="purple"
        >
          <CardWithImage customTextColor="orange" />
        </Card> */}

        <Card
          cardWidth="none"
          isClickable
          customTextColor="orange"
          customColor="white"
          customPadding="20px"
        >
          <CardProduct />
        </Card>

        <Avatar avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Badge
          customColor="#d10"
          badgeContent={2}
          bordered={false}
          isCircular
          variant="solid"
        >
          <Avatar avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Badge>
        <Checkbox text="Check me" customColor="red" textColor />
        <CheckboxGroup direction="horizontal">
          <Checkbox text="Check me" textColor color="default" />
          <Checkbox text="Check me" color="default" />
          <Checkbox text="Check me" color="primary" />
        </CheckboxGroup>
        <CircularProgress size="md" color="warning" customColor="red" />
        <Input />
        <Progress customColor="red" value={50} />
        <Progress customColor="red" isIndeterminate />
        <Progress
          customColor="red"
          label="Hola"
          value={50}
          valueLabel="50"
          showPercentageLabel
        />
      </div>
    </>
  );
}

export default App;
