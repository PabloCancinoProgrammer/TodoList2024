import React from 'react'

function TodoItem({todo, onComplete, onDeleteItem}) {
  const getStyle = () => {
    return {
      color: "white",
      textDecoration: todo.completed ? "line-Through" : "none",
      border: "2px solid",
      margin: "10px",
      backgroundColor: "EFCSGE",

    }
  }
  return (
    <div style={getStyle()}>
      <input type="checkbox" checked={todo.completed} onChange={()=> onComplete(todo.id)} />
      {todo.task}
      <button className='add-btn' onClick={()=> onDeleteItem(todo.id)}>Clean Task</button>
    </div>
  )
}

export default TodoItem