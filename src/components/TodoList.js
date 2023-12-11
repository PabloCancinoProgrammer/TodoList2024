import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onComplete, onDeleteItem }) {
  return todos.map((todo, index) => (
    <div>
      <TodoItem
        key={`todo-${index}`}
        todo={todo}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  ));
}

export default TodoList;
