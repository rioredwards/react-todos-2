import "./App.css";
import { useEffect, useState } from "react";
import GoosesList from "./GooseList.jsx";
import AddGooseForm from "./AddGooseForm.jsx";

function useSemiPersistentState() {
  const existingGeese = JSON.parse(localStorage.getItem("savedGooseList")) ?? [];
  const [gooseList, setGooseList] = useState(existingGeese);

  useEffect(() => {
    const gooseListString = JSON.stringify(gooseList);
    localStorage.setItem("savedGooseList", gooseListString);
  }, [gooseList]);

  return [gooseList, setGooseList];
}

function App() {
  const [gooseList, setGooseList] = useSemiPersistentState();

  function addGoose(newGoose) {
    setGooseList((previousGooseList) => [...previousGooseList, newGoose]);
  }

  function removeTodo(id) {
    const filteredGeese = gooseList.filter((goose) => goose.id !== id);
    setGooseList(filteredGeese);
  }

  return (
    <>
      <h1>Geese</h1>
      <AddGooseForm onAddGoose={addGoose} />
      <GoosesList onRemoveGoose={removeTodo} gooseList={gooseList} />
    </>
  );
}

export default App;
