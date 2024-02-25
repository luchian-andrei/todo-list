import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function App() {
  const [input, setInput] = useState("");
  const [note, setNote] = useState([]);

  console.log(input);
  console.log(note);

  function handleClick(e) {
    e.preventDefault();
    setNote([...input, { id: uuidv4, text: note }]);
  }

  return (
    <div className="App">
      <div className="todo-container">
        <div className="input-wrapper">
          <form id="todo-form">
            <input
              type="text"
              id="form-input"
              placeholder="What`s on the list for today ?"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit" id="form-button" onClick={handleClick}>
              Add Note
            </button>
          </form>
        </div>
        <div className="content-wrapper"></div>
      </div>
    </div>
  );
}

export default App;
