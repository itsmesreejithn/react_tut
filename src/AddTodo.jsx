import React from 'react'

export default function AddTodo({setTodos}) {

  const inputRef = React.useRef();

    function handleAddTodo(event) {
        // To prevent the defalut refresh of submitting form
        event.preventDefault();
        console.log(event.target.elements.addTodo.value);
        const text = event.target.elements.addTodo.value;
        // using todo object to pass to TodoList
        const todo = {
            id: 4,
            text, 
            done: false
        };
        
        setTodos(prevTodos => {
          return prevTodos.concat(todo);
        });
        inputRef.current.value = "";
    }

  return (
    <form onSubmit={handleAddTodo}>
        <input name="addTodo" type="text" placeholder='Add todo' ref={inputRef} />
        <button type="submit">Submit</button>
    </form>
  )
}
