export default function AddGooseForm(props) {
  function handleAddGoose(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const inputValue = input.value;
    console.log(inputValue);
    props.onAddGoose(inputValue);
    form.reset();
  }

  return (
    <form onSubmit={handleAddGoose}>
      <label htmlFor="gooseType">Enter goose type</label>
      <input name="type" id="gooseType" />
      <button type="submit">Add Goose</button>
    </form>
  );
}
