import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const job = await prisma.jobs.findMany({
    include: {
      Person: true,
    },
  });

  console.log(job);
}

main();
