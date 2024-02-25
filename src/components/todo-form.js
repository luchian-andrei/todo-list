import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoForm() {
  const [input, setInput] = useState("");
  const [note, setNote] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form-container">
      <form id="todo-form" onSubmit={handleSubmit}>
        <input
          id="form-input"
          type="text"
          name="form-input"
          onChange={(e) => setInput(e.target.value)}
        />

        <button id="form-button" type="submit"></button>
      </form>
    </div>
  );
}
