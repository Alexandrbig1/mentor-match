import type { FC } from "react";
import type { Task } from "../../types/task";

interface TodoItemProps {
  todo: Task;
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }: TodoItemProps) => {
  return (
    <li style={{ display: "flex" }}>
      <h2>{todo.todo}</h2>
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </li>
  );
};

export default TodoItem;
