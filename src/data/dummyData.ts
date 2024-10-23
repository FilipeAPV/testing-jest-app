import { Todo } from "@prisma/client";
const dummyData = [
  {
    id: 1,
    title: "Buy Groceries",
    description: null,
    completed: false,
    createdAt: new Date("2024-10-22T18:31:57.439Z"),
    updatedAt: new Date("2024-10-22T18:31:57.439Z"),
  },
  {
    id: 2,
    title: "Walk the Dog",
    description: null,
    completed: false,
    createdAt: new Date("2024-10-22T18:31:57.446Z"),
    updatedAt: new Date("2024-10-22T18:31:57.446Z"),
  },
  {
    id: 3,
    title: "Read a Book",
    description: null,
    completed: false,
    createdAt: new Date("2024-10-22T18:31:57.448Z"),
    updatedAt: new Date("2024-10-22T18:31:57.448Z"),
  },
  {
    id: 4,
    title: "Workout",
    description: null,
    completed: false,
    createdAt: new Date("2024-10-22T18:31:57.453Z"),
    updatedAt: new Date("2024-10-22T18:31:57.453Z"),
  },
  {
    id: 5,
    title: "Plan Vacation",
    description: null,
    completed: false,
    createdAt: new Date("2024-10-22T18:31:57.458Z"),
    updatedAt: new Date("2024-10-22T18:31:57.458Z"),
  },
];

export const getDummyData = async (): Promise<Todo[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 200);
  });
};
