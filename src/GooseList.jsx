// This is a component
import GooseListItem from "./GooseListItem.jsx";

export default function GoosesList(props) {
  return (
    <ul>
      {props.gooseList.map((goose) => (
        <GooseListItem key={goose.id} title={goose.title} />
      ))}
    </ul>
  );
}
