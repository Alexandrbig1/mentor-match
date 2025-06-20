import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import type { Task } from "../../types/task";

export default function Todo() {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), todo: text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem todo={item} onDelete={deleteTodo} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
