import React, { useState } from "react";
import Slider from "./stories/Slider";
import "./App.css";
import { VolumeLowIcon } from "./Icons/VolumeLowIcon";
import { VolumeHighIcon } from "./Icons/VolumeHighIcon";
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
  Input,
  Progress,
} from "./stories";

function App() {
  const [value, setValue] = useState(0.5);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          background: "gray",
          width: "100%",
          padding: "1rem",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button radius="md" size="md">
          Click me
        </Button>
        <Button radius="md" variant="bordered" color="default" blackText>
          Click me
        </Button>
        <ButtonGroup>
          <Button label="One" radius="none" color="primary" size="sm" />
          <Button label="Two" radius="none" color="primary" size="sm" />
          <Button label="Three" radius="none" color="primary" size="sm" />
        </ButtonGroup>

        <Slider
          value={value}
          onChange={setValue}
          showSteps
          step={5}
          size="md"
          color="default"
          startContent={<VolumeLowIcon />}
          endContent={<VolumeHighIcon />}
          direction="horizontal"
        />

        <Card cardWidth="md" padding="sm">
          <CardWithImage />
        </Card>

        <Slider
          value={value}
          onChange={setValue}
          label="Volume"
          size="lg"
          direction="horizontal"
          color="primary"
          maxValue={150}
          showSteps
          step={20}
        />

        <Avatar avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Badge badgeContent={2} bordered={false} isCircular variant="solid">
          <Avatar avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Badge>
        <Checkbox text="Check me" textColor color="primary" />
        <CheckboxGroup direction="horizontal">
          <Checkbox text="Check me" textColor color="primary" />
          <Checkbox text="Check me" textColor color="primary" />
          <Checkbox text="Check me" textColor color="primary" />
        </CheckboxGroup>
        <CircularProgress size="md" color="primary" />
        <Input />
        <Progress value={50} />
        <Progress isIndeterminate />
        <Progress label="Hola" value={50} valueLabel="50" showPercentageLabel />
      </div>
    </>
  );
}

export default App;
