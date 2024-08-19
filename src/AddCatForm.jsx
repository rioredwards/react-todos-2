import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel.jsx";

export default function AddCatForm({ onAddCat }) {
  const [catTitle, setCatTitle] = useState("");

  function handleTitleChange(event) {
    const newCatTitle = event.target.value;
    setCatTitle(newCatTitle);
  }

  function handleAddCat(event) {
    event.preventDefault();
    const newCat = {
      title: catTitle,
      id: Date.now(),
    };

    onAddCat(newCat);
    setCatTitle("");
  }

  return (
    <form onSubmit={handleAddCat}>
      <InputWithLabel catTitle={catTitle} handleTitleChange={handleTitleChange}>
        Add a cat!
      </InputWithLabel>

      <button type="submit">Add cat</button>
    </form>
  );
}
