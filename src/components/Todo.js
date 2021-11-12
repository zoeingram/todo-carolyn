import React, { useState, setState, Component } from 'react';
import ToDoList from './ToDoList';
import { EditText, EditTextarea} from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import Tag from "./Tag";

const Todo = ({text, todo, todos, setTodos }) => {
  //Events

  //delete button
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const updateHandler = (updatedTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    }));
  }

  //complete button
  const completeHandler = () => {
    setTodos(
      todos.map(item => {
        if(item.id === todo.id){
          return{
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <React.Fragment>
        <EditText
        name="textbox1"
        className={`todo-item ${todo.completed ? "completed" : ""}`}
        defaultValue={text}
        />
      </React.Fragment>
      <button
        onClick={completeHandler}
        className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={deleteHandler}
        className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      
      <Tag 
        tags={todo.tags}
        todo={todo}
        updateTodo={updateHandler}
      />
    </div>

  );
}

export default Todo;
