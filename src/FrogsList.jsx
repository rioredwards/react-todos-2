// This is a component
import FrogListItem from "./FrogListItem.jsx";

const frogs = [
  { type: "Tree Frog", id: 0 },
  { type: "Toad", id: 1 },
  { type: "Bullfrog", id: 2 },
  { type: "Poison Dart Frog", id: 3 },
];

export default function FrogsList() {
  return (
    <ul>
      {frogs.map((frog) => (
        <FrogListItem key={frog.id} type={frog.type} />
      ))}
    </ul>
  );
}
