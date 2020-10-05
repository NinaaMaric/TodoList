import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTexthandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  const statushandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTexthandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        +
      </button>
      <div className="select">
        <select onChange={statushandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncomplited</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
