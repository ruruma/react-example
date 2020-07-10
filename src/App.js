import React, { useState, useEffect, useRef } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = React.useState([]);

  const todoname = useRef();

  function HandleAddTodo(e) {
    const name = todoname.current.value;
    if (name === '') return;
    setTodo((previousItem) => {
      return [...previousItem, { id: uuidv4(), name: name, complete: false }];
    });
    todoname.current.value = null;
  }
  return (
    <>
      <ToDoList todos={todo} />
      <input ref={todoname} type='text'></input>
      <button onClick={HandleAddTodo}>Add TO DO</button>
      <button>Clear/Complited TODO</button>
      {/* <div>{`${todo.length} Left TODO's`}</div> */}
    </>
  );
}

export default App;
