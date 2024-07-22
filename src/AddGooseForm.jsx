import { useState } from "react";

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
      <label htmlFor="gooseType">Enter goose type</label>
      <input value={gooseTitle} onChange={handleTitleChange} name="type" id="gooseType" />
      <button type="submit">Add Goose</button>
    </form>
  );
}
