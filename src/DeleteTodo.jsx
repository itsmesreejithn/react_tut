import React from 'react'

function DeleteTodo({todo, setTodos}) {
    function handleDeleteTodo() {
        const confirmed = window.confirm("Do you want to delete this ?");
        if(confirmed) {
            setTodos((prevTodos) => {
                return prevTodos.filter((t) => t.id !== todo.id);
            });
        }
    }
  return (
    <span role="button" style={{
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 10,
        cursor: 'pointer',
    }}
    onClick={handleDeleteTodo}
    >X</span>
  )
}

export default DeleteTodo;