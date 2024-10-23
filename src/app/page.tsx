import TodoForm from "@/components/todo-form";
import { getTodos } from "@/data/todo";
import { Todo } from "@/types";
import React from "react";

export default async function HomePage() {
  const todos: Todo[] = (await getTodos()) || [];
  return <TodoForm todosData={todos} />;
}
