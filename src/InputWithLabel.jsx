import { useEffect, useRef } from "react";

export function InputWithLabel(props) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="catType">{props.children}</label>
      <input
        value={props.catTitle}
        onChange={props.handleTitleChange}
        name="type"
        id="catType"
        ref={inputRef}
      />
    </>
  );
}
