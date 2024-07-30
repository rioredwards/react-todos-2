export function InputWithLabel(props) {
  return (
    <>
      <label htmlFor="gooseType">{props.children}</label>
      <input
        value={props.gooseTitle}
        onChange={props.handleTitleChange}
        name="type"
        id="gooseType"
      />
    </>
  );
}
