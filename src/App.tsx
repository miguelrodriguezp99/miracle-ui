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
        <Button radius="md" size="md" whiteText customColor="#d10">
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
          color="primary"
          customColor="#d10"
          startContent={<VolumeLowIcon />}
          endContent={<VolumeHighIcon />}
          direction="horizontal"
          maxWidth={500}
        />

        <Card
          cardWidth="md"
          padding="sm"
          customColor="orange"
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

        <Card cardWidth="none" isClickable>
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
