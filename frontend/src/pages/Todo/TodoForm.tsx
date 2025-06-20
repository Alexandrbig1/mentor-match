import { useState } from "react";
import type { FC, FormEvent, ChangeEvent } from "react";

interface TodoFormProps {
  onAdd: (todo: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ onAdd }: TodoFormProps) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New ToDo"
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
