/*
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const todos = [
    {
      title: "Buy Groceries",
    },
    {
      title: "Walk the Dog",
    },
    {
      title: "Read a Book",
    },
    {
      title: "Workout",
    },
    {
      title: "Plan Vacation",
    },
  ];

  for (const todo of todos) {
    await prisma.todo.create({
      data: todo,
    });
  }

  console.log("✅ Database has been seeded with 5 Todo records.");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding the database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
*/
