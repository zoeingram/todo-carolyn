import React, { useState, useEffect, setState } from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function App() {

  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);
  //run once when the app starts
  useEffect(() => {
    getLocalToDos();
  }, []);
  //use Effect
  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredToDos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  }

  //save to local storage
  const saveLocalToDos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalToDos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Things To Do:</h1>
      </header>
      <Form
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <ToDoList
      filteredToDos={filteredToDos}
      setTodos={setTodos}
      todos={todos}
      />
    </div>
  );
}

export default App;
