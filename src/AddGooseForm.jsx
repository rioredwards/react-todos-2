import { useState } from "react";

export default function AddGooseForm(props) {
  const [gooseTitle, setGooseTitle] = useState("");

  function handleTitleChange(event) {
    const newGooseTitle = event.target.value;
    setGooseTitle(newGooseTitle);
  }

  function handleAddGoose(event) {
    event.preventDefault();
    const form = event.target;
    props.onAddGoose(gooseTitle);
    form.reset();
  }

  return (
    <form onSubmit={handleAddGoose}>
      <label htmlFor="gooseType">Enter goose type</label>
      <input value={gooseTitle} onChange={handleTitleChange} name="type" id="gooseType" />
      <button type="submit">Add Goose</button>
    </form>
  );
}
