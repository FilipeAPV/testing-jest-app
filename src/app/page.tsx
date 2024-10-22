import TodoForm from "@/components/todo-form";
import { getTodos } from "@/data/todo";
import React from "react";

export default async function HomePage() {
  const todos = (await getTodos()) || [];
  return <TodoForm todos={todos} />;
}
