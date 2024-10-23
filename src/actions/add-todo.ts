/* "use server";

import { createTodo } from "@/data/todo";

export default async function AddTodo(formData: FormData) {
  const title = formData.get("title")?.toString();
  if (!title) {
    return { error: "Please provide a todo" };
  }
  //const newTodo = await createTodo(title);
  return { success: "Todo Added Successfully" };
} */
