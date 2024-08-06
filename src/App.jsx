import "./App.css";
import { useEffect, useState } from "react";
import MeeseList from "./MooseList.jsx";
import AddMooseForm from "./AddMooseForm.jsx";

function App() {
  const [mooseList, setMooseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingMeese = JSON.parse(localStorage.getItem("savedMooseList")) ?? [];
        const object = {
          data: {
            mooseList: existingMeese,
          },
        };
        resolve(object);
      }, 2000);
    }).then((result) => {
      const retrievedMooseList = result.data.mooseList;
      setMooseList(retrievedMooseList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const mooseListString = JSON.stringify(mooseList);
      localStorage.setItem("savedMooseList", mooseListString);
    }
  }, [mooseList, isLoading]);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MeeseList onRemoveMoose={removeTodo} mooseList={mooseList} />
      )}
    </main>
  );
}

export default App;
