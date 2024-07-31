// This is a component
import MooseListItem from "./MooseListItem.jsx";

export default function MeeseList({ mooseList, onRemoveMoose }) {
  return (
    <ul>
      {mooseList.map((moose) => (
        <MooseListItem
          key={moose.id}
          title={moose.title}
          onRemoveMoose={onRemoveMoose}
          id={moose.id}
        />
      ))}
    </ul>
  );
}
