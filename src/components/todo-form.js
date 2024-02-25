import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };

  console.log(value);

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="form-input"
          placeholder="Write your task ..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" id="form-button">
          Add Note
        </button>
      </form>
    </div>
  );
}
