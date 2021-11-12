import React from 'react';
//import components
import Todo from "./Todo";

const ToDoList = ({todos, setTodos, filteredToDos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
            isInEditMode={todo.isInEditMode}
          />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList;
