// Unit test for the `getTodos` function.
// This test verifies the function's behavior in isolation by mocking the Prisma client.
// Ensures correct handling of both successful data retrieval and error scenarios.

// Mock the default export of prisma client
jest.mock("../lib/db", () => ({
  __esModule: true,
  default: {
    todo: {
      findMany: jest.fn(),
    },
  },
}));

import { getTodos } from "../data/todo";
import prisma from "../lib/db";

describe("getTodos", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return an array of todos when prisma.todo.findMany succeeds", async () => {
    const mockTodos = [
      { id: 1, title: "Buy groceries", completed: false },
      { id: 2, title: "Walk the dog", completed: true },
    ];

    (prisma.todo.findMany as jest.Mock).mockResolvedValue(mockTodos);

    const result = await getTodos();

    expect(result).toEqual(mockTodos);
    expect(prisma.todo.findMany).toHaveBeenCalledTimes(1);
  });

  it("should return null and log an error when prisma.todo.findMany throws an error", async () => {
    const mockError = new Error("Database connection failed");
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    (prisma.todo.findMany as jest.Mock).mockRejectedValue(mockError);

    const result = await getTodos();

    expect(result).toBeNull();
    expect(prisma.todo.findMany).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);

    consoleErrorSpy.mockRestore();
  });
});
