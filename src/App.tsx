import React, { useState } from "react";
import Slider from "./stories/Slider";
import "./App.css";
import { VolumeLowIcon } from "./Icons/VolumeLowIcon";
import { VolumeHighIcon } from "./Icons/VolumeHighIcon";
import { Button, ButtonGroup, Card, CardWithImage, Checkbox } from "./stories";

function App() {
  const [value, setValue] = useState(0.5);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkgray",
      }}
    >
      <Checkbox text="Hello" size="lg" color="primary" />
      {/* <Slider
        label="Hello"
        size="sm"
        direction="horizontal"
        color="secondary"
        value={value}
        onChange={setValue}
        maxValue={150}
        step={20}
        showSteps
      /> */}

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
      <Button size="lg">Click me</Button>
      <ButtonGroup>
        <Button radius="none" size="md">
          HELLO
        </Button>
        <Button radius="none" size="md">
          HELLO
        </Button>
        <Button radius="none" size="md">
          HELLO
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button label="One" radius="none" color="primary" size="md" />
        <Button label="Two" radius="none" color="primary" size="md" />
        <Button label="Three" radius="none" color="primary" size="md" />
      </ButtonGroup>

      <Card cardWidth="md" padding="sm">
        <CardWithImage />
      </Card>

      {/* <Slider
        value={value}
        onChange={setValue}
        label="Volume"
        size="md"
        direction="horizontal"
        color="primary"
        maxValue={150}
        showSteps
        step={20}
      />

      <Slider
        value={value}
        onChange={setValue}
        label="Volume"
        size="sm"
        direction="horizontal"
        color="primary"
        maxValue={150}
        showSteps
        step={20}
      /> */}

      {/* <Slider
        value={value}
        onChange={setValue}
        startContent={<VolumeLowIcon />}
        endContent={<VolumeHighIcon />}
        size="md"
        direction="horizontal"
        color="primary"
        maxValue={150}
        showSteps
        step={20}
      /> */}

      {/* <Slider
        step={20}
        size="lg"
        direction="horizontal"
        color="secondary"
        maxValue={150}
        value={value}
        onChange={setValue}
      /> */}
    </div>
  );
}

export default App;
