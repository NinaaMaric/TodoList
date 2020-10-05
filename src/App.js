import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilterTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };
    
    filterHandler();
    saveLocalTodo();
  }, [todos, status]);

  //save to local storage
  const saveLocalTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Nina's ToDo list</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
