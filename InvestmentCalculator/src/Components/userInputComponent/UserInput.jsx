export default function UserInput({ labelName, onValueChange }) {
  return (
    <div>
      <label>{labelName}</label>
      <input type="number" onChange={onValueChange} />
    </div>
  );
}
