"use server";
import prisma from "@/lib/db";

export const getTodos = async () => {
  try {
    const todos = await prisma.todo.findMany();
    return todos;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createTodo = async (title: string) => {
  try {
    const newTodo = await prisma.todo.create({
      data: { title },
    });
    return newTodo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const todo = await prisma.todo.delete({
      where: { id },
    });
    return todo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editTodo = async (
  id: number,
  title: string,
  completed: boolean
) => {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { title, completed },
    });
    return todo;
  } catch (error) {
    console.error(error);
    return null;
  }
};
