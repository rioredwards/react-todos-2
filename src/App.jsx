import "./App.css";
import { useEffect, useState } from "react";
import GoosesList from "./GooseList.jsx";
import AddGooseForm from "./AddGooseForm.jsx";

// This is a customHook for creating our gooseList and syncing it with localStorage (the in-browser database)
function useSemiPersistentState() {
  // Get any existing geese from localStorage when the app first loads: localStorage stores the array as a JSON string, and JSON.parse converts it back to an array
  const existingGeese = JSON.parse(localStorage.getItem("savedGooseList"));
  // Create state for the geese with an initial value of existingGeese
  const [gooseList, setGooseList] = useState(existingGeese);

  // useEffect is used to sync react state with external systems (like localStorage)
  useEffect(() => {
    // localStorage needs to store our gooseList as a JSON string, so we stringify it
    const gooseListString = JSON.stringify(gooseList);
    // Save our gooseList to localStorage using a key of "savedGooseList"
    localStorage.setItem("savedGooseList", gooseListString);
  }, [gooseList]);
  // ^ The dependency array in our useEffect contains the gooseList state. This tells react to run the callback whenever gooseList changes

  // Return the state we wish to use in our components
  return [gooseList, setGooseList];
}

function App() {
  // Retrieve our gooseState from the customHook
  const [gooseList, setGooseList] = useSemiPersistentState();

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
