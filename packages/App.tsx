import React, { useEffect } from "react";
import "./components/styles/global.css";
import "./App.css";
import { Checkbox } from "./components";

function App() {
  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const isChecked = formData.get("primary-checkbox") === "on";
    console.log("Checkbox is checked:", isChecked);
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
      <form onSubmit={handleSubmit}>
        <Checkbox color="primary" name="primary-checkbox" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
