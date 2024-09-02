import React, { useEffect, useState } from "react";
import "./components/styles/global.css";
import "./App.css";
import { Checkbox } from "./components";

function App() {
  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);

  const customChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "darkgray",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
        flexDirection: "row",
      }}
    >
      <span
        style={{
          color: "black",
        }}
      >
        {isChecked.toString()}
      </span>
      <Checkbox color="primary" />
      <Checkbox
        color="primary"
        externalState={[isChecked, setIsChecked]}
        customChange={customChange}
      />
    </div>
  );
}

export default App;
