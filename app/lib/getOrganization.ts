import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getOrganization(organazationId: string) {
  const organization = await prisma.organization.findUnique({
    where: { id: organazationId },
    include: {
      owner: true,
      opportunities: true,
      events: true,
      categories: true,
    },
  });
  return organization;
}

