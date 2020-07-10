import React from 'react';
import Todo from './Todo';

export default function ToDoList({ todos }) {
  return todos.map((item) => {
    return <Todo key={item.id} todo={item} />;
  });
}
