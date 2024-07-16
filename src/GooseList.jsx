// This is a component
import GooseListItem from "./GooseListItem.jsx";

const geese = [
  { title: "Lucy", id: 0 },
  { title: "Toad", id: 1 },
  { title: "Gander", id: 2 },
  { title: "Honker", id: 3 },
];

export default function GoosesList() {
  return (
    <ul>
      {geese.map((goose) => (
        <GooseListItem key={goose.id} title={goose.title} />
      ))}
    </ul>
  );
}
