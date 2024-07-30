// This is a component
import GooseListItem from "./GooseListItem.jsx";

export default function GoosesList({ gooseList, onRemoveGoose }) {
  return (
    <ul>
      {gooseList.map((goose) => (
        <GooseListItem
          key={goose.id}
          title={goose.title}
          onRemoveGoose={onRemoveGoose}
          id={goose.id}
        />
      ))}
    </ul>
  );
}
