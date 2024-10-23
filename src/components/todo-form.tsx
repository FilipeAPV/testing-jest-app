"use client";

import { startTransition, useActionState, useOptimistic } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo } from "@/types";
import { todosReducer } from "@/lib/todos-reducer";
import List from "./list";
import Item from "./item";

type TodoFormProps = {
  todosData: Todo[] | [];
};

export default function TodoForm({ todosData }: TodoFormProps) {
  const [todos, dispatch] = useActionState(todosReducer, todosData);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title")!.toString();
    const id = Math.floor(Math.random() * 1000);
    const todo: Todo = { id, title, completed: false };
    startTransition(async () => {
      setOptimisticTodos((prev) => [todo, ...prev]);
      dispatch({
        type: "ADD_TODO",
        payload: { todo: { title, completed: false } },
      });
    });
    form.reset();
  };

  const handleDeleteTodo = async (todo: Todo) => {
    startTransition(async () => {
      setOptimisticTodos((prev) =>
        prev.filter((todoState) => todoState.id !== todo.id)
      );
      dispatch({ type: "DELETE_TODO", payload: { todo } });
    });
  };

  const handleUpdateTodo = async (todo: Todo) => {
    startTransition(async () => {
      setOptimisticTodos((prev) =>
        prev.map((todoState) => (todoState.id === todo.id ? todo : todoState))
      );
      dispatch({ type: "UPDATE_TODO", payload: { todo } });
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleAddTodo} className="flex mb-4">
        <Input
          name="title"
          type="text"
          placeholder="Add a new todo"
          className="flex-grow mr-2"
        />
        <Button type="submit">Add</Button>
      </form>
      <List>
        {optimisticTodos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onSaveEditing={handleUpdateTodo}
          />
        ))}
      </List>
    </div>
  );
}
