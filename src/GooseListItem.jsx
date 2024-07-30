export default function GooseListItem({ title, onRemoveGoose, id }) {
  return (
    <li>
      {title} <button onClick={() => onRemoveGoose(id)}>Remove</button>
    </li>
  );
}
