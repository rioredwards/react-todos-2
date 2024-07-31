import "./App.css";
import { useEffect, useState } from "react";
import MeeseList from "./MooseList.jsx";
import AddMooseForm from "./AddMooseForm.jsx";

function useSemiPersistentState() {
  const existingMeese = JSON.parse(localStorage.getItem("savedMooseList")) ?? [];
  const [mooseList, setMooseList] = useState(existingMeese);

  useEffect(() => {
    const mooseListString = JSON.stringify(mooseList);
    localStorage.setItem("savedMooseList", mooseListString);
  }, [mooseList]);

  return [mooseList, setMooseList];
}

function App() {
  const [mooseList, setMooseList] = useSemiPersistentState();

  function addMoose(newMoose) {
    setMooseList((previousMooseList) => [...previousMooseList, newMoose]);
  }

  function removeTodo(id) {
    const filteredMeese = mooseList.filter((moose) => moose.id !== id);
    setMooseList(filteredMeese);
  }

  return (
    <main>
      <h1>Meese</h1>
      <AddMooseForm onAddMoose={addMoose} />
      <MeeseList onRemoveMoose={removeTodo} mooseList={mooseList} />
    </main>
  );
}

export default App;
