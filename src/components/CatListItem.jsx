export default function CatListItem({ title, onRemoveCat, id }) {
  return (
    <li>
      {title} <button onClick={() => onRemoveCat(id)}>Remove</button>
    </li>
  );
}
