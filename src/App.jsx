import "./App.css";
import { useState } from "react";
import GoosesList from "./GooseList.jsx";
import AddGooseForm from "./AddGooseForm.jsx";

function App() {
  const [gooseList, setGooseList] = useState([]);

  function addGoose(newGoose) {
    setGooseList((previousGooseList) => [...previousGooseList, newGoose]);
  }

  return (
    <>
      <h1>Geese</h1>
      <AddGooseForm onAddGoose={addGoose} />
      <GoosesList gooseList={gooseList} />
    </>
  );
}

export default App;
