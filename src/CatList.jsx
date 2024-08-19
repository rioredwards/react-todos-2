// This is a component
import CatListItem from "./CatListItem.jsx";

export default function CatsList({ catList, onRemoveCat }) {
  return (
    <ul>
      {catList.map((cat) => (
        <CatListItem key={cat.id} title={cat.title} onRemoveCat={onRemoveCat} id={cat.id} />
      ))}
    </ul>
  );
}
