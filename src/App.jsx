import "./App.css";

function App() {
  const cows = [
    { name: "Nick", socialSecurityNumber: 0 },
    { name: "Kevin", socialSecurityNumber: 1 },
    { name: "Hannah", socialSecurityNumber: 2 },
  ];

  return (
    <>
      <h1>Cows</h1>
      <ul>
        {cows.map((cow) => (
          <li key={cow.socialSecurityNumber}>{cow.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
