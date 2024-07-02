import "./App.css";
import GoosesList from "./GooseList.jsx";
import AddGooseForm from "./AddGooseForm.jsx";

function App() {
  return (
    <>
      <h1>Geese</h1>
      <AddGooseForm />
      <GoosesList />
    </>
  );
}

export default App;
