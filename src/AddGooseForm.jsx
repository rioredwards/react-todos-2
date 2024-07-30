import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel.jsx";

export default function AddGooseForm({ onAddGoose }) {
  const [gooseTitle, setGooseTitle] = useState("");

  function handleTitleChange(event) {
    const newGooseTitle = event.target.value;
    setGooseTitle(newGooseTitle);
  }

  function handleAddGoose(event) {
    event.preventDefault();
    const newGoose = {
      title: gooseTitle,
      id: Date.now(),
    };

    onAddGoose(newGoose);
    setGooseTitle("");
  }

  return (
    <form onSubmit={handleAddGoose}>
      <InputWithLabel gooseTitle={gooseTitle} handleTitleChange={handleTitleChange}>
        Add a goose!
      </InputWithLabel>

      <button type="submit">Add Goose</button>
    </form>
  );
}
