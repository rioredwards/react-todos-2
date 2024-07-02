export default function AddGooseForm() {
  function handleAddGoose(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const inputValue = input.value;
    console.log(inputValue);
  }

  return (
    <form onSubmit={handleAddGoose}>
      <label htmlFor="gooseType">Enter goose type</label>
      <input name="type" id="gooseType" />
      <button type="submit">Add Goose</button>
    </form>
  );
}
