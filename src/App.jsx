import "./App.css";

function App() {
  const frogs = [
    { type: "Tree Frog", id: 0 },
    { type: "Toad", id: 1 },
    { type: "Bullfrog", id: 2 },
    { type: "Poison Dart Frog", id: 3 },
  ];

  return (
    <>
      <h1>Frogs</h1>
      <ul>
        {frogs.map((cow) => (
          <li key={cow.id}>{cow.type}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
