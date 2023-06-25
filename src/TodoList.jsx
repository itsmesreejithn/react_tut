import React from 'react';
import DeleteTodo from './DeleteTodo';
// object desturcturing moving from props.todos to todos
export default function TodoList({todos, setTodos }) {
  // console.log(props);

  function handleToggleTodo(todo) {

    const updateTodods = todos.map((t) => t.id === todo.id ? {
      ...t,
      done: !t.done
    } : t);

    setTodos(updateTodods);
  }

  if(!todos.length) {
    return <p>No todo left!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li 
        onDoubleClick = {() => handleToggleTodo(todo)}
        // adding css inline
        style={{ textDecoration: todo.done ? 'line-through' : "" }} 
        key={todo.id}>{todo.text}
        <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
      {/* <li>Todo Items</li> */}
    </ul>
  );
}
