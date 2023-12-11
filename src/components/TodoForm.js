import React, { useState } from 'react'


function TodoForm({addTodo}) {
  const [userInput, setUserInput] = useState('')
  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value)
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(userInput.trim() !== '')
    addTodo(userInput)
    setUserInput('')

  }
  return (
    <div style={{margin: 20}}>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={userInput} onChange={handleOnChange} />
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
