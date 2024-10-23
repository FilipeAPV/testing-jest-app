"use server";

import { createTodo, deleteTodo, editTodo } from "@/data/todo";
import { TodoAction } from "@/types";
import { Todo } from "@/types";

export async function todosReducer(
  state: Todo[],
  action: TodoAction
): Promise<Todo[]> {
  try {
    switch (action.type) {
      case "ADD_TODO":
        const newTodo = await createTodo(action.payload.todo.title);
        return newTodo ? [newTodo, ...state] : state;
      case "DELETE_TODO":
        const deletedTodo = await deleteTodo(action.payload.todo.id);
        return deletedTodo
          ? state.filter((item) => item.id !== deletedTodo.id)
          : state;
      case "UPDATE_TODO":
        const updatedTodo = await editTodo(
          action.payload.todo.id,
          action.payload.todo.title,
          action.payload.todo.completed
        );
        return updatedTodo
          ? state.map((item) => {
              if (item.id === updatedTodo.id) {
                return updatedTodo;
              }
              return item;
            })
          : state;
      default:
        throw new Error("Invalid action type");
    }
  } catch (error) {
    console.log(error);
    return state;
  }
}
