export default function MooseListItem({ title, onRemoveMoose, id }) {
  return (
    <li>
      {title} <button onClick={() => onRemoveMoose(id)}>Remove</button>
    </li>
  );
}
