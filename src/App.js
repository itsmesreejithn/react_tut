import AddTodo from './AddTodo';
import './App.css';
import TodoList from './TodoList';
import React from 'react';

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, text: "Wash dishes", done: false},
    {id: 2, text: "Do laundry", done: false},
    {id: 3, text: "Take shower", done: false}
  ]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* passing todos as props to the TodoList componenet */}
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos}/>
    </div>
  );
}

export default App;
