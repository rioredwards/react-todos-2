import "./App.css";
import { useState } from "react";
import GoosesList from "./GooseList.jsx";
import AddGooseForm from "./AddGooseForm.jsx";

function App() {
  const [newGoose, setNewGoose] = useState("");
  const [gooseList, setGooseList] = useState([]);

  return (
    <>
      <h1>Geese</h1>
      <AddGooseForm onAddGoose={setNewGoose} />
      <p>{newGoose}</p>
      <GoosesList gooseList={gooseList} />
    </>
  );
}

export default App;
