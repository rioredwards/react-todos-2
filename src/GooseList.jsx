// This is a component
import GooseListItem from "./GooseListItem.jsx";

const gooses = [
  { type: "Tree Goose", id: 0 },
  { type: "Toad", id: 1 },
  { type: "Bullgoose", id: 2 },
  { type: "Poison Dart Goose", id: 3 },
];

export default function GoosesList() {
  return (
    <ul>
      {gooses.map((goose) => (
        <GooseListItem key={goose.id} type={goose.type} />
      ))}
    </ul>
  );
}
