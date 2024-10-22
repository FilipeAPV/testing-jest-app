import prisma from "@/lib/db";

export const getTodos = async () => {
  try {
    const todos = await prisma.todo.findMany();
    console.log(todos);
  } catch (error) {
    console.error(error);
    return null;
  }
};
