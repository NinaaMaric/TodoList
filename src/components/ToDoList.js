import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filterTodos }) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
