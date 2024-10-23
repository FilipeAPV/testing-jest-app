import TodoCard from "@/components/todo-card";
import TodoForm from "@/components/todo-form";
import { getTodos } from "@/data/todo";
import { Todo } from "@/types";
import React from "react";

export default async function HomePage() {
  const todos: Todo[] = (await getTodos()) || [];
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-200 opacity-30 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <TodoCard>
        <TodoForm todosData={todos} />
      </TodoCard>
    </div>
  );
}
