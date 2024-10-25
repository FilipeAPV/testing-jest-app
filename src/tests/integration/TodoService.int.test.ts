// Integration test for the `getTodos` function.
// This test interacts with a real test database to verify end-to-end functionality.
// Ensures that `getTodos` correctly retrieves todos from the database.

import { getTodos } from "../../data/todo";
import prisma from "../../lib/db";

beforeAll(async () => {
  await prisma.$connect();
  await prisma.todo.deleteMany();
});

afterAll(async () => {
  await prisma.todo.deleteMany();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await prisma.todo.createMany({
    data: [
      { title: "Buy groceries", completed: false },
      { title: "Walk the dog", completed: true },
    ],
  });
});

afterEach(async () => {
  await prisma.todo.deleteMany();
});

describe("getTodos Integration Test", () => {
  it("should retrieve all todos from the database", async () => {
    const todos = await getTodos();

    expect(todos).toHaveLength(2);
    expect(todos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "Buy groceries", completed: false }),
        expect.objectContaining({ title: "Walk the dog", completed: true }),
      ])
    );
  });

  it("should return an empty array when no todos exist", async () => {
    await prisma.todo.deleteMany();

    const todos = await getTodos();

    expect(todos).toEqual([]);
  });
});
