export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: { todo: Omit<Todo, "id"> } }
  | { type: "DELETE_TODO"; payload: { todo: Todo } }
  | { type: "UPDATE_TODO"; payload: { todo: Todo } };
