import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel.jsx";

export default function AddMooseForm({ onAddMoose }) {
  const [mooseTitle, setMooseTitle] = useState("");

  function handleTitleChange(event) {
    const newMooseTitle = event.target.value;
    setMooseTitle(newMooseTitle);
  }

  function handleAddMoose(event) {
    event.preventDefault();
    const newMoose = {
      title: mooseTitle,
      id: Date.now(),
    };

    onAddMoose(newMoose);
    setMooseTitle("");
  }

  return (
    <form onSubmit={handleAddMoose}>
      <InputWithLabel mooseTitle={mooseTitle} handleTitleChange={handleTitleChange}>
        Add a moose!
      </InputWithLabel>

      <button type="submit">Add Moose</button>
    </form>
  );
}
